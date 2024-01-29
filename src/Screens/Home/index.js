// HOME
import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import globalStyle from '../../globalStyle';
import Flatlist from './Flatlist';
import PopModal from './PopModal';

const Home = ({navigation}) => {
  const [record, setRecord] = useState([])

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')

  useEffect(() => {console.log(record)}, [record])

  return (
    <View flex={1}>
      <View flex={4}>
        <Text style={globalStyle().centerView}>Student Records</Text>
        <Flatlist data={record} fName={fName} lName={lName} address={address} country={country}      />
      </View>
      <View flex={1} style={globalStyle('column', 'white').flexDirection}>
          <PopModal 
            record={record} fName={fName} lName={lName} address={address} country={country} 
            setFName= {setFName}  setLName= {setLName}  setAddress= {setAddress}  setCountry= {setCountry}  
            setRecord= {setRecord} navigation={navigation}
          />
      </View>
    </View>
  )
}


export default Home;