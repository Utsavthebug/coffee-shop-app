import { View, Text } from 'react-native'
import React from 'react'
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';


interface HeaderBarProps {
    title?:string;
}

const HeaderBar = () => {
  return (
    <View>
      <Text>HeaderBar</Text>
    </View>
  )
}

export default HeaderBar