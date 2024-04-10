import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Economy from "../assets/Economy.png";
import Regular from "../assets/Regular.png";
import Cargo from "../assets/Cargo.png";
import Express from "../assets/Express.png";

const ChooseShipping = ({ navigation }) => {
  return (
    <View style={style.Color}>
      <View >
        <Text style={style.ChooseShipping}>Choose Shipping</Text>
        <View style={style.box}>
          <View style={{ flexDirection: 'row' }}>
              <Image source={Economy} style={{ height: 40, width: 40, backgroundColor: '#FEFEFF', marginTop: 5, marginLeft: 15, borderRadius: 20 }} />
            <View>
              <Text style={style.Text}>Economy                                     $10⬤ </Text>
              <Text style={style.Text1}>Estimated Arrival, Mar 20-23</Text>
            </View>
          </View>
        </View>
        <View style={style.box}>
          <View style={{ flexDirection: 'row' }}>
              <Image source={Regular} style={{ height: 40, width: 40, backgroundColor: '#FEFEFF', marginTop: 5, marginLeft: 15, borderRadius: 20 }} />
            <View>
              <Text style={style.Text}> Regular                                       $15⬤ </Text>
              <Text style={style.Text1}>Estimated Arrival, Mar 20-23</Text>
            </View>
          </View>
        </View>
        <View style={style.box}>
          <View style={{ flexDirection: 'row' }}>
              <Image source={Cargo} style={{ height: 40, width: 40, backgroundColor: '#FEFEFF', marginTop: 5, marginLeft: 15, borderRadius: 20 }} />
            <View>
              <Text style={style.Text}>Cargo                                             $20⬤ </Text>
              <Text style={style.Text1}>Estimated Arrival, Mar 20-23</Text>
            </View>
          </View>
        </View>
        <View style={style.box}>
          <View style={{ flexDirection: 'row' }}>
              <Image source={Express} style={{ height: 40, width: 40, backgroundColor: '#FEFEFF', marginTop: 5, marginLeft: 15, borderRadius: 20 }} />
            <View>
              <Text style={style.Text}>Express                                           $20⬤</Text>
              <Text style={style.Text1}>Estimated Arrival, Mar 20-23            </Text>
              <View style={style.box1}>
              <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
                  <Text style={style.Text2}>Apply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  ChooseShipping: {
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
  box: {
    backgroundColor: '#122636',
    marginLeft: 10,
    height: 51,
    width: 335,
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 5
  },
  box1: {
    backgroundColor: '#FEFEFF',
    height: 51,
    marginLeft: -55,

    width: 335,
    marginTop: 50,
    fontSize: 15,
    fontWeight: 'bold',
    borderRadius: 10
  },
  Text2: {
    color: '#000000',
    marginLeft: 150,
    marginTop: 10,
    fontWeight: 'bold',
  },
  Text: {
    color: '#FEFEFF',
    marginLeft: 40,
    marginTop: 7,
    fontWeight: 'bold',
  },
  Text1: {
    color: '#FEFEFF',
    marginLeft: 40,
    fontSize: 10
  },
})

export default ChooseShipping;    