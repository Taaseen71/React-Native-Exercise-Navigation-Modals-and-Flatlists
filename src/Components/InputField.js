import { View, TextInput } from 'react-native'
import React from 'react'
import globalStyle from "../globalStyle"


const InputField = ({text, onChangeText, onChangeNumber}) => {
  return (
    <View>
       {
       onChangeNumber 
        ?
        (
            <TextInput
             style={globalStyle().input}
             onChangeText={onChangeNumber}
             value={text}
             placeholder="useless placeholder"
             keyboardType="numeric"
           />
        )
        :
        (
            <TextInput
                style={globalStyle().input}
                onChangeText={onChangeText}
                value={text}
            />
        )
        }
    </View>
  )
}

export default InputField