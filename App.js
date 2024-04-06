import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/LoginScreen';
import ForgotPasswordScreen from './screen/ForgotPassword';
import MainContainer from './component/MainContainer';
import SingIn from './screen/SingInScreen';
import OtpVerification from './screen/OtpVerification';
import CreatePassword from './screen/NewPassword';
import termsCondition from './screen/TermsConditions';
import Products from './screen/ProductDetails';
import ProductDetails from './screen/ProductDetails';
import Logo from './screen/logo-page';
import Intro1 from './screen/intro1';
import Intro2 from './screen/intro2';
import Intro3 from './screen/intro3';
import Notification from './screen/Notification';
import Menu from './screen/menu';
import Sofas from './screen/sofa';
import Lamp from './screen/lamp';
import TvUnits from './screen/tvunit';
import Buddaycart from './screen/buddycart';
import TruckDeliveryAnimation from './screen/AnimationScreen';
import Cart from './screen/CartScreen';
import Chairs from './screen/chairs';
import Chaircart from './screen/chairscarts';
import Filter from './screen/filters';
import Colorfilter from './screen/colorfilter';
import Material from './screen/matetials';
import Backschair from './screen/backschair';
import Payment from './screen/payment';
import Cards from './screen/paymentsuccessfully';
import Winback from './screen/winbackchair';
import Bed from './screen/bed';
import Lampcart from './screen/lampcart';
import Tabel from './screen/tabel';
import OrderHistory from './screen/OrderHistory';
import Wishlist from './screen/likeScreen';
import Profile from './screen/ProfileScreen';
import PaymentMethod from './screen/PaymentMethod';
import SavedAddrees from './screen/SavedAddrees';
import Settings from './screen/Settings';
import Termsandconditions from './screen/Termsandconditions';
import AddNewAddress from './screen/AddNewAddress';
import AddNewCard from "./screen/AddNewCard";
import ProfileDetails from "./screen/ProfileDetails";
import Trackorder from './screen/track';
import Checkout from './screen/checkout';
import Coupons from './screen/Coupons';
import ChooseShipping from './screen/Choose Shipping ';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="logo">
        <Stack.Screen name='logo' component={Logo} options={{ headerShown: false }} />
        <Stack.Screen name='Animation' component={TruckDeliveryAnimation} options={{ headerShown: false }} />
        <Stack.Screen name="intro1" component={Intro1} options={{ headerShown: false }} />
        <Stack.Screen name="intro2" component={Intro2} options={{ headerShown: false }} />
        <Stack.Screen name="intro3" component={Intro3} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainContainer" component={MainContainer} options={{ headerShown: false }} />
        <Stack.Screen name="SingIn" component={SingIn} options={{ headerShown: false }} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePassword" component={CreatePassword} options={{ headerShown: false }} />
        <Stack.Screen name="termsCondition" component={termsCondition} options={{ headerShown: false }} />
        <Stack.Screen name="Products" component={Products} options={{ headerShown: false }} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
        <Stack.Screen name="buddycart" component={Buddaycart} options={{ headerShown: false }} />
        <Stack.Screen name="menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="sofa" component={Sofas} options={{ headerShown: false }} />
        <Stack.Screen name="chairs" component={Chairs} options={{ headerShown: false }} />
        <Stack.Screen name="chairscarts" component={Chaircart} options={{ headerShown: false }} />
        <Stack.Screen name="addcart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="lamp" component={Lamp} options={{ headerShown: false }} />
        <Stack.Screen name="tvunit" component={TvUnits} options={{ headerShown: false }} />
        <Stack.Screen name="filters" component={Filter} options={{ headerShown: false }} />
        <Stack.Screen name="colorfilter" component={Colorfilter} options={{ headerShown: false }} />
        <Stack.Screen name="matetials" component={Material} options={{ headerShown: false }} />
        <Stack.Screen name="backschair" component={Backschair} options={{ headerShown: false }} />
        <Stack.Screen name="checkout" component={Payment} options={{ headerShown: false }} />
        <Stack.Screen name="paymentsuccessfully" component={Cards} options={{ headerShown: false }} />
        <Stack.Screen name="winbackchair" component={Winback} options={{ headerShown: false }} />
        <Stack.Screen name="bed" component={Bed} options={{ headerShown: false }} />
        <Stack.Screen name="lampcart" component={Lampcart} options={{ headerShown: false }} />
        <Stack.Screen name="tabel" component={Tabel} options={{ headerShown: false }} />
        <Stack.Screen name="Order History" component={OrderHistory} options={{ headerShown: false }} />
        <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Payment Method" component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name="Saved Addrees" component={SavedAddrees} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name="Terms and conditions" component={Termsandconditions} options={{ headerShown: false }} />
        <Stack.Screen name="AddNewAddress" component={AddNewAddress} options={{ headerShown: false }} />
        <Stack.Screen name="AddNewCard" component={AddNewCard} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} options={{ headerShown: false }} />
        <Stack.Screen name="track" component={Trackorder} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
        <Stack.Screen name="Coupons" component={Coupons} options={{ headerShown: false }} />
        <Stack.Screen name="ChooseShipping" component={ChooseShipping} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;