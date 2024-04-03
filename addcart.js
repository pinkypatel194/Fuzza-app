
import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import LoungeChair from "./assets/chair5.png";
import LoungeLamp from "./assets/Lamps5.png";
import LoungeTable from "./assets/CoffeeTables5.png";
import deleted from "./assets/deleted.png";
import bule from "./assets/buleround.png";
import dec from "./assets/-.png";
import inc from "./assets/+.png";
import brown from "./assets/brownround.png";
import balck from "./assets/balckround.png";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const [items, setItems] = useState([
    { name: "Lounge Chair", quantity: 1, image: LoungeChair, color: bule, price: 130 },
    { name: "Lounge Lamp", quantity: 1, image: LoungeLamp, color: balck, price: 30 },
    { name: "Lounge Table", quantity: 1, image: LoungeTable, color: brown, price: 150 }
  ]);

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <View style={style.Color}>
      <ScrollView>
        <Text style={style.continue}>cart</Text>
        {items.map((item, index) => (
          <View style={style.box} key={index}>
            <View style={{ flexDirection: 'row' }}>
              <View style={style.box1}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={item.image} style={{ height: 75, width: 70, marginTop: 20, marginLeft: 15, padding: 10 }} />
                </View>
              </View>

              <Text style={style.text}>{item.name}</Text>
              <Text style={style.text1}>Qty : {item.quantity}</Text>
              <Image source={item.color} style={style.buleround} />
              <TouchableOpacity onPress={() => removeItem(index)} style={style.deleteButton}>
                <Image source={deleted} style={{ height: 10, width: 10, marginLeft: 90, padding: 10 }} />
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <Text style={style.text2}>${item.price}</Text>
              </View>
              <Text style={style.worngprice}>$160</Text>
            </View>

            <View style={style.background1}>
              <TouchableOpacity onPress={decrementQuantity}>
                <View style={style.round}>
                  <Image source={dec} style={{ height: 2, width: 10, marginTop: 10, marginLeft: 5 }} />
                </View>
              </TouchableOpacity>
              <Text style={{ color: '#F5FCFF', marginTop: -20, marginLeft: 40 }}>{quantity}</Text>
              <TouchableOpacity onPress={incrementQuantity}>
                <View style={style.round1}>
                  <Image source={inc} style={{ height: 10, width: 10, marginTop: 5, marginLeft: 5 }} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))} 
      </ScrollView>
      <View style={style.boxcheckout}>  
      <Text style={style.font}>Total price</Text>
         <View >
        <Text  style={style.click}>Checkout</Text>
        <Text style={style.pricecheckout}>$210.00</Text>
        </View>   
              </View> 
    </View>
  )
}

const style = StyleSheet.create({
 continue:{
                marginTop:35,
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
                  height:130,
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
            } ,
            text :{
                  marginLeft:20,
                   color:'#FEFEFF',
                   fontSize:14,
                   fontWeight:'bold',
            },
            bule:{
                    marginTop:25,marginLeft:5,
                    color:'#D9D9D9'
            },
            text1:
            {
                marginLeft:-82,
                marginTop:25,
                   color:'#FEFEFF',
                   fontSize:14,
                   fontWeight:'bold',
                 
            },
            buleround:{
                     marginTop:27,
                     marginLeft:25
            },
            text2:{
                marginLeft:-190,
                marginTop:80,
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
            worngprice:{
                marginLeft:-150,
                marginTop:83,
                fontSize:10,
                color:'#D9D9D9',
                textDecorationLine:'line-through'
        
            },dicrement:{
                fontSize:25,
                color: "#F5FCFF",
                fontWeight: 'bold',
                marginTop:10,
                marginLeft:20,
                lineHeight: 30
            },productnumber:{
                marginTop:10,marginLeft:30,
                fontSize:20,
                color:'#F5FCFF', 
            },increment:{
                marginTop:10,
                marginLeft:30,
                color: "#F5FCFF",
                fontWeight: 'bold',
                fontSize:25,
                lineHeight: 30 
            },
            background1:{
                borderRadius:50,
                height:30,width:90,
                marginTop:-25,
                marginLeft:230,
                backgroundColor:'#07141F'
            },
            round:{
                borderRadius:50,
                height:20,width:20,
                marginTop:5,
                marginLeft:10,
                backgroundColor:'#122636',
                color:'#F5FCFF',fontSize:20,
            },
            round1:{
                borderRadius:50,
                height:20,width:20,
                marginTop:-18,
                marginLeft:60,
                backgroundColor:'#F5FCFF'
            }, 
            boxcheckout:{
                height:100,
                width:400,
                 backgroundColor:'#122636',
                 marginTop:130,
                 padding:10,
            },
            font:
            {
                color:'#FEFEFF',
                marginLeft:10,
            },
            pricecheckout:{
                height:71,
                width:100, 
                fontSize:20,
                color:'#FEFEFF',
                marginLeft:10,
                marginTop:-20
            },
            click:{
                marginLeft:180,
                backgroundColor:"#FEFEFF",
                height:50,
                width:150,
                textAlign:'center',
                paddingTop:15,
                borderRadius:6,
                marginTop:-10
            }
     
})
export default Cart
