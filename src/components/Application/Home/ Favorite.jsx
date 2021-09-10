import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Favorite = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Favorite Screen</Text>
        </View>
    )
}

export default Favorite

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})
