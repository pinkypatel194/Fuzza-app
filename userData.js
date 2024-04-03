import React, { useEffect, useState } from "react";
import { View, Text ,StyleSheet,Image, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { getUser } from "./dataslice";
import Background from './assets/Background.jpg'
import { StatusBar } from 'expo-status-bar';

const User = () => {
   const dispatch = useDispatch();
  const[Id,setId]=useState('')
  const[Firstname,setFirstname] =useState('')
  const[Lastname,setLastname] =useState('')
  const[Email,setEmail]=useState('');
  const[Password,setPassword]=useState('')
  const[Data,setData]=useState([]);
 
   useEffect(() => {
      dispatch(getUser());
      
   }, [dispatch]);
 const  handlepress=()=>
 {
  const newData={id:Id,Firstname,Lastname,Email,Password}
  setData([...Data,newData])
  setId(Id+1)
  setFirstname('');
  setLastname(''),
  setEmail('');
  setPassword('');

 }



   return (
      <ScrollView>
    
      <View style={styles.container}>
        
        <Image source={Background} style={{width:400,marginBottom:400,position:'absolute'}}/>
        <Text style={styles.Text}>Let's you in</Text>
        <Text style={styles.Text2}>Hey, You have been missed!</Text>
        <Text></Text>
        <Text style={styles.label}>First Name :</Text>
        <TextInput style={styles.input}
              value={Firstname}
            placeholder='Enter Your First Name'  placeholderTextColor="#FEFEFF" 
            onChangeText={(e)=>setFirstname(e)}
        />
        <Text style={styles.label}>Last Name :</Text>
        <TextInput style={styles.input}
            value={Lastname}
            placeholder='Enter Your Last Name'placeholderTextColor="#FEFEFF"
            onChangeText={(e)=>setLastname(e)}
        />
          <Text style={styles.label}>E-mail : </Text>
        <TextInput style={styles.input}
          value={Email}
            placeholder='Enter Your E-mail 'placeholderTextColor="#FEFEFF"
            onChangeText={(e)=>setEmail(e)}
        />
         <Text style={styles.label}>Password :</Text>
        <TextInput style={styles.input}
            value={Password}
            placeholder='Enter Your Password'placeholderTextColor="#FEFEFF"
            onChangeText={(e)=>setPassword(e)}
        />
        
        <Text style={styles.trems}>Agree with <Text style={{color:'#FFC107'}}>Terms&Condition</Text></Text>
        <View style={styles.btn}>
        <Button 
            
           title='Create Account'   color="#FFC107" 
           onPress={ handlepress}
        />
        </View>
        <Text style={styles.trems}> </Text>
        <StatusBar style="auto" />
      </View>
     
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#122636',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    Text:
    {
       fontSize:30,
       color:'#F5FCFF',
       marginLeft:17,
       justifyContent: 'center',
       marginTop:200,
       fontWeight: 'bold'
       
    },
    Text2:
    {
      fontSize:15,
      color:'#F5FCFF',
      marginLeft:17,
      // justifyContent: 'center',
      marginTop:5,
      fontWeight: 'bold'
    },
    label:
    {
      fontSize:15,
      color:'#F5FCFF',
      marginLeft:15,
      // justifyContent: 'center',
      marginTop:20,
      fontWeight: 'bold',
      borderColor:'#F5FCFF'
    },
    input:
    {
           borderRadius:4,
          //  borderWidth:0.1,
           fontSize:12,
           color:'#F5FCFF',
           marginTop:10,
           backgroundColor:'#192D3C',
           height:35,
           width:330,
           marginLeft:15,
          //  borderColor:'#F5FCFF'
          paddingLeft:50
    },
   
    re:{
      fontSize:15,
      color:'#9BA3AA',
      marginLeft:60,
      marginTop:12,
      borderColor:'#F5FCFF'
    },
    forget:{
      fontSize:15,
      color:'#F04949',
      marginLeft:220,
      marginTop:-20,
      
    },
    btn:
    {
      marginTop:40,
      width:320,
      marginLeft:20,
      color:'black',
      
    },
    trems: {
         marginTop:30,
         marginLeft:85,    
         color:'#F5FCFF', 
         fontSize:15  
  },

    
  });


export default User;


