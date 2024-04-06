import React  from "react";
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
  const Stack =createStackNavigator();
import Profile from './Profile';
import OrderHistory from './Order History';
import Wishlist from './Wishlist';
import PaymentMethod from './Payment Method';
import SavedAddrees from './Saved Addrees';
import Languages from './Languages';
import Notification from './Notification';
import  Settings from './Settings';
import Termsandconditions from './Terms and conditions';
import AddNewAddress from './Add New Address';
import paymentsuccessfully  from "./paymentsuccessfully";
import AddNewCard from "./Add New Card";
import ProfileDetails from "./ProfileDetails";
import Checkout   from "./Checkout";
import Coupons from "./Coupons";
import ChooseShipping from "./Choose Shipping "


 const  App=()=> {
   return(
          
         <NavigationContainer>
         <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen name="Profile"  component={Profile} options={{headerShown:false}}/>
          <Stack.Screen name="Order History" component={OrderHistory} options={{headerShown:false}}/>
          <Stack.Screen name="Wishlist" component={Wishlist} options={{headerShown:false}}/>
          <Stack.Screen name="Payment Method"  component={PaymentMethod} options={{headerShown:false}}/>
          <Stack.Screen name="Saved Addrees"   component={SavedAddrees} options={{headerShown:false}}/>
          <Stack.Screen name="Languages"      component={Languages} options={{headerShown:false}}/> 
          <Stack.Screen name="Notification"   component={Notification} options={{headerShown:false}}/>
          <Stack.Screen name="Settings"       component={Settings}  options={{headerShown:false}}/>
          <Stack.Screen name="Terms and conditions" component={Termsandconditions}  options={{headerShown:false}}/>
          <Stack.Screen name ="Add New Address"    component={AddNewAddress} options={{headerShown:false}}/>
           <Stack.Screen name="paymentsuccessfully"    component={paymentsuccessfully} options={{headerShown:false}}/>
           <Stack.Screen name="Add New Card"     component={AddNewCard}  options={{headerShown:false}}/>
           <Stack.Screen name="ProfileDetails"   component={ProfileDetails}  options={{headerShown:false}}/>
           <Stack.Screen name="Checkout"   component={Checkout}  options={{headerShown:false}}/>
           <Stack.Screen name="Coupons"   component={Coupons}  options={{headerShown:false}}/>
           <Stack.Screen name="ChooseShipping"   component={ChooseShipping}  options={{headerShown:false}}/>
           
         </Stack.Navigator>
         
         </NavigationContainer>                   

)
     }
   
export default App