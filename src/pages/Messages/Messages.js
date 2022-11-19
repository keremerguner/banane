import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/model/ContentInput';
import styles from './Messages.style'
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/card/MessageCard'
import { showMessage } from "react-native-flash-message";

const Messages = () => {

    const [inputModalVisable, setInputModalVisable] = useState(false)
    const [contentList, setContentList] = useState([])

    useEffect(() => {
        database()
            .ref('messages/')
            .on('value', snapshot => {
                const contentData = snapshot.val()
                console.log(contentData)
                const parsedData = parseContentData(contentData || {})
                setContentList(parsedData)
            })
    }, [])

    function handleInputToggle() {
        setInputModalVisable(!inputModalVisable)
        //Database erisim izni verildikten sonra kaldirilacak alan
        showMessage({
            message: 'Database erişim izni gerekli',
            icon: 'warning',
            type: "warning",
        });
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
            date: new Date().toISOString(),
            dislike: 0
        }
        console.log(contentObject)
        database().ref('messages/').push(contentObject)
    }

    function handlePress(item) {
        database()
            .ref(`messages/${item.id}/`)
            .update({ dislike: item.dislike + 1 })
        //Database erisim izni verildikten sonra kaldirilacak alan
        showMessage({
            message: 'Database erişim izni gerekli',
            icon: 'warning',
            type: "warning",
        });
        //alan sonu
    }

    const renderContent = ({ item }) => <MessageCard message={item} onPress={() => handlePress(item)} />

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
