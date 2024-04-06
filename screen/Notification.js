import  React, { useState } from "react";
import { View,Text,Image,StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Discount from  "../assets/Discount1.png";
import  Ewallet from "../assets/E-wallet .png";
import service from  "../assets/service.png";
import  card from "../assets/card.png";
import  setup from "../assets/setup.png";
import AwesomeAlert from "react-native-awesome-alerts";

const  Notification =()=>{
     const [showAlert,setShowAlter]=useState();
     const [ShowEwalletAlert,setShowEwalletAlter]=useState();
     const [showserviceAlert,setshowserviceAlter]=useState();
     const [ShowcardAlert,setShowcardlter]=useState();
     const[showsetupAlert,setShowsetuplter]=useState();

       
          return( 
                <View style={style.Color}>
               <View>
                  <Text style={style.Notification}>Notification</Text>
                <View style={style.box}>
                <View  style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>setShowAlter(!showAlert)}>
                  <Image  source={Discount}  style={{height:40,width:40,backgroundColor:'#07141F',marginTop:5,marginLeft:15}}/>
                  </TouchableOpacity>
                  <AwesomeAlert show={showAlert} 
                  title=' Special Discount' 
                  titleStyle={{fontWeight:'bold',color:'#122636'}}
                  message="This spical promation only vaild today"
                  messageStyle={{color:'#000000'}}
                   showCancelButton={true}
                   cancelText="Cancel"
                   cancelButtonStyle={{backgroundColor:'#122636'}}
                   onCancelPressed={()=>{
                     // console.log('cancel button pressed')
                     setShowAlter()
                    } }
                   showConfirmButton={true}
                   confirmText ="ok"
                   confirmButtonStyle={{backgroundColor:'#3A7EB4'}}
                   onConfirmPressed={()=>{
                     // console.log('confirm button pressed')
                     setShowAlter()
                    } }
                  />
                
                  <View>
                <Text style={style.Text}>30%Special Discount</Text>
                <Text style={style.Text1}> Special promation only vaild today</Text>
                </View>
                </View>
                 </View>
                 <View style={style.box}>
                <View  style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>setShowEwalletAlter(!ShowEwalletAlert)}>
                  <Image  source={Ewallet}  style={{height:40,width:40,backgroundColor:'#07141F',marginTop:5,marginLeft:15}}/>
                  </TouchableOpacity>
                   <AwesomeAlert show={ShowEwalletAlert} 
                   title='E-wallet successfull'
                   titleStyle={{fontWeight:'bold',color:'#122636'}}
                   message="You have to top up your wallet"
                   messageStyle={{color:'#000000'}}
                   showCancelButton={true}
                   cancelText="Cancel"
                   cancelButtonStyle={{backgroundColor:'#122636'}}
                   onCancelPressed={()=>{
                     setShowEwalletAlter(false)
                   }}
                   showConfirmButton={true}
                   confirmText ="ok"
                   confirmButtonStyle={{backgroundColor:'#3A7EB4'}}
                   onConfirmPressed={()=>{
                     setShowEwalletAlter(false)

                     }}
                
                   />
                  <View>
                <Text style={style.Text}>Top up E-wallet successfull</Text>
                <Text style={style.Text1}>You have to top up your wallet</Text>
                 </View>
                 </View>
                  </View>    
                  <View style={style.box}>
                <View  style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>setshowserviceAlter(!showserviceAlert)}>
                  <Image  source={service}  style={{height:40,width:40,backgroundColor:'#07141F',marginTop:5,marginLeft:15}}/>
                  </TouchableOpacity>
                   <AwesomeAlert show={showserviceAlert} 
                   title='service Available'
                   titleStyle={{fontWeight:'bold',color:'#122636'}}
                   message="Now you can track orders"
                   messageStyle={{color:'#000000'}}
                   showCancelButton={true}
                   cancelText="Cancel"
                   cancelButtonStyle={{backgroundColor:'#122636'}}
                   onCancelPressed={()=>{
                     setshowserviceAlter(false)
                   }}
                   showConfirmButton={true}
                   confirmText ="ok"
                   confirmButtonStyle={{backgroundColor:'#3A7EB4'}}
                   onConfirmPressed={()=>{
                     setshowserviceAlter(false)

                     }}
                
                   />
                  <View>
                <Text style={style.Text}>New service Available</Text>
                <Text style={style.Text1}> Now you can track orders</Text>
                 </View>
                 </View>
                  </View>    
                  <View style={style.box}>
                <View  style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>setShowcardlter(!ShowcardAlert)}>
                  <Image  source={card}  style={{height:40,width:40,backgroundColor:'#07141F',marginTop:5,marginLeft:15}}/>
                  </TouchableOpacity>
                   <AwesomeAlert show={ShowcardAlert} 
                   title='card connected'
                   titleStyle={{fontWeight:'bold',color:'#122636'}}
                   message="Credit card has been linked!"
                   messageStyle={{color:'#000000'}}
                   showCancelButton={true}
                   cancelText="Cancel"
                   cancelButtonStyle={{backgroundColor:'#122636'}}
                   onCancelPressed={()=>{
                     setShowcardlter(false)
                   }}
                   showConfirmButton={true}
                   confirmText ="ok"
                   confirmButtonStyle={{backgroundColor:'#3A7EB4'}}
                   onConfirmPressed={()=>{
                     setShowcardlter(false)

                     }}
                
                   />
                  <View>
                <Text style={style.Text}>Credit card connected!</Text>
                <Text style={style.Text1}>Credit card has been linked!</Text>
                 </View>
                 </View>
                  </View>    
                  <View style={style.box}>
                <View  style={{flexDirection:'row'}}>
                  <TouchableOpacity onPress={()=>setShowsetuplter(!showsetupAlert)}>
                  <Image  source={setup}  style={{height:40,width:40,backgroundColor:'#07141F',marginTop:5,marginLeft:15}}/>
                  </TouchableOpacity>
                   <AwesomeAlert show={showsetupAlert} 
                   title='Account setup'
                   titleStyle={{fontWeight:'bold',color:'#122636'}}
                   message="Your account has been created"
                   messageStyle={{color:'#000000'}}
                   showCancelButton={true}
                   cancelText="Cancel"    
                   cancelButtonStyle={{backgroundColor:'#122636'}}
                   onCancelPressed={()=>{
                     setShowsetuplter(false)
                   }}
                   showConfirmButton={true}
                   confirmText ="ok"
                   confirmButtonStyle={{backgroundColor:'#3A7EB4'}}
                   onConfirmPressed={()=>{
                     setShowsetuplter(false)

                     }}
                
                   />
                  <View>
                <Text style={style.Text}>Account setup successful!</Text>
                <Text style={style.Text1}>Your account has been created!</Text>
                 </View>
                 </View>
                  </View>    
              
              
                 </View>
                 </View>
               
       )
       }       

       const style=StyleSheet.create({
        Notification:{
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
            backgroundColor:'#122636',
            marginLeft:10,
            height:51,
            width:335,
            marginTop:20,
            fontSize:15,
            fontWeight:'bold',
            borderRadius:5
        },
        Text:{
            color:'#FEFEFF',
            marginLeft:40,
            marginTop:7,
            fontWeight:'bold',
         },
         Text1:{
            color:'#FEFEFF',
            marginLeft:40,
            fontSize:10
         },
    })
    export default Notification    