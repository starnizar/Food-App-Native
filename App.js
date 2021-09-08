import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import WelcomeScreen from './src/components/WelcomeScreen/WelcomeScreen';
import Test from './src/components/WelcomeScreen/TestScreen';
import StartScreen from './src/components/StartScreen';
import {StatusBar} from "react-native";


export default function App() {
    const Stack = createNativeStackNavigator()

  return(
      <Provider store={store} >
          <StatusBar barStyle='dark-content'/>
          <NavigationContainer>
              <Stack.Navigator
                screenOptions={{headerShown: false}}
              >
                  <Stack.Screen name={'StartScreen'} component={StartScreen} />
                  <Stack.Screen
                      name={'WelcomeScreen'}
                      component={WelcomeScreen}
                  />
                  <Stack.Screen name={'Test'} component={Test} />
              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  )
}
