import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from './Home';
import Favorite from './ Favorite';
import Notifications from './Notifications';
import Cart from './Cart';
import HomeIcon from '../../../assets/img/tabBar/HomeIcon';
import FavIcon from '../../../assets/img/tabBar/FavIcon';
import NotificationIcon from '../../../assets/img/tabBar/NotificationIcon';
import CartIcon from '../../../assets/img/tabBar/CartIcon';
import FavoriteFocusedIcon from '../../../assets/img/tabBar/FavoriteFocusedIcon';
import NotificationFocusedIcon from '../../../assets/img/tabBar/NotificationFocusedIcon';
import CartFocusedIcon from '../../../assets/img/tabBar/CartFocusedIcon';
import HomeFocusedIcon from '../../../assets/img/tabBar/HomeFocusedIcon';

const HomeTabBar = () => {

    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={ ({route}) => ({
                tabBarIcon: ({focused, }) => {
                    switch (route.name){
                        case 'Home':
                            return focused ? <HomeFocusedIcon /> : <HomeIcon />
                        case 'Favorite':
                            return focused ? <FavoriteFocusedIcon /> : <FavIcon />
                        case 'Notifications':
                            return  focused ? <NotificationFocusedIcon /> : <NotificationIcon />
                        case 'Cart':
                            return focused ? <CartFocusedIcon /> : <CartIcon />
                        default: return;
                    }
                },
                tabBarShowLabel: false
            })
            }
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Favorite' component={Favorite} />
            <Tab.Screen name='Notifications' component={Notifications} />
            <Tab.Screen name='Cart' component={Cart} />
        </Tab.Navigator>
    )
}

export default HomeTabBar
