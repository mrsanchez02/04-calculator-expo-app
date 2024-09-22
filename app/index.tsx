import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import CustomText from '@/components/CustomText'
import { CalculatorButton } from '@/components/CalcButton'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <CustomText variant='h1'>50 X 50</CustomText>
        <CustomText variant='h2'>2500</CustomText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='C' onPress={() => console.log('C')} color={Colors.lightGray} blackText />
        <CalculatorButton label='+/-' onPress={() => console.log('+/-')} color={Colors.lightGray} blackText />
        <CalculatorButton label='del' onPress={() => console.log('del')} color={Colors.lightGray} blackText />
        <CalculatorButton label='÷' onPress={() => console.log('÷')} color={Colors.blue} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='7' onPress={() => console.log('7')} />
        <CalculatorButton label='8' onPress={() => console.log('8')} />
        <CalculatorButton label='9' onPress={() => console.log('9')} />
        <CalculatorButton label='X' onPress={() => console.log('x')} color={Colors.blue} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='4' onPress={() => console.log('4')} />
        <CalculatorButton label='5' onPress={() => console.log('5')} />
        <CalculatorButton label='6' onPress={() => console.log('6')} />
        <CalculatorButton label='-' onPress={() => console.log('-')} color={Colors.blue} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='1' onPress={() => console.log('1')} />
        <CalculatorButton label='2' onPress={() => console.log('2')} />
        <CalculatorButton label='3' onPress={() => console.log('3')} />
        <CalculatorButton label='+' onPress={() => console.log('+')} color={Colors.blue} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='0' onPress={() => console.log('0')} doubleSize />
        <CalculatorButton label='.' onPress={() => console.log('.')} />
        <CalculatorButton label='=' onPress={() => console.log('=')} color={Colors.blue} />
      </View>

    </View>
  )
}

export default CalculatorApp