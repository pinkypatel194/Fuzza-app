import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Buddysofas from "../assets/sofa3.png";
import sofa from "../assets/sofa4.png";
import VOLTA from "../assets/sofa5.png";
import roundshape from "../assets/sofa6.png";
import shape from "../assets/sofa7.png";
import MidCentury from '../assets/sofa8.png'

const Sofas = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.Chairs}>Sofas</Text>
               <View style={styles.box} >
                    <View style={styles.box3}>
                         <Image source={Buddysofas} style={{ width: 120, height: 120, margin: 0, padding: 10 }} /></View>
                    <Text style={styles.Text}>Buddy  sofas</Text>
                    <Text style={styles.Text1}>Modern saddle arms</Text>
                    <Text style={styles.Text2}>$15  5%off
                         <Text style={styles.Text}>              ★4.5</Text>
                    </Text>
               </View>
               <View style={styles.box2}>
                    <View style={styles.box3}>
                         <Image source={sofa} style={{ width: 150, height: 150, margin: 0, padding: 10 }} />
                    </View>
                    <Text style={styles.Text}> sofa</Text>
                    <Text style={styles.Text1}>Modern saddle arms</Text>
                    <Text style={styles.Text2}>$15  2%off
                         <Text style={styles.Text}>               ★4.5</Text>
                    </Text>
               </View>
               <View style={styles.box}>
                    <View style={styles.box3}>
                         <Image source={VOLTA} style={{ width: 120, height: 120, margin: 0, padding: 10 }} />
                    </View>
                    <Text style={styles.Text}>VOLTA Sofas</Text>
                    <Text style={styles.Text1}>Dining table</Text>
                    <Text style={styles.Text2}>$15  10%off
                         <Text style={styles.Text}>               ★4.5</Text>
                    </Text>
               </View>
               <View style={styles.box2}>
                    <View style={styles.box3}>
                         <Image source={roundshape} style={{ width: 120, height: 120, margin: 0, padding: 10 }} />
                    </View>
                    <Text style={styles.Text}>Modern round shape...</Text>
                    <Text style={styles.Text1}>Modern saddle arms</Text>
                    <Text style={styles.Text2}>$15  5%off
                         <Text style={styles.Text}>                 ★4.5</Text>
                    </Text>
               </View>
               <View style={styles.box}>
                    <View style={styles.box3}>
                         <Image source={shape} style={{ width: 120, height: 120, margin: 0, padding: 10 }} />
                    </View>
                    <Text style={styles.Text}>Sofas</Text>
                    <Text style={styles.Text1}>Modern saddle arms</Text>
                    <Text style={styles.Text2}>$15  2%off
                         <Text style={styles.Text}>               ★4.5</Text>
                    </Text>
               </View>
               <View style={styles.box2}>
                    <View style={styles.box3}>
                         <Image source={MidCentury} style={{ width: 120, height: 120, margin: 0, padding: 10 }} />
                    </View>
                    <Text style={styles.Text}>Mid-Century</Text>
                    <Text style={styles.Text1}>Modern saddle arms</Text>
                    <Text style={styles.Text2}>$15  5%off
                         <Text style={styles.Text}>               ★4.5</Text>
                    </Text>
               </View>
          </View>
     )
}
const styles = StyleSheet.create({
     Chairs: {
          color: 'white',
          fontSize: 18,
          padding: 15,
          marginTop: 10,
          marginLeft: 140,
     },
     container: {
          backgroundColor: '#07141F',
     },
     box: {
          marginTop: 10,
          width: 155,
          height: 216,
          backgroundColor: '#122636',
          margin: 0,
          borderRadius: 10,
          marginLeft: 7,
          borderColor: '#707070'
     },
     box2: {
          marginTop: -215,
          marginRight: 20,
          marginLeft: 180,
          width: 165,
          height: 216,
          backgroundColor: '#122636',
          margin: 0,
          borderRadius: 10,
          borderColor: '#707070',
     },
     Text: {
          color: '#FEFEFF',
          fontSize: 12,
          padding: 10,
          fontWeight: 'bold',
     },
     Text1: {
          color: '#FEFEFF',
          fontSize: 10,
          marginLeft: 10,
     },
     price: {
          color: '#FEFEFF',
          fontSize: 12,
          marginLeft: 7,
          fontWeight: 'bold',
          padding: 7,
     },
     box3: {
          width: 135,
          height: 135,
          backgroundColor: '#1F303E',
          padding: 10,
          marginLeft: 15,
          marginTop: 10,
          borderRadius: 5,
     },
     Text: {
          fontSize: 12,
          marginLeft: 15,
          fontWeight: 'bold',
          color: '#FEFEFF',
          marginTop: 5,
     },
     Text1: {
          fontSize: 10,
          marginLeft: 10,
          color: '#FEFEFF',
          padding: 5,
     },
     Text2: {
          fontSize: 12,
          marginLeft: 10,
          fontWeight: 'bold',
          color: '#FEFEFF',
     },
     Text4: {
          fontSize: 12,
          fontWeight: 'bold',
          color: '#FEFEFF',
          textAlign: 'right',
          justifyContent: 'right',
     }
})

export default Sofas;