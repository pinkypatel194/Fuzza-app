// import React, { useState }  from "react";
import { View,StyleSheet,ScrollView,Image,Text, TouchableOpacity } from "react-native";
// import deleted from "deleted.png";
import LoungeChair   from "./assets/Loungechair.jpg";
import LoungeLamp   from "./assets/LoungeLamp.jpg";
import LoungeTable from "./assets/LoungeTable.jpg";
import deleted from  "./assets/deleted.png";
const Cart=()=>{
    //  const[Checkout,setCheckout]=useState();
    //  const onPress= ()=>setCheckout(prevCheckout=>prevCheckout)
     return(
         <ScrollView>
        <View style={style.Color}>
            <Text style={style.continue}>cart</Text>
            <View style={style.box}>
                <View style={{flexDirection:'row'}}>
                <View style={style.box1}>
                   <Image source={LoungeChair}  style={{height:75,width:70,marginTop:30,marginLeft:15,padding:10}}/>
                </View>

                <Text style={style.text}>Lounge Chair 
                </Text>
                {/* <Image source={deleted}  style={{height:10,width:10,marginLeft:80,padding:10}}/> */}
                <Text style={style.text1}>Qty : 1    Blue </Text>
                <Text style={style.text2}>$130</Text> 
               
                <Image source={deleted}  style={{height:10,width:10,marginLeft:150,padding:10}}/>
                
                 
                </View>
            </View>
            <View style={style.box}> 
                <View style={{flexDirection:'row'}}>
                <View style={style.box1}>
                <Image source={LoungeLamp}  style={{height:75,width:70,marginTop:10,marginLeft:15,padding:10}}/>
                </View>
                <Text style={style.text}>Lounge Lamp</Text>
                <Text style={style.text1}>Qty : 1     Block </Text>
                <Text style={style.text2}>$150</Text> 
                <Image source={deleted}  style={{height:10,width:10,marginLeft:150,padding:10}}/>
                </View>
            </View>
            <View style={style.box}>
                <View style={{flexDirection:'row'}}>
                <View style={style.box1}>
                <Image source={LoungeTable}  style={{height:75,width:70,marginTop:30,marginLeft:15,padding:10}}/>
                </View>
                <Text style={style.text}>Lounge Table</Text>
                <Text style={style.text1}>Qty : 1    Brown </Text>
                <Text style={style.text2}>$100</Text> 
                <Image source={deleted}  style={{height:10,width:10,marginLeft:150,padding:10}}/>
                </View>
            </View>
            
       
        <View style={style.box2}  >
                 <Text style={style.font}>Total price</Text>
                <Text style={style.navigator}>$210.00
                 {/* <Text>Checkout:{Checkout}</Text> */}
                    <View >
                       <Text  style={style.click}>Checkout</Text>
                  </View>
                </Text>   
             </View>   
               </View>
               </ScrollView>
     )
}
const style=StyleSheet.create({
    continue:{
        marginTop:20,
        marginLeft:20,
        padding:5,
        color:'white',
        fontSize:15,
         textAlign:'center',
        justifyContent:'center',
    },
    Color:{
        backgroundColor:'#07141F',
           flex:1,
         },
      box:{
          height:150,
          width:340,
           backgroundColor:'#122636',
            marginLeft:10,
           marginTop:20,
           padding:10,
           borderRadius:10,

      },
    box1:{
         height:98,
         width:90,
         backgroundColor:'#1F303E',
         borderRadius:10,
        //   padding:30,
        //  marginHorizontal:10,

         
    } ,
    text :{
          marginLeft:20,
        //   padding:5,
           color:'#FEFEFF',
           fontSize:14,
           fontWeight:'bold',
         
          
    },
    text1:
    {
        marginLeft:-82,
        marginTop:25,
           color:'#FEFEFF',
           fontSize:14,
           fontWeight:'bold',
         
    },
    text2:{
        marginLeft:-90,
        marginTop:50,
           color:'#FEFEFF',
           fontSize:14,
           fontWeight:'bold',
         
    },
   
    box2 :{
        height:70,
        width:360,
         backgroundColor:'#122636',
        
         marginTop:130,
         padding:10,
        

    },
     navigator:{
           height:71,
           width:100, 
           fontSize:20,
           color:'#FEFEFF',
           marginLeft:10,
     },
     font:{
      
            color:'#FEFEFF',
            marginLeft:10,
    
     },
      Button:{
        //  padding:5,
        backgroundColor:'#FEFEFF',
        alignSelf:'flex-end',
        fontSize:12
      },
       
         click:{
              marginRight:-200,
              backgroundColor:"#FEFEFF",
              height:100,
              width:150,
              textAlign:'center',
              borderRadius:6
         }
    
       
})
export default Cart 