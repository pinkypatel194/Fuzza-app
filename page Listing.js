import  React from "react";
import { View,Text,Image,StyleSheet, ScrollView} from "react-native";


const  Page =()=>{
          return(
              <ScrollView>
                 <View style={style.color}>
                <Text style={style.Page}>Page-Lisiting!</Text>
              
              <View style={style.box}>
                 <Text style={style.Text}>Onboarding&Authentication</Text>
                  </View>
              <Text style={style.Text1}>Create Account</Text> 
              <Text style={style.Text1}>Forgot password</Text>  
              <Text style={style.Text1}>Login</Text>  
              <Text style={style.Text1}>Onboarding</Text>  
              <Text style={style.Text1}> OTP</Text>  
              <Text style={style.Text1}>Reset password</Text> 
              <View style={style.box}>
                 <Text style={style.Text}>Main Pages</Text>
                  </View>
              <Text style={style.Text1}>Categoried</Text> 
              <Text style={style.Text1}>Home page</Text>  
              <Text style={style.Text1}>Producat Detalis Page</Text>  
              <Text style={style.Text1}>Product-2 Detalis page</Text>  
              <Text style={style.Text1}>Shop page</Text> 
               
              <View style={style.box}>
                 <Text style={style.Text}>Cart,Order&payment Pages</Text>
                  </View>
              <Text style={style.Text1}>Cart</Text> 
              <Text style={style.Text1}>Checkout</Text>  
              <Text style={style.Text1}>Coupon</Text>  
              <Text style={style.Text1}>New Address</Text>  
              <Text style={style.Text1}>New Card</Text>  
              <Text style={style.Text1}>Order-detalis</Text> 
              <Text style={style.Text1}>Order-tracking</Text>  
              <Text style={style.Text1}>Payment</Text>  
              <Text style={style.Text1}>Shipping Address</Text>  
              <Text style={style.Text1}>Shipping page</Text> 
              <View style={style.box}>
                 <Text style={style.Text}>profile,Settings Pages</Text>
                  </View>
              <Text style={style.Text1}>Help</Text> 
              <Text style={style.Text1}>Language</Text>  
              <Text style={style.Text1}>Manage-delivery-address</Text>  
              <Text style={style.Text1}>Manage Payment</Text>  
              <Text style={style.Text1}>Notification</Text>  
              <Text style={style.Text1}>Order history</Text> 
              <Text style={style.Text1}>Order setting</Text>  
              <Text style={style.Text1}>profile</Text>  
              <Text style={style.Text1}>profile setting</Text>  
              <Text style={style.Text1}>Setting</Text> 
              <Text style={style.Text1}>Terms&conditions page</Text>  
              <Text style={style.Text1}>Voucher</Text>  
              <Text style={style.Text1}>Wishlist</Text> 
              
              <View style={style.box}>
                 <Text style={style.Text}>Other pages</Text>
                  </View>
              <Text style={style.Text1}>Empty Cart</Text> 
              <Text style={style.Text1}>Empty natification</Text>  
              <Text style={style.Text1}>Empty Order History</Text>  
              <Text style={style.Text1}>Empty Search</Text>  
              <Text style={style.Text1}>Empty Wishlist</Text>  
              <Text style={style.Text1}>Page-Lissting</Text> 
              <Text style={style.Text1}>Search</Text>  
               </View>
              </ScrollView>
              
              
            )
   } 
   const style=StyleSheet.create({
    Page:{
         marginLeft:130,
         marginTop:30,
         color:'#FEFEFF',
         fontWeight:'bold',
         fontSize:15,
    },
    box:{
        backgroundColor:'#122636',
        marginLeft:20,
        height:51,
        width:320,
        marginTop:10,
        fontSize:15,
        fontWeight:'bold',
        borderRadius:10
    },
    Text:{
       color:'#FEFEFF',
       marginLeft:20,
       marginTop:15,
       fontWeight:'bold',
    },
    Text1:{
        color:'#FEFEFF',
        marginLeft:20,
        marginTop:15,
       
     },
      color:{
     backgroundColor:'#07141F',
              flex:1,
      },
   })
export default Page;