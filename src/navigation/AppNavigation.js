 import {
    StackNavigator,
  } from 'react-navigation';
  import React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import Main from '../Components/MainScreen/HomeScreen'

  const Stack = createStackNavigator()

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Main} options={{ title: 'Octas' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation;
