import { View,StyleSheet,ScrollView,Image,Text, TouchableOpacity } from "react-native";
import ProfileImage from "./assets/setup.png";
import  chackout from "./assets/chackout1.png"
import Orders from "./assets/Orders.png";
import Wishlist from"./assets/Wishlist.png";
import Payment from "./assets/Ewallet.png";
import Home from "./assets/service.png";

import Notification  from "./assets/Notification.png";
import Settings from"./assets/Settings.png";
import Terms from"./assets/Terms.png";



const Profile=({navigation,route})=>{
    const {name} = route.params ?? {} ;


    
    return(   
       
           <ScrollView>
           <View style={style.Color}>
           
           <Text style={style.continue}>Profile</Text>
            <View style={{flexDirection:'row'}}>
               <TouchableOpacity onPress={()=>navigation.navigate('ProfileDetails')}>
            <Image   source={ProfileImage}  style={{width:30,height:30,marginLeft:10,marginTop:20}}/>
            </TouchableOpacity>

            <Text  style={{color:'#FEFEFF',marginLeft:20,marginTop:10}}> UserName:{name?.Name}</Text>
             <Image  source={chackout} style={{width:30,height:30,marginLeft:10,marginTop:20,backgroundColor:'#FEFEFF',marginLeft:150}}/>
              {/* <View style={style.border}></View> */}
            </View>
            <View style={style.border}></View>
             <View style={{flexDirection:'row'}} >
                  <TouchableOpacity onPress={()=>navigation.navigate('Order History')}>
                 <Image  source={Orders}   style={{height:30,width:30,marginTop:50,marginLeft:20,backgroundColor:'#122636',borderRadius:3}}/>
                 </TouchableOpacity>
                 <Text style={style.Text1}>Orders</Text>
                 </View>
                 <Text style={style.Text2}>Ongoing orders, Recent orders..</Text>
           
            <View style={{flexDirection:'row'}} >
               <TouchableOpacity onPress={()=>navigation.navigate('Wishlist')}>
            <Image  source={Wishlist}   style={{height:30,width:30,marginTop:50,marginLeft:20,backgroundColor:'#122636',borderRadius:3}}/>
            </TouchableOpacity>
            <Text style={style.Text1}>Wishlist</Text>
            </View>
            <Text style={style.Text2}> Your save product...</Text>
            <View style={{flexDirection:'row'}} >
            <TouchableOpacity onPress={()=>navigation.navigate('Payment Method')}>
            <Image  source={Payment}   style={{height:30,width:30,marginTop:50,marginLeft:20,backgroundColor:'#122636',borderRadius:3}}/>
            </TouchableOpacity>
            <Text style={style.Text1}>Payment</Text>
            </View>
            <Text style={style.Text2}> Saved card, Wallets...</Text>
            <View style={{flexDirection:'row'}} >
                <TouchableOpacity onPress={()=>navigation.navigate('Saved Addrees')}>
                 <Image  source={Home}   style={{height:30,width:30,marginTop:50,marginLeft:20,backgroundColor:'#122636',borderRadius:3}}/>
                 </TouchableOpacity>
                 <Text style={style.Text1}>Saved Address</Text>
                 </View>
                 <Text style={style.Text2}> Home, Office..</Text>
         
            <View style={{flexDirection:'row'}} >
             <TouchableOpacity onPress={()=>navigation.navigate('Notification')}> 
            <Image  source={Notification}   style={{height:30,width:30,marginTop:50,marginLeft:20,backgroundColor:'#122636',borderRadius:3}}/>
            </TouchableOpacity> 
            <Text style={style.Text1}>Notification</Text>
            </View>
            <Text style={style.Text2}> Offers, Order tracking messages...</Text>
            <View style={{flexDirection:'row'}} >
               <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
            <Image  source={Settings}   style={{height:30,width:30,marginTop:50,marginLeft:20,backgroundColor:'#122636',borderRadius:3}}/>
            </TouchableOpacity>
            <Text style={style.Text1}>Settings</Text>
            </View>
            <Text style={style.Text2}>app settings, Dark mode...</Text>
            <View style={{flexDirection:'row'}} >
              <TouchableOpacity onPress={()=>navigation.navigate('Terms and conditions')}>
            <Image  source={Terms}   style={{height:30,width:30,marginTop:50,marginLeft:20,backgroundColor:'#122636',borderRadius:3}}/>
            </TouchableOpacity> 
            <Text style={style.Text1}>Terms & Conditions</Text>
            </View>
            <Text style={style.Text2}> Terms & Conditions...</Text>
            
       </View>
        </ScrollView>
    
          
    

           )
         }
         
         const style=StyleSheet.create({
            continue:{
                marginTop:0,
                marginLeft:20,
                padding:30,
                color:'white',
                fontSize:15,
                fontWeight:'bold',
                 textAlign:'center',
                justifyContent:'center',
                
            },
            Color:{
                       backgroundColor:'#07141F',
                          flex:1,
                        },
              box:{
                height:158,
                width:428,   
                backgroundColor:'#122636',
              },
              Text:{
                  color:'#FEFEFF',
                  marginTop:20
              },
              Text1:{
                 color:'#FEFEFF',
                 marginTop:50,
                 marginLeft:80,
                 fontWeight:'bold'
              },
             Text2:{
                color:'#FEFEFF',
                marginLeft:80,
                fontSize:12,
                
             },
             border:{
                marginTop:30,
                borderBottomWidth:3,
                borderColor:'#FEFEFF',
             }

        })
        export default Profile;     
                
