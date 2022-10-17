import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/model/ContentInput';
import styles from './Messages.style'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/card/MessageCard'

const Messages = () => {

    const [inputModalVisable, setInputModalVisable] = useState(false)
    const [contentList, setContentList] = useState([])

    useEffect(() => {
        database()
            .ref('messages/')
            .on('value', snapshot => {
                const contentData = snapshot.val()
                if (!contentData) {
                    return
                }
                console.log(contentData)
                const parsedData = parseContentData(contentData)
                setContentList(parsedData)
            })
    }, [])

    function handleInputToggle() {
        setInputModalVisable(!inputModalVisable)
    }

    function handleSendContent(content) {
        handleInputToggle();
        sendContent(content)
    }

    function sendContent(content) {

        const userMail = auth().currentUser.email;

        const contentObject = {
            text: content,
            username: userMail.split('@')[0],
            date: new Date().toISOString()
        }
        console.log(contentObject)
        database().ref('messages/').push(contentObject)
    }

    const renderContent = ({ item }) => <MessageCard message={item} />

    return (

        <SafeAreaView style={styles.container}>
            <FlatList
                data={contentList}
                renderItem={renderContent}
            />
            <FloatingButton icon='plus' onPress={handleInputToggle} />
            <ContentInputModal
                isVisible={inputModalVisable}
                onClose={handleInputToggle}
                onSend={handleSendContent} />
        </SafeAreaView>
    )
}

export default Messages;
