import  React from "react";
import { View,Text,StyleSheet, ScrollView,Image, TouchableOpacity} from "react-native";
import off from "./assets/off.png"

const  Coupons =({navigation})=>{
    return(
          <ScrollView>
         <View style={style.Color}>
            <Text style={style.Coupons}>Coupons</Text>
             <View style={style.box}>
               <View style={{flexDirection:'row'}}>
                  <Image  source={off}  style={{height:70,width:50,marginTop:30,marginLeft:20}}/>
             <View>
             <Text style={style.Text}>Google Pay</Text>
             <Text  style={style.Text1}>Buy 1 phone and get 10% off secound phone.</Text>
              <Text  style={style.Text2}>  #GOOGLE20</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Checkout')}>
              <Text style={style.Text3}>apply</Text>   
              </TouchableOpacity>
               </View>
             </View>
             </View>
             <View style={style.box}>
               <View style={{flexDirection:'row'}}>
                  <Image  source={off}  style={{height:70,width:50,marginTop:30,marginLeft:20}}/>
             <View>
             <Text style={style.Text}>Google Pay</Text>
             <Text  style={style.Text1}>Buy 1 phone and get 10% off secound phone.</Text>
              <Text  style={style.Text2}>  #GOOGLE20</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Checkout')}>
              <Text style={style.Text3}>apply</Text>   
              </TouchableOpacity>
               </View>
             </View>
             </View>
             <View style={style.box}>
               <View style={{flexDirection:'row'}}>
                  <Image  source={off}  style={{height:70,width:50,marginTop:30,marginLeft:20}}/>
             <View>
             <Text style={style.Text}>Google Pay</Text>
             <Text  style={style.Text1}>Buy 1 phone and get 10% off secound phone.</Text>
              <Text  style={style.Text2}>  #GOOGLE20</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Checkout')}>
              <Text style={style.Text3}>apply</Text>   
              </TouchableOpacity>
               </View>
             </View>
             </View>
             <View style={style.box}>
               <View style={{flexDirection:'row'}}>
                  <Image  source={off}  style={{height:70,width:50,marginTop:30,marginLeft:20}}/>
             <View>
             <Text style={style.Text}>Google Pay</Text>
             <Text  style={style.Text1}>Buy 1 phone and get 10% off secound phone.</Text>
              <Text  style={style.Text2}>  #GOOGLE20</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Checkout')}>
              <Text style={style.Text3}>apply</Text>   
              </TouchableOpacity>
               </View>
             </View>
             </View>
             <View style={style.box}>
               <View style={{flexDirection:'row'}}>
                  <Image  source={off}  style={{height:70,width:50,marginTop:30,marginLeft:20}}/>
             <View>
             <Text style={style.Text}>Google Pay</Text>
             <Text  style={style.Text1}>Buy 1 phone and get 10% off secound phone.</Text>
              <Text  style={style.Text2}>  #GOOGLE20</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Checkout')}>
              <Text style={style.Text3}>apply</Text>   
              </TouchableOpacity>  
               </View>
             </View>
             </View>
            </View>
            </ScrollView>
               
               )
               }       
        
               const style=StyleSheet.create({
                Coupons:{
                     marginLeft:140,
                     marginTop:30,
                     color:'#FEFEFF',
                     fontWeight:'bold',
                     fontSize:15,
                },
                Color:{
                  backgroundColor:'#07141F',
                     flex:1,
                   },
                box:{
                    height:126,
                    width:340,
                    backgroundColor:'#122636',
                    marginTop:20,
                    marginLeft:10,
                    borderRadius:10,
                },
                Text:{
                    color:'#FEFEFF',
                    marginLeft:70,
                    marginTop:7,
                    fontWeight:'bold',
                 },
                 Text1:{
                    color:'#FEFEFF',
                    marginLeft:70,
                    fontSize:10
                 },
                 Text2:{
                    color:'#FEFEFF',
                    marginLeft:40,
                    marginTop:50,
                   
                 },
                 Text3:{
                    color:'#FEFEFF',
                    marginLeft:220,
                    fontWeight:'bold',
                     fontSize:14
                 }

            })
            export default Coupons;