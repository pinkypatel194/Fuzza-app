
import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image } from "react-native";
import { RadioButton } from "react-native-paper";
import arrow from '../assets/back.png'
import userIcon from '../assets/usericon.png'

const AddNewAddress = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [ID, setId] = useState(1);
  const [data, setData] = useState([]);
  const [AddNewAddress, setAddNewAddress] = useState({
    Name: '',
    Phoneno: '',
    Address: '',
    Landmark: '',
    City: '',
    Pin: '',
  });

  const handleAdd = () => {
    const newAddress = {
      id: ID,
      ...AddNewAddress,
    };
    setData(prevData => [...prevData, newAddress]);
    setId(ID + 1);
    setAddNewAddress({
      Name: '',
      Phoneno: '',
      Address: '',
      Landmark: '',
      City: '',
      Pin: '',
    });
    
    navigation.navigate('Saved Addrees', { address: newAddress });
  };

  return (
    <ScrollView style={style.Color}>
      <View >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => handleBack()}>
            <Image source={arrow} style={style.arrowicon} />
          </TouchableOpacity>
          <Text style={style.top}>Add New Address</Text>
        </View>
        <Text style={style.name}>Name</Text>
        <View style={style.box} >
          <TextInput
            style={style.intext}
            placeholder="Enter your name"
            value={AddNewAddress.Name}
            onChangeText={(text) => setAddNewAddress({ ...AddNewAddress, Name: text })}
            placeholderTextColor={'#F5FCFF'}
          />
        </View>
        <Text style={style.name}>Phone Number</Text>
        <View style={style.box} >
          <TextInput style={style.intext}
            placeholder="Enter your Number"
            value={AddNewAddress.Phoneno}
            onChangeText={(p) => setAddNewAddress({ ...AddNewAddress, Phoneno: p })}
            placeholderTextColor={'#F5FCFF'}
          />
        </View>
        <Text style={style.name}>Street Address</Text>
        <View style={style.box} >
          <TextInput style={style.intext}
            placeholder="Enter your address"
            value={AddNewAddress.Address}
            onChangeText={(a) => setAddNewAddress({ ...AddNewAddress, Address: a })}
            placeholderTextColor={'#F5FCFF'}
          />
        </View>
        <Text style={style.name}>Landmark</Text>
        <View style={style.box} >
          <TextInput
            style={style.intext}
            placeholder="Enter your landmark"
            value={AddNewAddress.Address}
            onChangeText={(landmark) => setAddNewAddress({ ...AddNewAddress, Landmark: landmark })}
            placeholderTextColor={'#F5FCFF'}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={style.name}>City</Text>
          <Text style={style.name1}>Pin Code</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={style.name2}
          placeholder="Enter City"
          value={AddNewAddress.City}
          onChangeText={(city) => setAddNewAddress({ ...AddNewAddress, City: city })}
          placeholderTextColor={'#F5FCFF'}
        />
        <TextInput
          style={style.name3}
          placeholder="Enter pin"
          value={AddNewAddress.Pin}
          onChangeText={(pin) => setAddNewAddress({ ...AddNewAddress, Pin: pin })}
          placeholderTextColor={'#F5FCFF'}
        />
      </View>
      <Text style={style.name}>Address Type</Text>
      <View style={style.radioGroup}>
        <View style={style.radioButton}>
          <RadioButton.Android
            value="option1"
            status={selectedValue === 'option1' ?
              'checked' : 'unchecked'}
            onPress={() => setSelectedValue('option1')}
            color="#007BFF"
          />
          <Text style={style.radioLabel}>
            Home
          </Text>
        </View>
        <View style={style.radioButton}>
          <RadioButton.Android
            value="option2"
            status={selectedValue === 'option2' ?
              'checked' : 'unchecked'}
            onPress={() => setSelectedValue('option2')}
            color="#007BFF"
          />
          <Text style={style.radioLabel}>
            Office
          </Text>
        </View>
        <View style={style.radioButton}>
          <RadioButton.Android
            value="option3"
            status={selectedValue === 'option3' ?
              'checked' : 'unchecked'}
            onPress={() => setSelectedValue('option3')}
            color="#007BFF"
          />
          <Text style={style.radioLabel}>
            Other
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>ID:{item.id}</Text>
              <Text>Name:{item.Name}</Text>
              <Text>Phoneno:{item.Phoneno}</Text>
              <Text>Address:{item.Address}</Text>
              <Text>Landmark{item.Landmark}</Text>
              <Text> City{item.City}</Text>
              <Text>pin{item.pin}</Text>
              <Text></Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={style.box1}>
          <Text style={style.intext}>Cancel</Text></View>
        <TouchableOpacity onPress={handleAdd}>
          <View style={style.box2}><Text style={style.intext1}>Add</Text></View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  top: {
    color: '#FEFEFF',
    marginLeft: 90,
    marginTop: 25,
    fontWeight: 'bold',
  },
  Color: {
    backgroundColor: '#07141F',
    flex: 3,
  },
  arrowicon: {
    height: 26,
    width: 26,
    marginLeft: 16,
    marginTop: 20,
    fontWeight: 'bold'
  },
  name: {
    color: '#FEFEFF',
    marginLeft: 30,
    marginTop: 25,
    fontSize: 15,
    fontWeight: 'bold',
  },
  round: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  round1: {
    marginLeft: 120,
    flexDirection: 'row',
  },
  round2: {
    marginLeft: 170,
    flexDirection: 'row',
  },
  box: {
    flexDirection: 'row',
    backgroundColor: '#122636',
    marginLeft: 30,
    height: 41,
    width: 320,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 10
  },
  intext: {
    marginLeft: 30,
    marginTop: 5,
    color: '#FEFEFF',
  },
  intext1: {
    marginLeft: 60,
    marginTop: 5,
    color: '#000000',
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
    marginTop: 90,
    backgroundColor: '#122636',
    height: 45,
    width: 150,
    marginLeft: 30,
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  box2: {
    marginTop: 90,
    backgroundColor: '#FEFEFF',
    marginLeft: 30,
    height: 45,
    width: 150,
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  Button: {
    marginLeft: 8,
    fontSize: 16,
    color: '#FEFEFF',
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 350,
    height: 40,
    marginLeft:16,
    borderRadius: 8,
    backgroundColor: '#122636',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 11,
    width: 28,
    height: 28,
    marginTop: 7,
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    height: 30,
    width: 60,
    marginTop: 7,
    color: '#FEFEFF',
  },
})
export default AddNewAddress;
