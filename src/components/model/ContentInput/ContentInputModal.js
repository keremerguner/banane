import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Button from '../../Button';
import styles from './ContentInputModal.style';
import Modal from 'react-native-modal';

const ContentInputModal = ({ isVisible, onClose, onSend }) => {

    const [text, setText] = useState(null)

    function handleSend() {

        if (!text) {
            return
        } else {
            onSend(text)
            setText(null)
        }

    }

    return (
        <Modal
            style={styles.modal}
            isVisible={isVisible}
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            swipeDirection='down'
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput
                        placeholder='Metin giriniz ..'
                        onChangeText={setText}
                        multiline
                    />
                </View>
                <Button text='Gönder' onPress={handleSend} />
            </View>
        </Modal>
    )
}

export default ContentInputModal;