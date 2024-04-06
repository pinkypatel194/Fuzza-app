// MainContainer.js
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screen/HomeScreen';
import CartScreen from '../screen/CartScreen';
import ProfileScreen from '../screen/ProfileScreen';
import CategoriesScreen from '../screen/CategoriesScreen';
import LikeScreen from '../screen/likeScreen';
import CategoryDetails from '../screen/CategoryDetails';
import { StyleSheet, Text } from 'react-native';
import Home from '../screen/HomeScreen';

const homeName = 'Home';
const categoriesName = 'Categories'; 
const cartName = 'Cart';
const profileName = 'Profile';
const likeName = 'Like';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CategoriesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={categoriesName} component={CategoriesScreen} options={{headerShown:false}}/>
    <Stack.Screen name="CategoryDetails" component={CategoryDetails} options={{headerShown:false}}/>
  </Stack.Navigator>
);

export default function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === categoriesName) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (rn === cartName) {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (rn === profileName) {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          } else if (rn === likeName) {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: '#07141F', borderColor: '#07141F' },
      })}
      tabBarOptions={null}
      style={style.background}
    >
      <Tab.Screen name={homeName} component={Home} options={{headerShown:false}}/>
      <Tab.Screen name={categoriesName} component={CategoriesStack} options={{headerShown:false}}/>
      <Tab.Screen name={cartName} component={CartScreen} options={{headerShown:false}}/>
      <Tab.Screen name={likeName} component={LikeScreen} options={{headerShown:false}}/>
      <Tab.Screen name={profileName} component={ProfileScreen} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  background: {
    backgroundColor: '#07141F',
  },
  text :{
    fontSize:40,
    color: '#ffffff',
  }
});
