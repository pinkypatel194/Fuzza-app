import  React from "react";
import { View,Text,StyleSheet, ScrollView,Image} from "react-native";


const  Details =()=>{
    return(
         <View style={style.color}>
            <Text style={style.Details}> Shipping Details</Text>
             <View style={style.box}>
               <View>
             <View>
             <Text style={style.Text}>⬤ Home</Text>
             <Text  style={style.Text1}>350,Malay Count ,East Emhurst,new York, city </Text>
              <Text  style={style.Text2}>Ny 11369</Text>
              <Text style={style.Text3}>Phone no:78698 0000</Text>   
               </View>
             </View>
             </View>
             <View style={style.box}>
               <View>
             <View>
             <Text style={style.Text}>⬤ Office</Text>
             <Text  style={style.Text1}>8502-8503 Preston Rd. Inglewood Street</Text>
              <Text  style={style.Text2}>Maine,98380</Text>
              <Text style={style.Text3}>Phone no:12100 0023</Text>   
               </View>
             </View>
             </View>
             <View style={style.box2}>
                     <Text style={style.Text5}>+ Add New Address</Text>
             
             <View style={style.box1}>
                     <Text style={style.Text4}>Apply</Text>
                    </View>
             </View>
             </View>
    )
}

const style=StyleSheet.create({
    Details :{
         marginLeft:140,
         marginTop:20,
         color:'#FEFEFF',
         fontWeight:'bold',
         fontSize:15,
    },
    color:{
      backgroundColor:'#07141F',
         flex:1,
       },
    box:{
        height:126,
        width:340,
        borderWidth:2,
        borderColor:'#FEFEFF',
        marginTop:40,
        marginLeft:10,
        borderRadius:10,
    },
    Text:{
        color:'#FEFEFF',
        marginLeft:40,
        marginTop:30,
        fontWeight:'bold',
     },
     Text1:{
        color:'#FEFEFF',
        marginLeft:40,
        fontSize:10
     },
     Text2:{
        color:'#FEFEFF',
        marginLeft:40,
     
       
     },
     Text3:{
        color:'#FEFEFF',
        marginLeft:40,
        fontWeight:'bold',
         fontSize:14
     },
     box1:{
        backgroundColor:'#FEFEFF',
        height:51,
        
        width:335,
        marginTop:300,
        fontSize:15,
        fontWeight:'bold',
        borderRadius:10
    },
    Text4:{
        color:'#000000',
        marginLeft:150,
        marginTop:10,
        fontWeight:'bold',
     },
      box2:{
        backgroundColor:'#122636',
        height:51,
        marginLeft:15, 
        width:335,
        marginTop:5,
        fontSize:15,
        fontWeight:'bold',
        borderRadius:10
        
      },
      Text5:{
        color:'#FEFEFF',
        marginLeft:110,
        marginTop:10,
        fontWeight:'bold',
     },


})
export default Details ;             