import React from 'react'
import {
    View,
    Text,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Pressable,
} from 'react-native';
import Header from "../Header";
import LoginButton from "./LoginButton";
import {useRoute} from "@react-navigation/native";

const CreateAccount = ({navigation}) => {

    const route = useRoute()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.wrapper}>

                <Header />

                <Text style={styles.h1}>Create an account</Text>
                <Text style={styles.p}>Welcome friend, enter your details so lets get started in ordering food.</Text>

                <KeyboardAvoidingView behavior='position' style={styles.btnWrapper}>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>Email Address</Text>
                        <TextInput
                            keyboardType='email-address'
                            style={styles.input}
                            placeholder='Enter email' />
                    </View>

                        <View style={styles.inputWrapper}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput style={styles.input} placeholder='Enter password' />
                        </View>

                        <View style={styles.inputWrapper}>
                            <Text style={styles.label}>Confirm Password</Text>
                            <TextInput style={styles.input} placeholder='Confirm password' />
                        </View>
                </KeyboardAvoidingView>

                <LoginButton
                    navigate={navigation.navigate}
                    createButtonPath={'CreateAccount'}
                    loginButtonPath={'Login'}
                    routeName={route.name}
                />

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
