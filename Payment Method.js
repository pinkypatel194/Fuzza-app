import  React,{useState} from "react";
import { View,Text,StyleSheet, ScrollView,Image,TouchableOpacity} from "react-native";
import mastor from './assets/mastor.png';  
import vise from './assets/vlse.png'; 
import PayPal  from './assets/pay pal.png'
import apple from './assets/apple.png';
import Google from './assets/Google.png';
import cash from './assets/cash.png';
import { RadioButton } from 'react-native-paper'; 
import { useNavigation } from "@react-navigation/native";
const  Payment=({route})=>{
    const{Card} =route.params ??{};
const [selectedValue, setSelectedValue] = useState('option1')
const [selectedValue1, setSelectedValue1] = useState('option2')
 const navigation=useNavigation()
const handlepaynow=()=>{
             navigation.navigate('paymentsuccessfully')
}
 const handleAddNewCard=()=>{
              navigation.navigate('Add New Card')
 }
     return(
      <ScrollView>
        <View style={style.Color}>
      
            <Text style={style.Details}>Payment</Text>
            <Text  style={style.card}> Your Card</Text>
            <View  style={style.box}>
                <View  style={{flexDirection:'row'}}>
                    <Image source={mastor}  style={{width:30,height:30,marginLeft:10,marginTop:10}}/>
                       
                 <View >
                  <View style={{flexDirection:'row'}}>
              <Text style={style.Text}>Mastorcard*** ***4589b  </Text>  
              <View style={style.round}>
              <RadioButton.Android 
						value="option1"
						status={selectedValue === 'option1' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option1')} 
						color="#007BFF"
					/> 
                    </View>
              </View>
              <Text style={style.Text1}>Expires on 16/24</Text>
                
              </View>
            </View>
              <View  style={style.box1}>
                <View  style={{flexDirection:'row'}}>
                    <Image source={vise}  style={{width:30,height:30,marginLeft:10,marginTop:10}}/>
                    <View>       
                 <View  style={{flexDirection:"row"}}>
              <Text style={style.Text}>Visa  *** *** 4589   </Text> 
              <View style={style.visaround}>
              <RadioButton.Android 
						value="option2"
						status={selectedValue === 'option3' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option3')} 
						color="#007BFF"
					/> 
                    </View>
               </View> 
              <Text style={style.Text1}>Expires on 16/24</Text>     
              </View>
              <View style=  {{borderWidth:2,  borderColor:'#EFEFFF',height:65, width:335, marginTop:20, fontSize:15, fontWeight:'bold', borderRadius:5,}}>
                <Text style={{color:'#FEFEFF',marginLeft:20,marginTop:10}}>Card Number:{Card?.CardNumber}</Text>
                <Text style={{color:'#FEFEFF',marginLeft:20,marginTop:10}}>CVV:{Card?.CVV}</Text>
              </View>
            </View>
          </View>
          </View>
          <TouchableOpacity  onPress={handleAddNewCard}>
           <Text style={style.add}>+Add New Card</Text>
           </TouchableOpacity>

           <Text style={style.add1}>Wallet</Text>
           <View style={style.box2}>
           <View  style={{flexDirection:'row'}}>
                    <Image source={PayPal}  style={{width:31,height:31,marginLeft:10,marginTop:10}}/>       
                 <View>
                  <View style={{flexDirection:'row'}}>
              <Text style={style.Text}>Pay Pal </Text> 
              <View style={style.round4}>
              <RadioButton.Android 
						value="option1"
						status={selectedValue1 === 'option1' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue1('option1')} 
						color="#007BFF"
					/> 
                    </View>
              <Text style={style.round1}></Text>
              </View>
              </View>
            </View>
            <Text style={style.border}></Text>
            
           <View  style={{flexDirection:'row'}}>
                    <Image source={apple}  style={{width:30,height:30,marginLeft:10,marginTop:10}}/>       
                 <View>
                 <View style={{flexDirection:'row'}}>
              <Text style={style.Text}>Apple pay</Text> 
              <View style={style.round2}>
              <RadioButton.Android 
						value="option1"
						status={selectedValue1 === 'option2' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue1('option2')} 
						color="#007BFF"
					/> 
                    </View> 
              <Text style={style.round1}></Text>
              </View>
              </View>
            </View>
            <Text style={style.border}></Text>
            <View  style={{flexDirection:'row'}}>
                    <Image source={Google}  style={{width:30,height:30,marginLeft:10,marginTop:10}}/>       
                 <View>
                 <View style={{flexDirection:'row'}}>
              <Text style={style.Text}>Google pay</Text> 
              <View style={style.round3}>
              <RadioButton.Android 
						value="option1"
						status={selectedValue1 === 'option3' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue1('option3')} 
						color="#007BFF"
					/> 
                    </View>
              </View> 
              </View>
            </View>
            <Text style={style.border}></Text>
            <View  style={{flexDirection:'row'}}>
                    <Image source={cash}  style={{width:30,height:30,marginLeft:10,marginTop:10}}/>       
                 <View>
                 <View style={{flexDirection:'row'}}>
              <Text style={style.Text}>Cash on Delivery</Text>  
              <View style={style.visaround}>
              <RadioButton.Android 
						value="option1"
						status={selectedValue1 === 'option4' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue1('option4')} 
						color="#007BFF"
					/> 
                    </View>
              </View>
              </View>
            </View>
          </View>  
          <View style={{flexDirection:'row'}}>
                 
                  <TouchableOpacity>
                        <Text style={style.text2}>Total price</Text>
                        <Text style={style.price}> $324.00</Text>
                </TouchableOpacity>
                  <View style={style.box5}>
                    <TouchableOpacity onPress={handlepaynow}> 
                        <Text style={style.text3}>Pay Now</Text>
                </TouchableOpacity>
                  </View>
              </View> 
       </View>
       </ScrollView>
    )
}
const style=StyleSheet.create({
    Details:{
         marginLeft:140,
         marginTop:30,
         color:'#FEFEFF',
         fontWeight:'bold',
         fontSize:15,
    },
    Color:{
      backgroundColor:'#07141F',
         flex:1,
       },
    card:{
        marginLeft:20,
        marginTop:30,
        color:'#FEFEFF',
        fontWeight:'bold',
        fontSize:15,       
    },
    box:{
         borderWidth:2,
         borderColor:'#EFEFFF',
        marginLeft:15,
        height:65,
        width:335,
        marginTop:20,
        fontSize:15,
        fontWeight:'bold',
        borderRadius:5,
    },
    box1:{
        borderWidth:2,
        borderColor:'#EFEFFF',
       height:65,
       width:335,
       marginTop:20,
       fontSize:15,
       fontWeight:'bold',
       borderRadius:5,
   },
  
    Text:{
        color:'#FEFEFF',
        marginLeft:40,
        marginTop:10,
        fontWeight:'bold',
     },
     Text1:{
        color:'#FEFEFF',
        marginLeft:40,
        fontSize:10,
        marginTop:-2
     },
     add:{
       color:'#FEFEFF',
          marginTop:90,
         marginLeft:230,
     },
     add1:{
         color:'#FEFEFF',
          marginTop:40,
         marginLeft:20,
         fontWeight:'bold',
     },
     box2:{
          borderWidth:2,
          height:250,
          width:320,
          marginLeft:20,
          borderColor:'#FEFEFF',
           borderRadius:8
     } ,
     border:{
        borderBottomWidth:2,
        borderColor:'#FEFEFF',
        
        
     } ,
     Text2:{
        color:'#FEFEFF',
        marginLeft:20,
        fontSize:10,
        marginTop:150
     },
     Text3:{
        color:'#FEFEFF',
        marginLeft:20,
    
        fontWeight:'bold',

     },
     box3:{
         height:50,
         width:102,
         backgroundColor:'#FEFEFF',
         marginLeft:150,
         borderRadius:10

     },
     Text4:{
        color:'#000000',
        marginLeft:15,
        fontWeight:'bold',
        marginTop:10,
     },    
     visaround:{
        marginLeft:90,
         marginTop:10
  } ,
     round:{
           marginLeft:50,
            marginTop:10
     } ,

     round1:{
      marginLeft:10,
       marginTop:20
     },
     round3:{
        marginLeft:125,
         marginTop:5
       },
     round2:{
      marginLeft:135,
       marginTop:5
     },
     round4:{
        marginLeft:143,
         marginTop:5
       },
       box4:{
       
            height:50,
            width:150,
            marginTop:40,
            marginLeft:20,
            backgroundColor:'#122636',
            borderRadius:5
        },
        box5:{
            height:50,
            width:150,
            marginLeft:80,
            marginTop:90,
            backgroundColor:'#FFFFFF',
            borderRadius:5
        },
        text2:{
            color:'#D9D9D9',
            marginTop:15,
            marginLeft:30,
            marginTop:90,
            fontSize:18
        },
        price:{
            color:'#D9D9D9',
            marginTop:5,
            marginLeft:30,
            fontSize:18,
            fontWeight:'bold'
        },
        text3:{
            color:'#000000',
            marginTop:7,
            textAlign:'center'
        }
    
   
});
export default Payment;