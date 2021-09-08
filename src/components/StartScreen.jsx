import React, {useEffect} from 'react';
import { StyleSheet, View, Image } from 'react-native'
import AppIcon from '../assets/img/AppIcon';

const StartScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => navigation.navigate('WelcomeScreen'), 3000)
    }, [])

    return(
        <View style={styles.container}>
           <AppIcon width={105} height={72}/>
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    container:{
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F8FBFF'
    }
})
