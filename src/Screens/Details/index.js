// Details
import { View, Text } from 'react-native'
import React from 'react'
import TouchButton from '../../Components/TouchButton'

const Details = ({route, navigation}) => {

  const {fName, lName, address, country, setRecord, setFName, setLName, setAddress,setCountry} = route.params
  const dataObj = {
    id: Date.now(),
    fName: fName,
    lName: lName,
    address: address,
    country: country,
  }


  return (
    <View flex={1}>
      <Text flex={1}>Details</Text>
      <Text flex={1} >First Name: {JSON.stringify(fName)}</Text>
      <Text flex={1} >Last Name: {JSON.stringify(lName)}</Text>
      <Text flex={1} >Address: {JSON.stringify(address)}</Text>
      <Text flex={1} >Country: {JSON.stringify(country)}</Text>
      <TouchButton 
        buttonName={"Add Record"}
        pressFunction={() => {
          // navigation.setOptions()
          setRecord(prevState => [...prevState, dataObj])
          setFName('')
          setLName('')
          setAddress('')
          setCountry('')
          navigation.navigate('Home')
        }}
        color="blue"
        flex={1}
      />
      <TouchButton 
          buttonName="Go back and Reset" 
          pressFunction={()=> {
            setFName('')
            setLName('')
            setAddress('')
            setCountry('')
            navigation.navigate('Home')
          }}
          color="yellow"
          flex={1}
      />
    </View>
  )
}

export default Details