import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Saved = ({ route, navigation }) => {
  const { address } = route.params ?? {};

  const handleBack = () => {
    navigation.goBack();
  };
  const handleApply = () => {
    navigation.navigate('Payment Method')
  }
  const handleSaved = () => {
    navigation.navigate('AddNewAddress');
  };

  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.backIconContainer} onPress={handleBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      < Text style={styles.details}>Saved Address</Text>
      <View style={{ borderWidth: 1, borderColor: '#FEFEFF', borderRadius: 7, height: 120, width: 360, marginLeft: 10 }}>
        <Text style={styles.name1}>Home</Text>
        <Text style={styles.name1}>350,Maloy Count,East Emhursrt ,New York city ,Ny 11369</Text>
        <Text style={styles.name1}>Phone no :78596 0000</Text>
      </View>
      <Text></Text>
      <View style={{ borderWidth: 1, borderColor: '#FEFEFF', borderRadius: 7, height: 120, width: 360, marginLeft: 10 }}>
        <Text style={styles.name1}>Office</Text>
        <Text style={styles.name1}>8502-8503 Preston Rd. Inglewood Street, Maine98380</Text>
        <Text style={styles.name1}>Phone no : 12100 0023</Text>
      </View>
      <View>
        <View style={{ borderWidth: 1, borderColor: '#FEFEFF', borderRadius: 7, height: 120, width: 360, marginLeft: 10, marginTop: 20 }}>
          <Text style={{ color: '#FEFEFF', marginLeft: 20, marginTop: 10 }}>Name: {address?.Name}</Text>
          <Text style={{ color: '#FEFEFF', marginLeft: 20, marginTop: 10 }}>Address: {address?.Address}</Text>
          <Text style={{ color: '#FEFEFF', marginLeft: 20, marginTop: 10 }}>Phoneno: {address?.Phoneno}</Text>
        </View>
        <TouchableOpacity onPress={handleSaved}>
          <View style={styles.addButton}>
            <Text style={styles.addText}>+ Add New Address</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleApply}>
          <View style={styles.addButton1}>
            <Text style={styles.addText1}>Apply</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07141F'
  },
  details: {
    color: '#FEFEFF',
    // fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    marginTop: 35,
    marginLeft: 140,
  },
  addButton: {
    backgroundColor: '#122636',
    height: 51,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 20,
    marginLeft: 20
  },
  backIconContainer: {
    position: 'absolute',
    top: 35,
    left: 10,
    zIndex: 1,
  },
  addText: {
    color: '#FEFEFF',
    fontWeight: 'bold',
    fontSize: 15
  },
  name1: {
    color: '#FEFEFF',
    marginLeft: 20,
    marginTop: 10,
  },
  name: {
    borderWidth: 2,
    borderColor: '#FEFEFF',
    marginLeft: 40,
    marginTop: 30,
    borderRadius: 10,
  },
  addButton1: {
    backgroundColor: '#FFFFFF',
    height: 51,
    width: 340,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 20,
    marginLeft: 20
  },
  addText1: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15
  },
});

export default Saved;
