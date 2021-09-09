import React from 'react';
import {StyleSheet, Pressable, View, Text, Dimensions} from 'react-native'
import Slider from "./Slider";
import Header from "../Header";


const WelcomeScreen = ({navigation}) => {

    return(
        <View style={styles.wrapper}>

            <Header />

            <Slider />

            <Pressable style={styles.createAccountBtn} onPress={()=>navigation.navigate('CreateAccount')}>
                <Text style={styles.createAccountBtnText}>Create an account</Text>
            </Pressable>

            <Pressable onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.loginBtnText}>login</Text>
            </Pressable>

        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#F8FBFF'
    },
    header: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 30,
        paddingTop: 50,
    },
    skipButton: {
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: -0.16,
        color: '#FA5A1E',
    },
    topIcon: {
        position: 'relative',
        left: '100%'
    },
    createAccountBtn: {
        backgroundColor: '#FF774C',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: Dimensions.get('window').width * 0.8,
        marginTop: '15%',
        shadowColor: 'rgba(202, 66, 17, 0.1)',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 30,
        shadowOpacity: 1,
    },
    createAccountBtnText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
    },
    loginBtnText: {
        color: '#FF774C',
        width: Dimensions.get('window').width * 0.8,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 20
    }
})
