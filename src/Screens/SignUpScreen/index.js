import { View, Text } from 'react-native'
import React, {useState} from 'react'
import InputField from '../../Components/InputField'
import TouchButton from '../../Components/TouchButton'
import globalStyle from '../../globalStyle'

const SignUpScreen = ({navigation}) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    
  return (
    <View flex={1}>
      <Text>SignUpScreen</Text>
      <View flex={2} style={globalStyle('blue').borders}>
        <InputField text={userName} onChangeText={(e) => {setUserName(e)}} />
        <InputField text={password} onChangeText={(e) => {setPassword(e)}} />
        <InputField text={passwordConfirm} onChangeText={(e) => {setPasswordConfirm(e)}} />
      </View>
      <TouchButton 
          buttonName="Log In" 
          pressFunction={()=> {
            navigation.navigate('Log In')
          }}
          style={globalStyle().borders}
          color="Blue"
          flex={1}
          />
      <Text>SignUpScreen</Text>
    </View>
  )
}

export default SignUpScreen