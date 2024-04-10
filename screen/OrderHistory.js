import React from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import Wingback from "../assets/Wingback.png";
import Lamp from "../assets/Lamp.png";
import Table from "../assets/Table.png";


const OrderHistory = () => {
   return (

      <View style={style.Color}>
         <Text style={style.contione}>Order History</Text>
         <View style={style.box5}>
            <TextInput style={style.Text1}
               placeholder="Search here....."
            />
            <View style={style.box}>
               <View style={{ flexDirection: 'row' }}>
                  <View style={style.box1}>
                     <Image source={Wingback} style={{ height: 75, width: 70, marginTop: 30, marginLeft: 5, padding: 10 }} />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={style.text}>WingbackChair</Text>
                     <TouchableOpacity>
                        <Text style={style.box3}>ongoing</Text>
                     </TouchableOpacity>
                  </View>

                  <Text style={style.text1}>Qty : 1 </Text>
                  <Text style={style.text2}>View Details</Text>

                  <Text style={style.Text2}>Order:26jan'23</Text>

               </View>
            </View>
            <View style={style.box}>
               <View style={{ flexDirection: 'row' }}>
                  <View style={style.box1}>
                     <Image source={Lamp} style={{ height: 75, width: 70, marginTop: 30, marginLeft: 5, padding: 10 }} />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={style.text}>Table Lamp</Text>
                     <TouchableOpacity>
                        <Text style={style.box3}>ongoing</Text>
                     </TouchableOpacity>
                  </View>

                  <Text style={style.text1}>Qty : 1 </Text>
                  <Text style={style.text2}>View Details</Text>
                  <Text style={style.Text2}>Order:26jan'23</Text>
               </View>
            </View>
            <View style={style.box}>
               <View style={{ flexDirection: 'row' }}>
                  <View style={style.box1}>
                     <Image source={Table} style={{ height: 75, width: 70, marginTop: 30, marginLeft: 10, padding: 10 }} />
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                     <Text style={style.text}>Side Table</Text>
                     <TouchableOpacity>
                        <Text style={style.box4}>Delivered</Text>
                     </TouchableOpacity>
                  </View>

                  <Text style={style.text1}>Qty : 1 </Text>
                  <Text style={style.text2}>View Details</Text>
                  <Text style={style.Text2}>Order:26jan'23</Text>
               </View>
            </View>
         </View>
      </View>
   )
}
const style = StyleSheet.create({

   contione: {
      marginLeft: 140,
      marginTop: 30,
      color: '#FEFEFF',
      fontWeight: 'bold',
      fontSize: 15,
   },
   Color: {
      backgroundColor: '#07141F',
      flex: 1,
   },

   box5: {
      height: 37,
      width: 320,
      marginLeft: 20,
      marginTop: 20,
      backgroundColor: '#122636',
      borderRadius: 10
   },
   Text1: {
      marginLeft: 40,
      color: '#FEFEFF'
   },
   box: {
      height: 150,
      width: 300,
      backgroundColor: '#122636',
      marginLeft: 7,
      marginTop: 20,
      padding: 10,
      borderRadius: 10,

   },
   box1: {
      height: 98,
      width: 90,
      backgroundColor: '#1F303E',
      borderRadius: 10,



   },
   text: {
      marginLeft: 10,
      //   padding:5,
      color: '#FEFEFF',
      fontSize: 14,
      fontWeight: 'bold',


   },
   text1:
   {
      marginLeft: -158,
      marginTop: 25,
      color: '#FEFEFF',
      fontSize: 14,
      fontWeight: 'bold',

   },

   text2: {
      marginLeft: -45,
      marginTop: 50,
      color: '#E93030',
      fontSize: 14,
      fontWeight: 'bold',

   },
   Text2: {
      marginLeft: 7,
      marginTop: 110,
      color: '#FEFEFF',
      fontSize: 14,
      fontWeight: 'bold',

   },
   box3: {
      height: 20,
      width: 50,
      backgroundColor: '#72CDA7',
      marginLeft: 30,
      marginTop: 5,
      borderRadius: 5,
      fontSize: 12,
      color: '#0067B4'
   },
   box4: {
      height: 20,
      width: 50,
      backgroundColor: '#E93030',
      marginLeft: 40,
      marginTop: 5,
      borderRadius: 5,
      fontSize: 12,
      color: '#000000'

   },

});


export default OrderHistory;