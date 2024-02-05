import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './src/screen/CartScreen'
import DetailsScreen from './src/screen/DetailsScreen'
import FavoritesScreen from './src/screen/FavoritesScreen'
import HomeScreen from './src/screen/HomeScreen'
import PaymentScreen from './src/screen/PaymentScreen'
import OrderHistoryScreen from './src/screen/OrderHistoryScreen'
import TabNavigator from './src/navigators/TabNavigator';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown:false,
      animation:'slide_from_bottom'
    }}>
      <Stack.Screen
      name='Tab'
      component={TabNavigator}
      >
      </Stack.Screen>

      <Stack.Screen
      name="Details"
      component={DetailsScreen}
      >
      </Stack.Screen>
      
      <Stack.Screen name='Payment' component={PaymentScreen}>
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App