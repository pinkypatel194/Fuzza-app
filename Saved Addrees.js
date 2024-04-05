 import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Saved = ({ route, navigation }) => {
  const { address } = route.params ?? {};

  const handleSaved = () => {
    navigation.navigate('Add New Address');
  };

  return (
        <View style={styles.container} >
        < Text style={styles.details}>Saved Address</Text>
          <View style={{borderWidth:2, borderColor:'#FEFEFF', borderRadius:10,}}>
          <Text style={styles.name1}>Home</Text>
          <Text style={styles.name1}>350,Maloy Count,East Emhursrt ,New York city ,Ny 11369</Text>
          <Text style={styles.name1}>Phone no :78596 0000</Text>
         
          </View>
             <Text></Text>
              <View style={{borderWidth:2, borderColor:'#FEFEFF', borderRadius:10,}}>
              <Text style={styles.name1}>Office</Text>
              <Text style={styles.name1}>8502-8503 Preston Rd. Inglewood Street, Maine98380</Text>
              <Text style={styles.name1}>Phone no : 12100 0023</Text>
              
          </View>
          <Text></Text>
    <View>
       <View style={{borderWidth:2, borderColor:'#FEFEFF', borderRadius:10,}}>
     
      
      <Text style={{color:'#FEFEFF',marginLeft:20,marginTop:10}}>Name: {address?.Name}</Text>
      <Text style={{color:'#FEFEFF',marginLeft:20,marginTop:10}}>Address: {address?.Address}</Text>
      <Text style={{color:'#FEFEFF',marginLeft:20,marginTop:10}}>Phoneno: {address?.Phoneno}</Text>
    
   
   </View>
      <TouchableOpacity onPress={handleSaved}>
        <View style={styles.addButton}>
          <Text style={styles.addText}>+ Add New Address</Text>
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
    alignSelf: 'center',
    color: '#FEFEFF',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10
  },
 
  addButton: {
    backgroundColor: '#122636',
    height: 51,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20
  },
  addText: {
    color: '#FEFEFF',
    fontWeight: 'bold',
    fontSize: 15
  },
   name1:{
        color:'#FEFEFF',
        marginLeft:30,
       marginTop:10,
   },
   name:{
      borderWidth:2,
      borderColor:'#FEFEFF',
      marginLeft:40,
      marginTop:30,
      borderRadius:10,
   }  



});

export default Saved;
