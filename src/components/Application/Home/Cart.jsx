import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Cart = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Cart Screen</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    }
})
