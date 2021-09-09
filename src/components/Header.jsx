import React from 'react'
import {View, Text, Pressable, StyleSheet, Dimensions} from 'react-native';
import TopIcon from '../assets/img/welcomeScreen/TopIcon';

const Header = () => {
    return (
        <View style={styles.header}>
            <View/>
            <TopIcon style={styles.topIcon}/>
            <Pressable>
                <Text style={styles.skipButton}>Skip</Text>
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
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
    }
})
