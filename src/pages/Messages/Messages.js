import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/model/ContentInput';
import styles from './Messages.style'

const Messages = () => {

    const [inputModalVisable, setInputModalVisable] = useState(false)

    function handleInputToggle() {
        setInputModalVisable(!inputModalVisable)
    }

    function handleSendContent(content) {
        handleInputToggle();
        console.log(content)
    }

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <FloatingButton icon='plus' onPress={handleInputToggle} />
            <ContentInputModal
                isVisible={inputModalVisable}
                onClose={handleInputToggle}
                onSend={handleSendContent} />
        </SafeAreaView>
    )
}

export default Messages;
