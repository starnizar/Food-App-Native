import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    Dimensions,
    TouchableWithoutFeedback,
    Pressable
} from 'react-native';
import Header from '../Header';
import LoginButton from './LoginButton';
import {useRoute} from '@react-navigation/native';

const Login = ({navigation}) => {
    const route = useRoute()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.wrapper}>

                <Header />

                <Text style={styles.h1}>Login to your account</Text>
                <Text style={styles.p}>Good to see you again, enter your details below to continue ordering.</Text>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.input} placeholder='Enter email' />
                </View>

                <View style={styles.inputWrapper}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} placeholder='Enter password' />
                </View>

                <Pressable onPress={()=>navigation.navigate('ForgotPassword')}>
                    <Text style={{...styles.label, ...styles.pForgot}}>forgot password?</Text>
                </Pressable>

                <LoginButton
                    routeName={route.name}
                    navigate={navigation.navigate}
                    loginButtonPath='Login'
                    createButtonPath='CreateAccount'
                />

            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login

const styles = StyleSheet.create({
    wrapper:{
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#F8FBFF'
    },
    h1: {
        fontSize: 24,
        lineHeight: 31,
        fontWeight: 'bold',
        color: '#1C1C1C'
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
    pForgot:{
        marginTop: '-1%',
        paddingLeft: 0,
        marginBottom: 0,
        color: '#AAACAE',
        textDecorationLine: 'underline'
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
    }
})
