import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { createPost } from '../../redux/actions'

export default function SavePostScreen(props) {
    const [description, setDescription] = useState('')
    const [requestRunning, setRequestRunning] = useState(false)
    const navigation = useNavigation()

    const dispatch = useDispatch();
    const handleSavePost = () => {
        setRequestRunning(true)
        dispatch(createPost(description, props.route.params.source, props.route.params.sourceThumb))
            .then(() => navigation.dispatch(StackActions.popToTop()))
            .then(() => {
                Alert.alert(
                    'Congratulations',
                    'Your video has been uploaded and is under review.\n\nYou will receive 10 points reward!',
                    [{ text: 'Great!' }],
                );
            })
            .then(() => {
                // update user points
                // firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid).get()
                //     .then((doc) => {
                //         if (doc.exists) {
                //             const points = doc.data().score + 10;
                //             firebase.firestore().collection('user').doc(firebase.auth().currentUser.uid).update({
                //                 score: points
                //             })
                //         }
                //     }
                //     )
            })
            .catch((err) => {
                console.log(err)
                setRequestRunning(false)

                navigation.dispatch(StackActions.popToTop())
                Alert.alert(
                    'Error',
                    'Something went wrong. Please try again later.',
                    [{ text: 'OK' }],
                );
            })
    }

    if (requestRunning) {
        return (
            <View style={styles.uploadingContainer}>
                <Text style={styles.uploadingText}>Uploading...</Text>
                <ActivityIndicator color='#f9d264' size='large' />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.inputText}
                    maxLength={150}
                    multiline
                    onChangeText={(text) => setDescription(text)}
                    placeholder="Describe your video"
                />
                <Image
                    style={styles.mediaPreview}
                    source={{ uri: props.route.params.source }}
                />
            </View>
            <View style={styles.spacer} />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.cancelButton}>
                    <Feather name="x" size={24} color="black" />
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleSavePost()}
                    style={styles.postButton}>
                    <Feather name="corner-left-up" size={24} color="white" />
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
