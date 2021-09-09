import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import StartScreen from './src/components/StartScreen';
import WelcomeScreen from './src/components/WelcomeScreen/WelcomeScreen';
import CreateAccount from './src/components/SignIn/CreateAccaunt';
import Login from './src/components/SignIn/Login';


export default function App() {
    const Stack = createNativeStackNavigator()

  return(
      <Provider store={store} >
          <StatusBar barStyle='dark-content'/>
          <NavigationContainer >
              <Stack.Navigator
                screenOptions={{headerShown: false}}
              >
                <Stack.Group>
                    <Stack.Screen name='StartScreen' component={StartScreen} />
                    <Stack.Screen
                        options={{gestureEnabled: false}}
                        name='WelcomeScreen'
                        component={WelcomeScreen}
                    />
                </Stack.Group>

                <Stack.Group>
                    <Stack.Screen name='CreateAccount' component={CreateAccount} />
                    <Stack.Screen name='Login' component={Login} />
                </Stack.Group>

              </Stack.Navigator>
          </NavigationContainer>
      </Provider>
  )
}
