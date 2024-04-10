import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

const AddNewCard = ({ navigation }) => {
  const [ID, setId] = useState(1);
  const [data, setData] = useState([]);
  const [AddNewCard, setAddNewCard] = useState({
    CardNumber: '',
    CardHolderName: '',
    CVV: '',
  });
  const handleAddCard = () => {
    const newCard = {
      id: ID,
      ...AddNewCard,
    };
    setData(prevData => [...prevData, newCard]);
    setId(ID + 1);
    setAddNewCard({
      CardNumber: '',
      CardHolderName: '',
      CVV: '',
    });
    navigation.navigate('Payment Method', { Card: newCard })
  }
  return (

    <View style={style.Color}>
      <View>
        <Text style={style.top}>Add New Card</Text>
        <Text style={style.name}>Card Number</Text>
        <View style={style.box} >
          <TextInput style={style.intext}
            placeholder="Enter Card name"
            placeholderTextColor="#F5FCFF"
          />
        </View>
        <Text style={style.name}>Card Holder Name</Text>
        <View style={style.box}>
          <TextInput style={style.intext}
            placeholder="Enter Card Holder Name"
            placeholderTextColor="#F5FCFF"
          />

          <View style={{ flexDirection: 'row' }}>
            <Text style={style.name}>CVV</Text>
            <Text style={style.name1}>Exp.Data</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <TextInput style={style.box1}
            placeholder="CVV"
            placeholderTextColor="#F5FCFF"
          />
          <TextInput style={style.box2}
            placeholder="mm/dd/yyyy"
            placeholderTextColor="#F5FCFF"
          />
        </View>
      </View>
      <View>
        <View style={style.box4}>
          <TouchableOpacity onPress={handleAddCard} >
            <Text style={style.intext1}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>


  )
}
const style = StyleSheet.create({
  Color: {
    backgroundColor: '#07141F',
    flex: 1,
  },
  top: {
    color: '#FEFEFF',
    marginLeft: 120,
    marginTop: 25,
    fontWeight: 'bold',
  },
  name: {
    color: '#FEFEFF',
    marginLeft: 20,
    marginTop: 25,
    fontSize: 15,
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#122636',
    marginLeft: 20,
    height: 51,
    width: 320,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 10
  },
  intext: {
    marginLeft: 30,
    marginTop: 10,
    color: '#FEFEFF',
  },
  name1: {
    color: '#FEFEFF',
    marginLeft: 150,
    marginTop: 25,
    fontSize: 15,
    fontWeight: 'bold',
  },
  name2: {
    color: '#FEFEFF',
    marginLeft: 20,
    marginTop: 25,
  },
  name3: {
    color: '#D2CBCB',
    marginLeft: 120,
    marginTop: 25,
  },
  box1: {
    marginTop: 50,
    backgroundColor: '#122636',
    height: 45,
    width: 100,
    marginLeft: 20,
    borderRadius: 15,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'FEFEFF',
  },
  box2: {
    marginTop: 50,
    backgroundColor: '#122636',
    marginLeft: 30,
    height: 45,
    width: 190,
    borderRadius: 15,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FEFEFF'
  },
  box4: {
    backgroundColor: '#FEFEFF',
    marginLeft: 20,
    height: 51,
    width: 320,
    marginTop: 50,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 10
  },
  intext1: {
    marginLeft: 130,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#000000',
  },
  Color: {
    backgroundColor: '#07141F',
    flex: 1,
  },
});

export default AddNewCard;
