import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Notifications = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Notifications Screen</Text>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})
