import React from 'react'
import {Alert, Dimensions, Pressable, StyleSheet, Text, View} from 'react-native'
import GoogleIcon from "../../assets/img/GoogleIcon";

const LoginButton = ({navigate, createButtonPath, loginButtonPath, routeName}) => {

    const createAccBtnHandler = () => (routeName === createButtonPath)
        ? navigate('HomeTabBar')
        : navigate(createButtonPath)

    const signInBtHandler = () => (routeName === loginButtonPath)
        ? navigate('HomeTabBar')
        : navigate(loginButtonPath)

    return (
        <View style={styles.signInButtonsWrapper}>
            <Pressable style={styles.signInWithGoogleBtn}>
                <GoogleIcon />
                <Text style={styles.googleBtnText}>Sign-in with Google</Text>
            </Pressable>

            <Pressable onPress={createAccBtnHandler} style={styles.createAccBtn}>
                <Text style={styles.createAccountBtnText}>Create an account</Text>
            </Pressable>

            <Pressable onPress={signInBtHandler}>
                <Text style={styles.loginBtnText}>Login to my account</Text>
            </Pressable>
        </View>
    )
}
export default LoginButton

const styles = StyleSheet.create({
    signInButtonsWrapper:{
        position: 'absolute',
        bottom: 0,
        marginBottom: '10%',
        alignItems: 'center'
    },
    signInWithGoogleBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingVertical: 13,
        borderRadius: 20,
        shadowColor: 'rgba(2, 32, 44, 0.05)',
        shadowOffset: {width: 0, height: 5},
        shadowRadius: 10,
        shadowOpacity: 1,
    },
    googleBtnText: {
        fontSize: 14,
        lineHeight: 21,
        paddingLeft: 11,
        textDecorationLine: 'underline'
    },
    createAccBtn: {
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
    createAccountBtnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
    },
    loginBtnText: {
        width: Dimensions.get('window').width * 0.8,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24,
        color: '#FE554A',
        paddingVertical: 15
    }
})
