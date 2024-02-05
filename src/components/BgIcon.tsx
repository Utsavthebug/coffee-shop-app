import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { BORDERRADIUS,SPACING } from '../theme/theme'
import CustomIcon from './CustomIcon'

interface BgIconProps{
    name:string;
    color:string;
    size:number;
    BGColor:string;
}

const BgIcon:React.FC<BgIconProps> = ({
    name,
    color,
    size,
    BGColor
}) => {
  return (
    <View style={[styles.IconBG,{backgroundColor:BGColor}]}>
        <CustomIcon name={name} color={color} size={size} />
    </View>
  )
}

const styles = StyleSheet.create({
    IconBG:{
        height:SPACING.space_30,
        width:SPACING.space_30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:BORDERRADIUS.radius_8
    }
})

export default BgIcon