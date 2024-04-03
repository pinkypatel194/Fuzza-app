import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, Button,TouchableOpacity } from 'react-native';
import Background from './assets/Background.jpg'
import line from './assets/Rectangle 6.png'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import apple from './assets/apple.png'
const Singin=()=> {
  return (
      
    <View style={styles.container}>
      <Image source={Background} style={{width:400,marginBottom:400,position:'absolute'}}/>
      <Text style={styles.Text}>Hello Again!</Text>
      <Text style={styles.Text2}>Welcome back you have been misssed!</Text>
      <Text></Text>
      <Text style={styles.email}>Email Id</Text>
      <TextInput style={styles.input}
          placeholder='Enter Your Email'  placeholderTextColor="#D9D9D9" 
      />
      <Text style={styles.Password}>Password </Text>
      <TextInput style={styles.input}
          placeholder='Enter Your Password'placeholderTextColor="#D9D9D9"
      />
      <View style={styles.rememberview}>
        <Text style={styles.re}>Remember me</Text> 
        <Text style={styles.forget}>forgot password?</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
             <Text style={styles.btntext} onPress={()=>{}}>
              Sing In
             </Text>
           </TouchableOpacity>
     <View style={styles.orflex}> 
     <Image source={line} style={{marginLeft:30,marginTop:30,width:120}}/>
     <Text style={styles.or}>OR</Text>
     <Image source={line} style={{marginLeft:5,marginTop:30,width:120}}/>
    </View> 
    <View style={styles.logoflex}><View><Text style={styles.logo}></Text><Image source={facebook} style={styles.logoset}/></View>
    <View>
    <Text style={styles.logo}></Text>
    <Image source={google} style={styles.logoset}/>
    </View>
    <View>
    <Text style={styles.logo}></Text>
    <Image source={apple} style={styles.logoset}/>
    </View>
    </View>
        <View><Text style={{fontSize:12,color:'#D9D9D9',marginTop:30,marginLeft:90}}>Don't Have an account? <Text style={{fontWeight:'bold'}}>Sing up</Text></Text></View>
      <StatusBar style="auto" />
    </View>
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
  email:
  {
    fontSize:15,
    color:'#F5FCFF',
    marginLeft:17,
    // justifyContent: 'center',
    marginTop:30,
    fontWeight: 'bold'
  },
  Password:
  {
    fontSize:15,
    color:'#F5FCFF',
    marginLeft:17,
    // justifyContent: 'center',
    marginTop:30,
    fontWeight: 'bold',
    borderColor:'#F5FCFF'
  },
  input:
  {
         borderRadius:4,
        //  borderWidth:0.1,
         fontSize:12,
         color:'#F5FCFF',
         marginTop:5,
         backgroundColor:'#192D3C',
         height:35,
         width:330,
         marginLeft:15,
        //  borderColor:'#F5FCFF'
        paddingLeft:50
  },
  rememberview:
  {
        flexDirection:"row"
  },
  re:{
    fontSize:12,
    color:'#9BA3AA',
    marginLeft:60,
    marginTop:10,
    borderColor:'#F5FCFF'
  },
  forget:{
    fontSize:12,
    color:'#F04949',
    marginLeft:100,
    marginTop:10,
    
  },
  btn:
  {
    marginTop:30,
    marginLeft:20,
    borderRadius:2,
    padding:7,
    height:35,
    width:300,
    backgroundColor:'#FFC107',
    

    
  },
  btntext:
  {
    color:'#122636',
    fontWeight:'bold',
    textAlign:'center',
    
  },
  orflex:
  {
         flexDirection:'row'
  },
  or:
  {
     textAlign:'center',
     color:'#D9D9D9',
     marginTop:20,
     marginLeft:8,
     fontSize:12
  },
  logoflex:
  {
    flexDirection:'row',
  },
  logo:
  {
    borderRadius:2,
    height:40,
    width:95,
    marginTop:25,
     marginLeft:20,
     backgroundColor:'#192D3C'
  },
  logoset:
  {
    marginLeft:50,
    marginTop:-35,
    height:30,
    width:30
  }
  
  
});
export default Singin