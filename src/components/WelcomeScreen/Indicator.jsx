import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Indicator = ({itemsCount}) => {

    const currentIndex = useSelector(state => state.app.currentIndex)

    const Indicators = () => {
        const arr = []
        for (let i=0; i<itemsCount; i++) {
            arr.push(<View style={ (i===currentIndex)
                ? styles.selectedIndicator
                : styles.indicator} key={i}/>)
        }
        return arr
    }

    return (
        <View style={styles.indicatorWrapper}>
            {Indicators()}
        </View>
    )
}

export default Indicator

const styles = StyleSheet.create({
    indicator: {
        borderRadius: 5,
        width: 6,
        height: 6,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 15
    },
    selectedIndicator:{
        borderRadius: 5,
        width: 8,
        height: 8,
        backgroundColor: '#0B735F',
        marginHorizontal: 15
    },
    indicatorWrapper: {
        position: 'relative',
        top: -50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }
})
