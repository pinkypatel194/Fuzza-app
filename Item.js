// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const Card = ({ item }) => {
//   return (
//     <View style={styles.card}>
//     <Image style={styles.image} source={{ uri: item.image }} />
//       <Text style={styles.title}>{item.name}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//       <Text style={styles.price}>{item.price}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     padding: 16,
//     margin: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//   },
//   image: {
//     width: '10%',
//     height: 200,
//     marginBottom: 8,
//     borderRadius: 8,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   description: {
//     marginBottom: 4,
//   },
//   price: {
//     fontWeight: 'bold',
//     color: '#333',
//   },
// });

// export default Card;



// function Screen1({ navigation }) {
//   const insets = useSafeAreaInsets();

//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           backgroundColor: '#6a51ae',
//           paddingTop: insets.top,
//           paddingBottom: insets.bottom,
//           paddingLeft: insets.left,
//           paddingRight: insets.right,
//         },
//       ]}
//     >
//       <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
//       <Text style={{ color: '#fff' }}>Light Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Screen2')}
//         color="#fff"
//       />
//     </View>
//   );
// }

// function Screen2({ navigation }) {
//   const insets = useSafeAreaInsets();

//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           backgroundColor: '#ecf0f1',
//           paddingTop: insets.top,
//           paddingBottom: insets.bottom,
//           paddingLeft: insets.left,
//           paddingRight: insets.right,
//         },
//       ]}
//     >
//       <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
//       <Text>Dark Screen</Text>
//       <Button
//         title="Next screen"
//         onPress={() => navigation.navigate('Screen1')}
//       />
//     </View>
//   );
// }










import React  from "react";
import { View,Text,StyleSheet,Image} from "react-native";
import  Buddysofas from "./assets/Buddysofas.jpg";
import sofa from "./assets/sofa.jpg";
import VOLTA from "./assets/VOLTA1.jpg";
import  roundshape from "./assets/roundshape.jpg";
import  shape from "./assets/shape.jpg";
import MidCentury from "./assets/MidCentury3.jpg";
//  import iconbuy  from"./assets/iconbuy.jpg";

const Sofas =()=>{
     return(
         <View style={styles.container}>
          <Text style={styles.Chairs}>Sofas</Text>
          <View style={styles.box} >
                <View  style={styles.box3}>
                    {/* <Text><Image source={icon} style={{width:12,height:12,textAlign:'right',justifyContent:'flex-end',marginLeft:100,marginTop:2}}/></Text> */}
               <Image source={Buddysofas} style={{width:120,height:120,margin:0,padding:10}}/></View>
                   {/* <Text><Image source={iconbuy} style={{width:12,height:12,textAlign:'right',justifyContent:'flex-end',marginRight:10}}/></Text>    */}
                <Text style={styles.Text}>Buddy  sofas</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  5%off   
                 <Text style={styles.Text}>              ★4.5</Text>
                 </Text>
                
              
                
          </View>
          <View style={styles.box2}>
          <View  style={styles.box3}>
          <Image source={sofa} style={{width:150,height:150,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}> sofa</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  2%off
                <Text style={styles.Text}>               ★4.5</Text>
                </Text> 
          </View>
          <View style={styles.box}>
          <View  style={styles.box3}>
          <Image source={VOLTA} style={{width:120,height:120,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>VOLTA Sofas</Text>
                <Text style={styles.Text1}>Dining table</Text>
                <Text style={styles.Text2}>$15  10%off
                <Text style={styles.Text}>               ★4.5</Text>
                </Text> 
          </View>
          <View style={styles.box2}>
          <View  style={styles.box3}>
          <Image source={roundshape} style={{width:120,height:120,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>Modern round shape...</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  5%off
                <Text style={styles.Text}>                 ★4.5</Text>
                </Text> 
          </View>          
          <View style={styles.box}>
          <View style={styles.box3}>
          <Image source={shape} style={{width:120,height:120,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>Sofas</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  2%off
                <Text style={styles.Text}>               ★4.5</Text>
                </Text>   
          </View>
          <View style={styles.box2}>
          <View  style={styles.box3}>
          <Image source={MidCentury} style={{width:120,height:120,margin:0,padding:10}}/>
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