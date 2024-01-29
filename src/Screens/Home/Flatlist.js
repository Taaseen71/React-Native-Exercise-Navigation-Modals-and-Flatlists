import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const Flatlist = ({data, }) => {

    const Item = ({fName, lName, address, country}) => (
        <View style={styles.flatlist}>
          <Text>First Name: {fName}</Text>
          <Text>Last Name: {lName}</Text>
          <Text>Address: {address}</Text>
          <Text>Country: {country}</Text>
        </View >
    )
  return (
    <FlatList
        data={data}
        renderItem={({item}) => (
        <View style={styles.flatlistContainer}>
            <Item 
            fName={item.fName} 
            lName={item.lName} 
            address={item.address} 
            country={item.country}
            />
        </View>
        )}
        keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
    flatlist: {
        padding: 12
    },
      flatlistContainer: {
        borderWidth: 0.2,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 99, 180, 0.3)',
        margin: 12,
    }
})

export default Flatlist