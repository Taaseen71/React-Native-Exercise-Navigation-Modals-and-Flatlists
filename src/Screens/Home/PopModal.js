import { View, Text, Modal, StyleSheet, Pressable } from 'react-native'
import React, {useState} from 'react'
import InputComponent from './InputComponent';
import globalStyle from '../../globalStyle';


const popModal = (props) => {
  const [modalVisible, setModalVisible] = useState(false);  

  const { navigation, fName, lName, address, country, record, setFName, setLName, setAddress, setCountry, setRecord } = props
  

  const detailsProps = {
    fName: fName,
    lName: lName,
    address: address,
    country: country,
    record: record,
    setFName: setFName,
    setLName: setLName,
    setAddress: setAddress,
    setCountry: setCountry,
    setRecord: setRecord
  }



  return (

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Text style={styles.modalText}>Enter New Record</Text>

            <InputComponent title={"First Name"} getter={fName} setter={(e) => {setFName(e)}}/>
            <InputComponent title={"Last Name"} getter={lName} setter={(e) => {setLName(e)}}/>
            <InputComponent title={"Address"} getter={address} setter={(e) => {setAddress(e)}}/>
            <InputComponent title={"Country"} getter={country} setter={(e) => {setCountry(e)}}/>
            
            <View style={[globalStyle('row').flexDirection]}>

                <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide</Text>
                </Pressable>
                
                {(fName && lName && address && country ) && 
                  <Pressable
                  style={[styles.button, styles.buttonClose]}
                  buttonName="Next" 
                  onPress={()=> {
                    navigation.navigate('Details',detailsProps)
                    setModalVisible(!modalVisible)
                  }}
                  color="yellow"
                  >
                  <Text style={styles.textStyle}>Next</Text>
                  </Pressable>
                }
            </View>
            
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Create Data</Text>
      </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  

export default popModal