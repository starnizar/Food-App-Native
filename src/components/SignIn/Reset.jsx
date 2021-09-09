import React, {useRef, useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    Pressable
} from 'react-native';
import Header from "../Header";

const ResetPassword = ({navigation}) => {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.wrapper}>

                <Header />

                <Text style={styles.h1}>Reset Password</Text>
                <Text style={styles.p}>A reset code has been sent to your email</Text>
                <Text style={styles.label}>Enter code</Text>

                <View style={styles.inputWrapper}>
                    <TextInput  maxLength={1} keyboardType='number-pad' style={styles.input}  />
                    <TextInput  maxLength={1} keyboardType='number-pad' style={styles.input}  />
                    <TextInput  maxLength={1} keyboardType='number-pad' style={styles.input}  />
                    <TextInput  maxLength={1} keyboardType='number-pad' style={styles.input}  />
                </View>

                <Pressable onPress={()=>navigation.navigate('Login')} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send password</Text>
                </Pressable>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F8FBFF'
    },
    h1: {
        fontSize: 24,
        lineHeight: 31,
        fontWeight: 'bold',
        color: '#1C1C1C',
        marginTop: '30%'
    },
    p: {
        width: Dimensions.get('window').width * 0.8,
        maxWidth: 320,
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        paddingLeft: 23,
        marginTop: '5%',
        marginBottom: '15%'
    },
    inputWrapper: {
        flexDirection: 'row',
        marginBottom: '5%'
    },
    label: {
        fontSize: 12,
        lineHeight: 16.44,
        marginBottom: '3%'
    },
    input:{
        width:50,
        height: 50,
        marginHorizontal: 9,
        backgroundColor: '#fff',
        fontSize: 14,
        lineHeight: 21,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 15,
        paddingBottom: 8,
        borderRadius: 15,
        shadowRadius: 40,
        shadowColor: 'rgba(2, 32, 44, 0.05)',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 1
    },
    sendButton: {
        backgroundColor: '#FF774C',
        borderRadius: 20,
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: Dimensions.get('window').width * 0.8,
        shadowColor: 'rgba(202, 66, 17, 0.1)',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 30,
        shadowOpacity: 1,
    },
    sendButtonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
    }
})
