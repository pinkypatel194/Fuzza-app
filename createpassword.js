import React from "react";
import { View,Text ,StyleSheet,Image, TextInput, TouchableOpacity} from "react-native";
import Background from './assets/Background.jpg'

const   CreatePassword=()=>
{
  return(
    <View style={style.con}>
        <Image source={Background} style={{width:400,marginBottom:400,position:'absolute'}}/>
        <Text style={style.Text}>Create a new Password</Text>
        <Text style={style.Text3}>Password</Text>
          <TextInput style={style.TextInput} 
             placeholder="Enter New password"
             placeholderTextColor={'#D9D9D9'}
          />
            <Text style={style.Text3}>Password</Text>
          <TextInput style={style.TextInput} 
             placeholder="Enter New password"
             placeholderTextColor={'#D9D9D9'}
          />
           <TouchableOpacity style={style.btn}>
             <Text style={style.btntext} onPress={()=>{}}>
              Resent Password
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
    Text3:
    {
      fontSize:12,
      color:'#F5FCFF',
      marginLeft:17,
      fontWeight: 'bold',
      marginTop:25
    },
    View:
    {
       flexDirection:'row',
       alignItems:'center'
    },
    TextInput:
    {
       height:35,
       width:330,
       backgroundColor:'#192D3C',
       marginLeft:8,
       marginTop:5,
       borderRadius:5,
      //  textAlign:'center',
      paddingLeft:60,
       color:'#F5FCFF',
       fontSize:12

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
export default CreatePassword