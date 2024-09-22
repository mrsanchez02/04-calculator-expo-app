import { globalStyles } from '@/styles/global-styles';
import React from 'react'
import { Text, type TextProps } from 'react-native'

interface CustomTextProps extends TextProps {
  variant?: 'h1' | 'h2';

 }

const CustomText = ({ children, variant, ...rest }: CustomTextProps) => {
  return  (
    <Text 
      style={[
        {color: 'white', fontFamily: 'SpaceMono'}, 
        variant === 'h1' && globalStyles.mainResult,
        variant === 'h2' && globalStyles.subResult,
      ]} {...rest}
  >{children}</Text>
)
}

export default CustomText