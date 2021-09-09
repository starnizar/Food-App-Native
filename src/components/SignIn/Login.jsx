import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Header from "../Header";

const Login = () => {
    return (
        <View style={styles.wrapper}>
            <Header />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    wrapper:{
        height: '100%',
        alignItems: 'center',
    }
})
