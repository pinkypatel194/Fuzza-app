import React, { useState }  from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import  BuddyChair from "./assets/Buddy Chair.jpg";
import WingbackChair from "./assets/WingbackChair.jpg";
import RETRO from "./assets/RETRO.jpg";
import Modern from "./assets/Modern.jpg";
import Chair from "./assets/Chair.jpg";
import MidCentury from "./assets/MidCentury.jpg";
import { ScrollView } from "react-native-gesture-handler";

// import  array from "./assets/awor.png";
const Chairs =({navigation})=>{
     // const [Chairs,setChairs]=useState('');
     //  const onPress =()=>setChairs(prevChairs=>prevChairs);
     return(
          <ScrollView>
         <View style={styles.container}>
          <View> 
          <TouchableOpacity  onPress={()=>navigation.navigate('Table')}>
            <Text style={styles.Chairs}>Chair</Text>  
           
            {/* <Image source={array}  style={{width:15,height:15,marginRight:100,marginLeft:20,padding:10}}/>  */}
          </TouchableOpacity>
          </View>
          <View style={styles.box}>
                <View  style={styles.box3}>
               <Image source={BuddyChair} style={{width:120,height:120,margin:0,padding:10}}/></View>
                <Text style={styles.Text}>Buddy Chair</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  5%off</Text>
          </View>
          <View style={styles.box2}>
          <View  style={styles.box3}>
          <Image source={WingbackChair} style={{width:150,height:150,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>Wingback Chair</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  2%off</Text> 
          </View>
          <View style={styles.box}>
          <View  style={styles.box3}>
          <Image source={RETRO} style={{width:120,height:120,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>RETRO STYLE EGG POD ...</Text>
                <Text style={styles.Text1}>Dining table</Text>
                <Text style={styles.Text2}>$15  10%off</Text> 
          </View>
          <View style={styles.box2}>
          <View  style={styles.box3}>
          <Image source={Modern} style={{width:120,height:120,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>Modern round shape...</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  5%off</Text> 
          </View>          
          <View style={styles.box}>
          <View style={styles.box3}>
          <Image source={Chair} style={{width:120,height:120,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>Chair</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  2%off</Text>   
          </View>
          <View style={styles.box2}>
          <View  style={styles.box3}>
          <Image source={MidCentury} style={{width:120,height:120,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>Mid-Century</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  5%off</Text>  
          </View>
          
     
     </View>
     </ScrollView>
     )
}
const styles = StyleSheet.create({
     Chairs:{
       color :'white',
       fontSize:15,      
       padding:15,
       marginTop:20,
       marginLeft:140,
     },
     container:{
          // margin:5,
          backgroundColor:'#07141F',
     },
     box:{
          marginTop:10,
          width:165,
          height:216,
          backgroundColor:'#122636',
          margin:0,
          borderRadius:10,
          marginLeft:7,
          borderColor:'#707070'
     },
     box2:{
          marginTop:-215,
          marginRight:20,
          marginLeft:180,
          width:165,
          height:216,
          backgroundColor:'#122636',
          margin:0,
          borderRadius:10,
          borderColor:'#707070',
     },

    Text:{
           color:'#FEFEFF',
           fontSize:12,
           padding:10,
           fontWeight:'bold',
    },
    Text1:{
         color:'#FEFEFF',
         fontSize:10,
        marginLeft:10,

         
    } ,
    price:{
        color:'#FEFEFF',
        fontSize:12,
       marginLeft:7,
       fontWeight:'bold',
       padding:7,
        
   } ,
   box3:{
       width:135,
       height:135,
       backgroundColor:'#1F303E',
       padding:10,
       marginLeft:15,
       marginTop:10,
       borderRadius:5,
   },
   Text:{
       fontSize:12,
        marginLeft:15,
        fontWeight:'bold',
        color:'#FEFEFF',
        marginTop:5,

   },
   Text1:{
     fontSize:10,
      marginLeft:10,
      color:'#FEFEFF',
      padding:5,

 },
  
 Text2:{
     fontSize:12,
      marginLeft:10,
      fontWeight:'bold',
      color:'#FEFEFF',

 },

})

  
export default Chairs;