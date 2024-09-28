import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import CustomText from '@/components/CustomText'
import { CalculatorButton } from '@/components/CalcButton'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {
  const {
    formula,
    buildNumber,
    clean,
    toggleSign,
    del,
    prevNumber,
    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,
    calculateResult,
  } = useCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <CustomText variant='h1' numberOfLines={1} adjustsFontSizeToFit>{formula}</CustomText>
        {
          formula === prevNumber ? (<CustomText variant='h2'> </CustomText>) 
          : (<CustomText variant='h2'>{prevNumber}</CustomText>)
        }
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='C' onPress={clean} color={Colors.lightGray} blackText />
        <CalculatorButton label='+/-' onPress={toggleSign} color={Colors.lightGray} blackText />
        <CalculatorButton label='del' onPress={del} color={Colors.lightGray} blackText />
        <CalculatorButton label='÷' onPress={divideOperation} color={Colors.blue} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='7' onPress={() => buildNumber('7')} />
        <CalculatorButton label='8' onPress={() => buildNumber('8')} />
        <CalculatorButton label='9' onPress={() => buildNumber('9')} />
        <CalculatorButton label='X' onPress={multiplyOperation} color={Colors.blue} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='4' onPress={() => buildNumber('4')} />
        <CalculatorButton label='5' onPress={() => buildNumber('5')} />
        <CalculatorButton label='6' onPress={() => buildNumber('6')} />
        <CalculatorButton label='-' onPress={subtractOperation} color={Colors.blue} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='1' onPress={() => buildNumber('1')} />
        <CalculatorButton label='2' onPress={() => buildNumber('2')} />
        <CalculatorButton label='3' onPress={() => buildNumber('3')} />
        <CalculatorButton label='+' onPress={addOperation} color={Colors.blue} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label='0' onPress={() => buildNumber('0')} doubleSize />
        <CalculatorButton label='.' onPress={() => buildNumber('.')} />
        <CalculatorButton label='=' onPress={calculateResult} color={Colors.blue} />
      </View>

    </View>
  )
}

export default CalculatorApp