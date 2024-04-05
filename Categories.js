import React  from 'react';
import { Button, StyleSheet, Text, TextInput, View ,ScrollView,Image} from 'react-native';
import Search from "./assets/icon.png" ;
import Charis from "./assets/Charis.jpg";
import Tables from"./assets/table.jpg";
import sofas from "./assets/sofas.jpg";
import Hanging  from "./assets/Hanging.jpg";
import Cabinets from"./assets/Cabinets.jpg";
import  Lamp from"./assets/Lamp.jpg";
import Cupboard from"./assets/Cupboard.jpg";
import Bed from"./assets/bed.jpg";
import TVUnits from"./assets/TVUnits.jpg";
import Vase from"./assets/Vase.jpg";



 const Categories=()=>{
  return (
     
    <View>
      <Text style={styles.Categories}>Categories</Text>
       <View style={styles.box} >
          <Image source={Search}  style={{height:12,width:12,marginLeft:10,marginTop:12}}/>
          <Text style={styles.Search}>Search here</Text>
          
       </View>
       <View style={styles.box1}> 
         <Text style={styles.font}>Chairs</Text>
         <Text style={styles.total}>Total 120 item available</Text>
         <Image source={Charis}  style={{height:135,width:155,marginLeft:180,padding:20}}/> 
       </View>
       <View style={styles.box2}> 
         <Text style={styles.font}>Tables</Text>
         <Text style={styles.total}>Total 120 item available</Text>
         <Image source={Tables}  style={{height:127,width:154,marginLeft:180,padding:20}}/> 
       </View>
       <View style={styles.box3}> 
         <Text style={styles.font}>Sofas</Text>
         <Text style={styles.total}>Total 120 item available</Text>
         <Image source={sofas}  style={{height:110,width:154,marginLeft:180,padding:20}}/>
       </View>
       <View style={styles.box4}> 
         <Text style={styles.font}>Hanging Chairs</Text>
         <Text style={styles.total}>Total 120 item available</Text>
         <Image source={Hanging}  style={{height:110,width:125,marginLeft:180,padding:20}}/>
       </View>
       <View style={styles.box5}> 
         <Text style={styles.font}>Cabinets</Text>
         <Text style={styles.total}>Total 120 item available</Text>
         <Image source={Cabinets}  style={{height:127,width:154,marginLeft:180,padding:20}}/>
       </View>
       <View style={styles.box6}> 
       <Text style={styles.font}>Lamp</Text>
       <Text style={styles.total}>Total 120 item available</Text>
       <Image source={Lamp}  style={{height:127,width:154,marginLeft:180,padding:20}}/>
       </View> 
       <View style={styles.box7}> 
         <Text style={styles.font}>Cupboard</Text>
         <Text style={styles.total}>Total 120 item available</Text>
         <Image source={Cupboard}  style={{height:127,width:154,marginLeft:180,padding:20}}/>

       </View>
       <View style={styles.box8}> 
         <Text style={styles.font}>Bed</Text>  
         <Text style={styles.total}>Total 120 item available</Text>
         <Image source={Bed}  style={{height:127,width:154,marginLeft:180,padding:20}}/>
       </View>
       <View style={styles.box9}> 
         <Text style={styles.font}>Tv Units</Text>  
         <Text style={styles.total}>Total 120 item available</Text>
         <Image source={TVUnits}  style={{height:127,width:154,marginLeft:180,padding:20}}/>
       </View>
       <View style={styles.box10}> 
         <Text style={styles.font}>Vase</Text> 
         <Text style={styles.total}>Total 120 item available</Text>
         <Image source={Vase}  style={{height:140,width:155,marginLeft:180,padding:20}}/>
         
         
       </View>
       </View>
       
  )    
}


const styles = StyleSheet.create({
   Categories:{
     color :'#FFFFFF',
     fontSize:15,
     marginLeft:130,
     padding:20,
     marginTop:20,

   },
   box:{
      border:2 ,
      backgroundColor:'#122636',
      height:35,
      margin:10,


   },
   Search:{
      color:'#FFFFFF',
       marginLeft:30,
       marginTop:-10,
        fontSize:14,
      

   },
    box1:{
        border:2 ,
      backgroundColor:'#122636',
      height:160,
      width:280,
      marginLeft:10,
      marginBottom:10,
        
    },
    box2:{
        border:2 ,
      backgroundColor:'#122636',
      height:160,
      width:280,
      marginLeft:10,
      marginBottom:10,
        
    },
    box3:{
        border:2 ,
      backgroundColor:'#122636',
      height:160,
      width:280,
      marginLeft:10,
      marginBottom:10,
        
    },
    box4:{
        border:2 ,
      backgroundColor:'#122636',
      height:160,
      width:280,
      marginLeft:10,
      marginBottom:10,
        
    },
    box5:{
        border:2 ,
      backgroundColor:'#122636',
      height:160,
      width:280,
      marginLeft:10,
      marginBottom:10,
        
    },
    box6:{
        border:2 ,
      backgroundColor:'#122636',
      height:160,
      width:280,
      marginLeft:10,
      marginBottom:10,
        
    },
    box7:{
        border:2 ,
      backgroundColor:'#122636',
      height:160,
      width:280,
      marginLeft:10,
      marginBottom:10,
        
    },
    box8:{
        border:2 ,
      backgroundColor:'#122636',
      height:160,
      width:280,
      marginLeft:10,
      marginBottom:10,
        
    },
    box9:{
        border:2 ,
      backgroundColor:'#122636',
      height:160,
      width:280,
      marginLeft:10,
      marginBottom:10,
        
    },
    box10:{
        border:2 ,
      backgroundColor:'#122636',
      height:160,
      width:280,
      marginLeft:10,
      marginBottom:10,
        
    },
    font:{
    color :'#FFFFFF',
     fontSize:16,
     marginLeft:10,
     padding:7,
     marginTop:10,

    },
      total:{
    color :'#FFFFFF',
     fontSize:12,
     marginLeft:15,  
      },
    

     

});
export default Categories