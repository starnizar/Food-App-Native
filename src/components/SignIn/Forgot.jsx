import React from 'react'
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

const ForgotPassword = ({navigation}) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.wrapper}>

                <Header />

                <Text style={styles.h1}>Forgot password</Text>
                <Text style={styles.p}>Enter your email address to request a password reset.</Text>

                <View style={styles.inputWrapper}>

                    <Text style={styles.label}>Email address</Text>
                    <TextInput keyboardType='email-address' style={styles.input} placeholder='Enter email address' />
                </View>

                <Pressable onPress={()=>navigation.navigate('ResetPassword')} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send password</Text>
                </Pressable>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ForgotPassword

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
        marginBottom: '5%'
    },
    label: {
        fontSize: 12,
        lineHeight: 16.44,
        paddingLeft: 23,
        marginBottom: '1%'
    },
    input:{
        width: Dimensions.get('window').width * 0.8,
        maxWidth: 320,
        backgroundColor: '#fff',
        fontSize: 14,
        lineHeight: 19.18,
        paddingHorizontal: 23,
        paddingVertical: 15,
        borderRadius: 15,
        borderColor: '#DFE2E6',
        borderStyle: 'solid',
        borderWidth: 1
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
