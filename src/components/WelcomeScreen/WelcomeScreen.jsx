import React from 'react';
import {StyleSheet, Pressable, View, Text, Dimensions} from 'react-native'
import TopIcon from "../../assets/img/welcomeScreen/TopIcon";
import Slider from "./Slider";


const WelcomeScreen = ({navigation}) => {
    return(
        <View style={styles.wrapper}>

            <View style={styles.header}>
                <View/>
                <TopIcon style={styles.topIcon}/>
                <Pressable>
                    <Text style={styles.skipButton}>Skip</Text>
                </Pressable>
            </View>

            <Slider />

            <Pressable>
                <Text style={styles.createAccountBtn}>Create an account</Text>
            </Pressable>

            <Pressable>
                <Text style={styles.loginBtn}>login</Text>
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
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: Dimensions.get('window').width * 0.8,
        textAlign: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#fff',
        marginTop: '15%',
        shadowColor: 'rgba(202, 66, 17, 0.1)',
        shadowOffset: {width: 0, height: 10},
        shadowRadius: 30
    },
    loginBtn: {
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
