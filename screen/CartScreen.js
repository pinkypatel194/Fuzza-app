import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import deleted from "../assets/deleted.png";
import { useFocusEffect } from '@react-navigation/native';

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const fetchCartItems = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('cartItems');
          if (jsonValue != null) {
            setCartItems(JSON.parse(jsonValue));
          }
        } catch (e) {
          console.error('Failed to fetch cart items from AsyncStorage:', e);
        }
      };
      fetchCartItems();
    }, [])
  );

  const saveCartItems = async (items) => {
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart items to AsyncStorage:', e);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleCheckout = () => {
    navigation.navigate('Checkout');
  };

  const incrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    saveCartItems(updatedCartItems);
  };

  const decrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
    saveCartItems(updatedCartItems);
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    saveCartItems(updatedCartItems);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.backIconContainer} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.continue}>Cart</Text>
        {cartItems.map((item, index) => (
          <View key={index} style={styles.box}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.box1}>
                <Image source={item.image} style={styles.image} />
              </View>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text1}>Qty : {item.quantity}</Text>
              <Text style={styles.text2}>${item.price}</Text>
              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Image source={deleted} style={styles.deleteIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => incrementQuantity(item.id)}>
                <Text style={styles.increment}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => decrementQuantity(item.id)}>
                <Text style={styles.decrement}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <View style={styles.checkoutBox}>
          <Text style={styles.totalPrice}>Total price: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</Text>
          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#122636',
  },
  continue: {
    marginTop: 30,
    marginLeft: 12,
    padding: 5,
    color: 'white',
    fontSize: 19,
    textAlign: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 150,
    width: 340,
    backgroundColor: '#122636',
    marginLeft: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  box1: {
    height: 90,
    width: 90,
    backgroundColor: '#1F303E',
    borderRadius: 10,
  },
  image: {
    height: 70,
    width: 70,
    marginTop: 10,
    marginLeft: 15,
    padding: 10,
  },
  text: {
    marginLeft: 10,
    color: '#FEFEFF',
    fontSize: 14,
    // fontWeight: 'bold',
  },
  text1: {
    marginLeft: -249,
    marginTop: 25,
    color: '#FEFEFF',
    fontSize: 14,
    // fontWeight: 'bold',
  },
  text2: {
    marginLeft: -40,
    marginTop: 50,
    color: '#FEFEFF',
    fontSize: 14,
    // fontWeight: 'bold',
  },
  deleteIcon: {
    height: 10,
    width: 10,
    marginLeft: 150,
    padding: 10,
    marginTop: 40,
  },
  increment: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
    marginTop: 40,

  },
  decrement: {
    fontSize: 20,
    marginTop: 40,
    color: 'white',
    marginLeft: 10,
  },
  checkoutBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1F303E',
    borderTopWidth: 1,
    borderTopColor: '#FEFEFF',
  },
  backIconContainer: {
    position: 'absolute',
    top: 35,
    left: 10,
    zIndex: 1,
  },
  totalPrice: {
    color: '#FEFEFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#FEFEFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#1F303E',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cart;
