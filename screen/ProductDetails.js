import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native'
import arrow from '../assets/back.png'
import discount from '../assets/discount.png'
import star from '../assets/starr.png'
import freeDelivery from '../assets/FreeDelivery.png'
import cod from '../assets/cod.png'
import retrn1 from '../assets/return.png'
import cart from '../assets/cart.png'
import reviwerspic from '../assets/reviewserpic.png'
import shoopingbag from '../assets/cart.png'
import data from "../data";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = ({ route }) => {
  const navigation = useNavigation();
  const [categoryIncrease, setCategoryIncrease] = useState(0);
  const [pincode, setPincode] = useState('');
  const { productId } = route.params;
  const [pincodeError, setPincodeError] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);

  const handleCategoryIncrease = (increaseAmount) => {
    setCategoryIncrease(increaseAmount);
  };

  const handleCheckPincode = () => {
    if (pincode.trim().length !== 6) {
      setPincodeError('Please enter a valid 6-digit pincode');
    } else {
      setPincodeError('');
    }
  };

  const calculateFinalPrice = () => {
    const finalPrice = (discountedPrice + categoryIncrease) * quantity;
    return finalPrice.toFixed(0);
  };

  const product = data.items.find(item => item.id === productId);

  const originalPrice = product.price;
  const discountedPrice = product.price * (1 - product.discount / 100);

  const formatPrice = () => {
    return discountedPrice.toFixed(0);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addToCart = async () => {
    try {
      const itemToAdd = {
        id: productId,
        name: product.name,
        quantity: quantity,
        price: product.price,
        discount: discountedPrice,
        image: product.image
      };
      let existingCart = await AsyncStorage.getItem('cartItems');
      existingCart = existingCart ? JSON.parse(existingCart) : [];
      existingCart.push(itemToAdd);
      await AsyncStorage.setItem('cartItems', JSON.stringify(existingCart));
      console.log(itemToAdd);
      // navigation.navigate('Cart');
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <ScrollView style={styles.con}>
      <View>
        {product && (
          <>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => { Actions.pop() }}>
                <Image source={arrow} style={styles.arrowicon} />
              </TouchableOpacity>
              <Text style={styles.heading}>{product.category}</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Image source={product.image} style={styles.bedSetStyle} />
              <Image source={product.image} style={styles.bedSetStyle} />
              <Image source={product.image} style={styles.bedSetStyle} />
              <Image source={product.image} style={styles.bedSetStyle} />
            </ScrollView>
            <Text style={styles.divider}>-----------------------------------------------------</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.productname}>{product.name}</Text>
              <Image source={discount} style={styles.discount} />
              <Text style={styles.discountprice}>${product.discount}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.rating}>4.0</Text>
              <Image source={star} style={styles.ratingstar} />
              <Image source={star} style={styles.ratingstar} />
              <Image source={star} style={styles.ratingstar} />
              <Image source={star} style={styles.ratingstar} />
              <Image source={star} style={styles.ratingstar} />
              <Text style={styles.reviews}>158 Reviews</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.price}>${formatPrice()}</Text>
              <Text style={styles.wrongPrice}>${product.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={decrementQuantity}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.checkDelivery}>Check Delivery</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={styles.pincode}
                placeholder="Pincode"
                placeholderTextColor={'#FFFFFF'}
                onChangeText={(text) => setPincode(text)}
                value={pincode}
              />
              <Text
                style={styles.checkbox}
                onPress={handleCheckPincode}>Check
              </Text>
            </View>
            {pincodeError ? <Text style={styles.error}>{pincodeError}</Text> : null}
            <View>
              <View style={styles.service}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={freeDelivery} style={{ marginTop: 15, marginLeft: 10 }} />
                  <Text style={styles.servicefree}>Free</Text>
                  <Text style={styles.servicedelivery}>Delivery</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={cod} style={{ marginTop: 15, marginLeft: 30 }} />
                  <Text style={styles.servicefree}>COD</Text>
                  <Text style={styles.servicedelivery}>Available</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={retrn1} style={{ marginTop: 15, marginLeft: 30 }} />
                  <Text style={styles.servicefree}>21 days</Text>
                  <Text style={styles.servicedelivery1}>return</Text>
                </View>
              </View>
              <Text style={styles.Details}>Details</Text>
              <View style={styles.detalis1}>
                <Text style={styles.Detailsline1}>This product is eligible for returns and size</Text>
                <Text style={styles.Detailsline2}> replacements. Please initiate the return from the </Text>
                <Text style={styles.Detailsline3}> “My Orders” section</Text>
              </View>
              <View style={styles.addcart} >
                <Image source={cart} style={{ marginLeft: 10, marginTop: 18, height: 20, width: 25 }} />
                <TouchableOpacity onPress={() => addToCart()}>
                  <Text style={styles.ad}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.reviewscount}>430 Reviews</Text>
              <View style={styles.reviwescommnet}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={reviwerspic} style={{ height: 50, width: 50, marginTop: 20, marginLeft: 15 }} />
                  <Text style={styles.reviwersname}>Rina Jones</Text>
                  <Image source={star} style={{ height: 15, width: 15, marginTop: 25, marginLeft: 130 }} />
                  <Text style={styles.starRating}>4.0</Text>
                </View>
                <Text style={styles.seenMsg}>Just Now</Text>
                <Text style={styles.comment}>I adore this item. Just fantastic!! they create the </Text>
                <Text style={styles.comment1}>actual seen in the picture !!</Text>
              </View>
            </View>
            <View style={styles.reviwescommnet}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={reviwerspic} style={{ height: 50, width: 50, marginTop: 20, marginLeft: 15 }} />
                <Text style={styles.reviwersname}>Smith Williams</Text>
                <Image source={star} style={{ height: 15, width: 15, marginTop: 25, marginLeft: 110 }} />
                <Text style={styles.starRating}>4.0</Text>
              </View>
              <Text style={styles.seenMsg}>1 min ago</Text>
              <Text style={styles.comment}>The best product quality.! It's amazing, Love it...!! </Text>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: '#122636'
  },
  arrowicon: {
    height: 26,
    width: 26,
    marginLeft: 16,
    marginTop: 10,
    fontWeight: 'bold'
  },
  heading: {
    color: "#F5FCFF",
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 120,
    marginTop: 15
  },
  bedSetStyle: {
    height: 200,
    width: 300,
    marginLeft: 30,
  },
  divider: {
    color: '#fff',
    fontSize: 25,
    marginTop: 0,
  },
  productname: {
    color: "#F5FCFF",
    fontWeight: 'bold',
    marginLeft: 10
  },
  discount: {
    marginLeft: 128,
  },
  discountprice: {
    marginLeft: -45,
    marginTop: 6,
    color: '#E93030',
    fontSize: 12
  },
  rating: {
    color: '#D9D9D9',
    fontSize: 12,
    marginLeft: 10
  },
  ratingstar: {
    height: 13,
    width: 13,
    marginLeft: 2,
    marginTop: 2
  },
  reviews: {
    color: '#D9D9D9',
    fontSize: 12,
    marginLeft: 5
  },
  price: {
    color: '#F5FCFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10
  },
  wrongPrice: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 14,
    color: '#D9D9D9',
    textDecorationLine: 'line-through'
  },
  quantityContainer: {
    height: 40,
    width: 100,
    textAlign: 'center',
    marginLeft: 242,
    marginTop: -40,
    borderRadius: 10,
    backgroundColor: '#07141F',
    flexDirection: 'row'
  },
  quantityButton: {
    fontSize: 25,
    color: "#F5FCFF",
    fontWeight: 'bold',
    marginTop: 3,
    marginLeft: 15
  },
  quantity: {
    marginTop: 7,
    marginLeft: 18,
    fontSize: 20,
    color: '#F5FCFF',
  },
  description: {
    color: "#FFFFFF",
    fontSize: 13.8,
    marginLeft: 10,
    marginTop: 15,
  },
  checkDelivery: {
    color: "#FFFFFF",
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: '600',
  },
  pincode: {
    borderWidth: 2,
    height: 45,
    width: 367,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
    borderColor: '#B8BEC3',
    paddingLeft: 20,
    color: '#D9D9D9'
  },
  error: {
    color: 'red',
    marginLeft: 10,
    marginTop: 5
  },
  checkbox: {
    height: 41,
    width: 70,
    marginLeft: -72.3,
    marginTop: 12,
    backgroundColor: '#B8BEC3',
    borderRadius: 2,
    paddingTop: 10,
    paddingLeft: 15
  },
  service: {
    height: 60,
    width: 360,
    marginLeft: 10,
    borderRadius: 8,
    marginTop: 20,
    backgroundColor: '#07141F',
    flexDirection: 'row'
  },
  servicefree: {
    marginTop: 17,
    marginLeft: 10,
    color: "#FFFFFF",
    fontSize: 12
  },
  servicedelivery: {
    marginTop: 30,
    marginLeft: -23,
    color: "#FFFFFF",
    fontSize: 12
  },
  servicedelivery1: {
    marginTop: 30,
    marginLeft: -40,
    color: "#FFFFFF",
    fontSize: 12
  },
  Details: {
    color: "#F5FCFF",
    fontSize: 15,
    marginTop: 15,
    marginLeft: 10
  },
  detalis1: {
    height: 100,
    width: 360,
    marginLeft: 10,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#07141F',
    flexDirection: 'row'
  },
  Detailsline1: {
    color: '#D9D9D9',
    marginTop: 10,
    marginLeft: 18
  },
  Detailsline2: {
    color: '#D9D9D9',
    marginTop: 35,
    marginLeft: -266
  },
  Detailsline3: {
    color: '#D9D9D9',
    marginTop: 60,
    marginLeft: -310
  },
  addcart: {
    height: 55,
    width: 360,
    marginLeft: 10,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row'
  },
  addtocart: {
    marginLeft: 10,
    marginTop: 18,
    color: '#000000',
    fontSize: 16
  },
  addtocartprice: {
    marginLeft: 120,
    marginTop: 18,
    color: '#000000',
    fontSize: 16,
    fontWeight: "bold"
  },
  reviewscount: {
    color: '#FFFFFF',
    marginTop: 20,
    marginLeft: 10,
    fontSize: 15
  },
  reviwescommnet: {
    height: 120,
    width: 360,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#07141F',
  },
  reviwersname: {
    color: '#F5FCFF',
    fontSize: 14,
    marginTop: 23,
    marginLeft: 10
  },
  starRating: {
    color: "#D9D9D9",
    fontSize: 13,
    marginLeft: 10,
    marginTop: 23
  },
  seenMsg: {
    color: '#9BA3AA',
    fontSize: 12,
    marginLeft: 75,
    marginTop: -25
  },
  comment: {
    color: '#F5FCFF',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 20
  },
  comment1: {
    color: '#F5FCFF',
    fontSize: 12,
    marginLeft: 20,
    marginTop: 2
  },
  similarproduct: {
    height: 60,
    backgroundColor: '#1F303E',
    margin: 0,
    borderRadius: 10,
    marginLeft: 0,
    borderColor: '#122636',
    marginTop: 20
  },
  Similartext: {
    color: '#F5FCFF',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15
  },
  viewall: {
    marginLeft: 155,
    marginTop: 20,
    color: '#ffffff'
  },
});
export default ProductDetails;