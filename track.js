import React from "react";
import { View, StyleSheet ,Image,Text, ScrollView, TouchableOpacity} from "react-native";
import back from './assets/back 1.png'
import right from './assets/check1.png'
import shippingtime from './assets/shipping-time.png'
import deliverycar from './assets/delivery-car.png'
import gift from './assets/gift.png'
import line from './assets/line.png'
import line1 from './assets/line1.png'
const Trackorder = () => {
  return (
    <View style={styles.con}>
      <ScrollView>
        <View style={{flexDirection:'row'}}>
            <Image source={back} style={{height:25,width:25,marginTop:30,marginLeft:20}}/>
            <Text style={styles.hadding}>Order Tracker</Text>
        </View>
        <Text style={styles.date}>01 Dec, 2022</Text>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.ID}>Order ID : #1245035000</Text>
            <Text style={styles.price}>Amount :$112</Text>
        </View>
        <View style={styles.box1}>
                      <Text style={styles.text}>Order Journey</Text>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.box}>
                        </Text>
                        <Image source={right} style={styles.right}/>
                        <Text style={styles.text1}>Order Information Received</Text>
                        <Text style={styles.text2}>5:30 pm l 25 Nov, 2022</Text>
                        <Image source={line} style={styles.line}/>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.box2}>
                        </Text>
                        <Image source={right} style={styles.right2}/>
                        <Text style={styles.text3}>The Parcel is being collected</Text>
                        <Text style={styles.text4}>8:00 am l 28 Nov, 2022</Text>
                        <Image source={line} style={styles.line2}/>
                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.box3}>
                        </Text>
                        <Image source={shippingtime} style={styles.right3}/>
                        <Text style={styles.text5}>Ready to be Send</Text>
                        <Text style={styles.text6}>9:45 am l 29 Nov, 2022</Text>
                        <Image source={line} style={styles.line3}/>

                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.box4}>
                        </Text>
                        <Image source={deliverycar} style={styles.right4}/>
                        <Text style={styles.text7}>Dispatch in Local Wear House</Text>
                        <Text style={styles.text8}>2:20 pm l 30 Nov, 2022</Text>
                        <Image source={line} style={styles.line4}/>

                      </View>
                      <View style={{flexDirection:'row'}}>
                        <Text style={styles.box4}>
                        </Text>
                        <Image source={gift} style={styles.right4}/>
                        <Text style={styles.text5}>Parcel Delivered</Text>
                        <Text style={styles.text6}>5:30 pm l 01 Dec, 2022</Text>
                      </View>
        </View>
        <View style={styles.secbox}>
                 <View style={{flexDirection:'row'}}>
                  <Text style={styles.total}>Sub Total</Text>
                  <Text style={styles.finalprice}>$210</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
                  <Text style={styles.total2}>Shipping charge</Text>
                  <Text style={styles.finalprice2}>$20.00</Text>
                 </View>
                 <View style={{flexDirection:'row'}}>
                  <Text style={styles.total3}>Discount (10%)</Text>
                  <Text style={styles.finalprice3}>$0.00</Text>
                 </View>
                 <Image source={line1} style={{width:320,marginTop:10}}/>
                 <View style={{flexDirection:'row'}}>
                  <Text style={styles.total3}>Grand Total</Text>
                  <Text style={styles.finalprice4}>$230</Text>
                 </View>
        </View>
        <TouchableOpacity>
          <View style={styles.button} >
               <Text>Continue Shopping</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: '#07141F'
  },
  hadding:{
    color:'#F5FCFF',
    marginTop:35,
    marginLeft:90,
    fontWeight:'bold',
    fontSize:15
  },
  date:{
         color:'#F5FCFF',
         marginTop:30,
         marginLeft:20
  },ID:{
        color:'#F5FCFF',
         marginTop:10,
         marginLeft:20
  },
  price:{
        color:'#F5FCFF',
         marginTop:10,
         marginLeft:75
  },
  box1:{
    height:450,
    width:320,
    backgroundColor:'#122636',
    marginLeft:20,
    marginTop:40,
    borderRadius:10
  },
  text:{
         color:'#F5FCFF',
         marginTop:10,
         marginLeft:20
  },
  box:{
    borderWidth:2,
    height:50,
    width:50,
    borderRadius:50,
    marginTop:20,
    marginLeft:20,
   borderColor:'#32404C',
   backgroundColor:'#23201E',
   textAlign:'center',
   padding:20
  },
  text1:{
    color:'#FFFFFF',
         marginTop:30,
         marginLeft:40,
         fontSize:11
  },
  text2:{
    color:'#FFFFFF',
    marginTop:50,
    marginLeft:-130,
    fontSize:11
  },
  text3:{
    color:'#FFFFFF',
    marginTop:15,
    marginLeft:40,
    fontSize:11
  },
  text4:{
    color:'#FFFFFF',
    marginTop:35,
    marginLeft:-140,
    fontSize:11
  },
  text5:{
    color:'#FFFFFF',
    marginTop:10,
    marginLeft:40,
    fontSize:11
  },
  text6:{
    color:'#FFFFFF',
    marginTop:30,
    marginLeft:-85,
    fontSize:11
  },
  text7:{
    color:'#FFFFFF',
    marginTop:12,
    marginLeft:40,
    fontSize:11
  },
  text8:{
    color:'#FFFFFF',
    marginTop:30,
    marginLeft:-145,
    fontSize:11
  },
  right:{
    marginTop:30,
    marginLeft:-40,
    height:30,
    width:30
  },
  line:{
      height:30,
      marginTop:70,marginLeft:-170
  },
  line2:{
    height:30,
    marginTop:50,marginLeft:-165
},
line3:{
  height:30,
  marginTop:50,marginLeft:-165
},
line4:{
  height:30,
  marginTop:50,marginLeft:-165
},
  box2:{
      borderWidth:2,
      height:50,
      width:50,
      borderRadius:50,
      marginTop:0,
      marginLeft:20,
     borderColor:'#32404C',
     backgroundColor:'#23201E',
     textAlign:'center',
     padding:20
  },
  right2:{
    marginTop:10,
    marginLeft:-40,
    height:30,
    width:30
  },
  box3:{
    borderWidth:2,
    height:50,
    width:50,
    borderRadius:50,
    marginTop:0,
    marginLeft:20,
   borderColor:'#32404C',
   backgroundColor:'#23201E',
   textAlign:'center',
   padding:20
},
right3:{
  marginTop:10,
  marginLeft:-40,
  height:30,
  width:30
},
box4:{
  borderWidth:2,
  height:50,
  width:50,
  borderRadius:50,
  marginTop:0,
  marginLeft:20,
 borderColor:'#32404C',
 backgroundColor:'#23201E',
 textAlign:'center',
 padding:20
},
right4:{
marginTop:10,
marginLeft:-40,
height:30,
width:30
},

secbox:{
  height:200,
  width:320,
  backgroundColor:'#122636',
  marginLeft:20,
  marginTop:40,
  borderRadius:10
},
total:{
  color:'#FFFFFF',
  marginTop:20,
  marginLeft:20,
  fontSize:15
},
finalprice:{
  color:'#FFFFFF',
  marginTop:20,
  marginLeft:180,
  fontSize:15
},
total2:{
  color:'#FFFFFF',
  marginTop:20,
  marginLeft:20,
  fontSize:15
},
finalprice2:{
  color:'#FFFFFF',
  marginTop:20,
  marginLeft:135,
  fontSize:15
},
total3:{
  color:'#FFFFFF',
  marginTop:20,
  marginLeft:20,
  fontSize:15
},
finalprice3:{
  color:'#FFFFFF',
  marginTop:20,
  marginLeft:140,
  fontSize:15
},
finalprice4:{
  color:'#FFFFFF',
  marginTop:20,
  marginLeft:165,
  fontSize:15
},
button:{
  height:50,
  width:320,
  backgroundColor:'#FFFFFF',
  marginLeft:20,
  marginTop:40,
  borderRadius:10,
  paddingLeft:100,
  paddingTop:15
}
});

export default Trackorder;
