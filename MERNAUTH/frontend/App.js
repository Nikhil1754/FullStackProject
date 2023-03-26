import { View, Text } from 'react-native'
import React from 'react'
import Main from './screens/Main'
import Login from './screens/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from './screens/Register'
import BaloonMain from './screens/BaloonMain'
import Home from './screens/Home'

const Stack=createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="BaloonMain" component={BaloonMain} options={{ headerShown: false }} /> 
        <Stack.Screen name="Main" component={Main}  options={{ headerShown: false }}/> 
        <Stack.Screen name="login" component={Login}  options={{ headerShown: false }}/> 
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} /> 
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} /> 
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default App