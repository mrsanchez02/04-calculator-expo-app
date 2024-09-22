import { Colors } from '@/constants/Colors';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import {Pressable, Text, View} from 'react-native';

interface CalculatorButtonProps {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean;

  onPress: () => void;
}

export const CalculatorButton = ({ 
  label, 
  onPress, 
  color = Colors.darkGray, 
  blackText = false,
  doubleSize = false
}: CalculatorButtonProps) => {

  return (
    <Pressable
    style={({pressed}) => ({...globalStyles.button, backgroundColor: color, opacity: pressed ? 0.8 : 1, width: doubleSize ? 180 : 80})}
    onPress={onPress}
    >
      <Text style={{...globalStyles.buttonText, color: blackText ? 'black' : 'white'}}>
        {label}
      </Text>
    </Pressable>
  );
};
