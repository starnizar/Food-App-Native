import React from 'react'
import {View, Text, TextInput, Keyboard, TouchableWithoutFeedback, StyleSheet, Dimensions,KeyboardAvoidingView, } from 'react-native';
import Header from "../Header";
import LoginButton from "./LoginButton";

const CreateAccount = ({navigation}) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.wrapper}>
                <Header />
                <Text style={styles.createText}>Create an account</Text>
                <Text style={styles.welcomeText}>Welcome friend, enter your details so lets get started in ordering food.</Text>


                        <View style={styles.btnWrapper}>
                            <Text style={styles.inputLabel}>Email Address</Text>
                            <TextInput
                                keyboardType='email-address'
                                autoFocus={true}
                                style={styles.input}
                                placeholder='Enter email' />
                        </View>

                        <View style={styles.btnWrapper}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <TextInput style={styles.input} placeholder='Enter password' />
                        </View>

                        <KeyboardAvoidingView behavior='position' style={styles.btnWrapper}>
                            <Text style={styles.inputLabel}>Confirm Password</Text>
                            <TextInput style={styles.input} placeholder='Confirm password' />
                        </KeyboardAvoidingView>


                <LoginButton navigation={navigation} createPath={'CreateAccount'} loginPath={'Login'} />
            </View>
        </TouchableWithoutFeedback>

    )
}

export default CreateAccount

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F8FBFF'
    },
    createText: {
        fontSize: 24,
        lineHeight: 31,
        fontWeight: 'bold',
        color: '#1C1C1C'
    },
    welcomeText: {
        width: Dimensions.get('window').width * 0.8,
        maxWidth: 320,
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '400',
        paddingLeft: 23,
        marginTop: '5%',
        marginBottom: '15%'
    },
    btnWrapper: {
      marginBottom: '5%'
    },
    inputLabel: {
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
