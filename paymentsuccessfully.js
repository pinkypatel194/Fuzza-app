import React, { useRef } from "react";
import { View, Text, StyleSheet, Animated, TouchableOpacity ,Image} from "react-native";
import success from './assets/success.gif'
const Cards = ({navigation}) => {

  const translateY = useRef(new Animated.Value(-400)).current;

  const animateDropdown = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000, 
      useNativeDriver: true
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={animateDropdown}>
       <View style={styles.box6}><Text style={{textAlign:'center',marginTop:10}}>
           show bil
        </Text></View>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.backpage,
          {
            transform: [{ translateY: translateY }]
          }
        ]}
      >
        <View style={styles.round}>
        <Image  source={success} style={styles.round}/>
        </View>
        <Text style={styles.text}>Your order is accepted. Your items are on the way and should arrive shortly</Text>
        <View style={styles.box1}>
          <Text style={styles.text2}>Track Order Now</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={()=>navigation.navigate('home1')}>
          <Text style={styles.text3}>Continue Shopping</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#07141F',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backpage: {
    position: 'absolute',
    height: 450,
    width: 300,
    borderWidth: 2,
    marginLeft: 30,
    marginTop: 170,
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  },
  box6: {
    height: 40,
    width: 100,
    marginLeft: 25,
    marginTop:700,
    backgroundColor: '#F5FCFF',
    borderRadius: 5
  },
  round:{
    marginLeft:10,
    marginTop:5
  },
  text: {
    marginLeft: 15,
    marginTop: 0,
    color: '#000000',
    fontSize: 12,
  },
  box1: {
    height: 42,
    width: 250,
    marginLeft: 25,
    marginTop: 10,
    backgroundColor: '#F5FCFF',
    borderRadius: 5
  },
  text2: {
    marginLeft: 60,
    marginTop: 10,
    color: '#000000',
    fontSize: 15
  },
  box: {
    height: 42,
    width: 250,
    marginLeft: 25,
    marginTop: 10,
    backgroundColor: '#122636',
    borderRadius: 5
  },
  text3: {
    marginLeft: 60,
    marginTop: 10,
    color: '#F5FCFF',
  },
});
export default Cards;