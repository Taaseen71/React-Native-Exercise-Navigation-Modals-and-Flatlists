import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Details, SignUpScreen, LogInScreen } from '../Screens';

const Navigation = () => {
    
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const Stack = createNativeStackNavigator();

  const renderMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details} />
        {/* <Stack.Screen name="Details">
            {(props) =>
              <Details
                {...props} 
                // extraData={"someData"}
              /> 
            }
        </Stack.Screen> */}
    </Stack.Group>
    )
  }

  const renderAuthStack = () => {
    return(
      <Stack.Group>
        <Stack.Screen name="Sign Up" component={SignUpScreen}/>
        <Stack.Screen name="Log In" component={LogInScreen}/>
    </Stack.Group>
    )

  } 

  
  
  return (
    <Stack.Navigator>
      {!isLoggedIn ? renderMainStack() : renderAuthStack()}
    </Stack.Navigator>
    // 
  )
}

export default Navigation