import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Home/Home';

const HomeTabBar = () => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
        </Tab.Navigator>
    )
}

export default HomeTabBar
