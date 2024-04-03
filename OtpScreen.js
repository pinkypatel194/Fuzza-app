import React from "react";
import { View,Text ,StyleSheet,Image, TextInput, TouchableOpacity} from "react-native";
import Background from './assets/Background.jpg'

const OTP=()=>
{
  return(
    <View style={style.con}>
        <Image source={Background} style={{width:400,marginBottom:400,position:'absolute'}}/>
        <Text style={style.Text}>OTP Verification</Text>
        <Text style={style.Text2}>We have sent a Verification code to</Text>
        <Text style={style.Text3}>+91 635 546 23098</Text>
        <View style={style.View}>
          <TextInput style={style.TextInput} />
          <TextInput style={style.TextInput} />
          <TextInput style={style.TextInput} />
          <TextInput style={style.TextInput} />
           </View>
           <TouchableOpacity style={style.btn}>
             <Text style={style.btntext} onPress={()=>{}}>
              Verify
             </Text>
           </TouchableOpacity>
        </View>
  )
}

const style=StyleSheet.create({
    con:
    {
        flex:1,
        backgroundColor:'#122636'
    },
    Text:
    {
       fontSize:24,
       color:'#F5FCFF',
       marginLeft:17,
       justifyContent: 'center',
       marginTop:250,
       fontWeight: 'bold'
       
    },
    Text2:
    {
      fontSize:12,
      color:'#D9D9D9',
      marginLeft:17,
      // justifyContent: 'center',
      marginTop:20,
      // fontWeight: 'bold'
    },
    Text3:
    {
      fontSize:12,
      color:'#F5FCFF',
      marginLeft:17,
      fontWeight: 'bold',
      marginTop:10,
    },
    View:
    {
       flexDirection:'row',
       alignItems:'center'
    },
    TextInput:
    {
       height:50,
       width:80,
       backgroundColor:'#192D3C',
       marginLeft:8,
       marginTop:20,
       borderRadius:5,
       textAlign:'center',
       color:'#F5FCFF'
    

    },
    btn:
    {
      backgroundColor:'#FFC107',
      height:35,
      width:300,
      marginTop:35,
      marginLeft:30,
      borderRadius:2,
      padding:7
    },
    btntext:
    {
      color:'#122636',
      fontWeight:'bold',
      textAlign:'center',
      
    }
})
export default OTP