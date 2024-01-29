import { View, Text } from 'react-native'
import React, {useState} from 'react'
import InputField from '../../Components/InputField'
import TouchButton from '../../Components/TouchButton'

const LogInScreen = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
  return (
    <View>
      <Text>SignUpScreen</Text>
      <InputField text={userName} onChangeText={(e) => {setUserName(e)}} />
      <InputField text={password} onChangeText={(e) => {setPassword(e)}} />
      <TouchButton 
          buttonName="Go back and Reset" 
          pressFunction={()=> {
            navigation.navigate('SignUp')
          }}
          color="yellow"
          flex={1}
      />
    </View>
  )
}

export default LogInScreen