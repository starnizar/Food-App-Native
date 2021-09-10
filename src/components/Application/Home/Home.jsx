import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Home = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})
