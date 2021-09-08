import React, {useCallback, useState} from 'react';
import {FlatList, View, Text, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import FirstSlide from '../../assets/img/welcomeScreen/FirstSlide';
import SecondSlide from '../../assets/img/welcomeScreen/SecondSlide';
import ThirdSlide from '../../assets/img/welcomeScreen/ThirdSlide';
import Indicator from './Indicator';
import {connect} from 'react-redux/';
import {changeIndex} from '../../redux/actions';

const Slider = (props) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Order from your favourite stores or vendors',
            image: FirstSlide
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Choose from a wide range of  delicious meals',
            image: SecondSlide
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Enjoy instant delivery and payment',
            image: ThirdSlide
        }
    ]

    const Item = ({item}) => (
        <View style={styles.slideWrapper}>
            <Text style={styles.slideTile}>
                {item.title}
            </Text>
            <item.image />
        </View>
    )

    const renderItem = ({item}) => (
        <Item item={item} />
    )

    const viewableItemChanged = useCallback(({viewableItems, changed}) => {
        if (viewableItems.length > 0) {
            let currentIndex = viewableItems[0].index
            props.changeIndex(currentIndex)
        }
    }, [])

    // console.log('hello')

    return (
        <SafeAreaView>
            <View style={styles.slideWrapper}>
                <FlatList
                    data={DATA}
                    horizontal
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onViewableItemsChanged={viewableItemChanged}
                    viewabilityConfig={{itemVisiblePercentThreshold: 50}}
                    removeClippedSubviews={false}
                />
                <Indicator currentIndex={currentSlide} itemsCount={DATA.length} />
            </View>
        </SafeAreaView>
    )
}

const mapDispatchToProps = {
    changeIndex
}

export default connect(null, mapDispatchToProps)(Slider)

const styles = StyleSheet.create({
    slideWrapper: {
        width: Math.round(Dimensions.get('window').width),
        alignItems: 'center',
    },
    slideTile: {
        textAlign: 'center',
        fontSize: 24,
        lineHeight:31,
        fontWeight: 'bold',
        padding: 30
    },
})
