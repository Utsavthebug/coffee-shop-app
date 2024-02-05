import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'
import HomeScreen from '../screen/HomeScreen'
import FavoritesScreen from '../screen/FavoritesScreen'
import CartScreen from '../screen/CartScreen'
import OrderHistoryScreen from '../screen/OrderHistoryScreen'
import CustomIcon from '../components/CustomIcon'
import { StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator()

const ICON_SIZE=25;

const colorCheck = (Isfocused:boolean) => (Isfocused ? COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex)


const TabNavigator = () => {
  return (
   <Tab.Navigator
   screenOptions={{
    headerShown:false,
    tabBarHideOnKeyboard:true,
    tabBarShowLabel:false,
    tabBarStyle:styles.tabBarStyle,
    tabBarBackground:()=>(
        <BlurView
        overlayColor=''
        blurAmount={15}
        style={styles.BlurViewStyles}
        />
    )
   }}
   >
    <Tab.Screen name='Home'
    component={HomeScreen}
    options={{
        tabBarIcon :({focused,color,size})=>(
            <CustomIcon
            name='home'
            size={ICON_SIZE}
            color={colorCheck(focused)}
            />
        ),
    }}
    >
    </Tab.Screen>

    <Tab.Screen
    name='Cart'
    component={CartScreen}
    options={{
        tabBarIcon:({focused,color,size})=>(
            <CustomIcon
            name='cart'
            size={ICON_SIZE}
            color={colorCheck(focused)}
            />
        )
    }}
    >
    </Tab.Screen>

    <Tab.Screen
    name='Favorite'
    component={FavoritesScreen}
    options={{
        tabBarIcon:({focused,color,size})=>(
            <CustomIcon
            name='like'
            size={ICON_SIZE}
            color={colorCheck(focused)}
            />
        )
    }}
    >
    </Tab.Screen>

    <Tab.Screen
    name='History'
    component={OrderHistoryScreen}
    options={{
        tabBarIcon:({focused,color,size})=>(
        <CustomIcon
        name='bell'
        size={ICON_SIZE}
        color={colorCheck(focused)}
        />
        )
    }}
    >
    </Tab.Screen>
   </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
    tabBarStyle:{
        height:80,
        position:'absolute',
        backgroundColor:COLORS.primaryBlackRGBA,
        borderTopWidth:0,
        elevation:0,
        borderTopColor:'transparent'
    },
    BlurViewStyles:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    }
})


export default TabNavigator