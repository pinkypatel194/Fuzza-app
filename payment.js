import  React from "react";
import { View,Text,StyleSheet, ScrollView,Image} from "react-native";
import mastor from './assets/sofa2.png';
import vise from './assets/sofa3.png';
import apple from './assets/sofa4.png';
import Google from './assets/sofa5.png'
import cash from './assets/sofa6.png'
const  Payment=()=>{
     return(
           <View style={style.Color}>
         
            <Text style={style.Details}>Payment</Text>
            <Text  style={style.card}> Your Card</Text>
            <View  style={style.box}>
                <View  style={{flexDirection:'row'}}>
                    <Image source={mastor}  style={{width:30,height:30,marginLeft:10,marginTop:10}}/>
                       
                 <View>
              <Text style={style.Text}>Mastorcard*** ***4589b          ⬤ </Text>  
              <Text style={style.Text1}>Expires on 16/24</Text>
                
              </View>
            </View>
              <View  style={style.box1}>
                <View  style={{flexDirection:'row'}}>
                    <Image source={vise}  style={{width:30,height:30,marginLeft:10,marginTop:10}}/>       
                 <View>
              <Text style={style.Text}>Visa  *** *** 4589          ⬤ </Text>  
              <Text style={style.Text1}>Expires on 16/24</Text>     
              </View>
            </View>
          </View>
          </View>
           <Text style={style.add}>+Add New Card</Text>
           <Text style={style.add1}>Wallet</Text>
           <View style={style.box2}>
           <View  style={{flexDirection:'row'}}>
                    <Image source={vise}  style={{width:31,height:31,marginLeft:10,marginTop:10}}/>       
                 <View>
              <Text style={style.Text}>Pay Pal    ⬤ </Text>  
              </View>
            </View>
            <Text style={style.border}></Text>
            
           <View  style={{flexDirection:'row'}}>
                    <Image source={apple}  style={{width:30,height:30,marginLeft:10,marginTop:10}}/>       
                 <View>
              <Text style={style.Text}>Apple pay ⬤ </Text>  
              </View>
            </View>
            <Text style={style.border}></Text>
            <View  style={{flexDirection:'row'}}>
                    <Image source={Google}  style={{width:30,height:30,marginLeft:10,marginTop:10}}/>       
                 <View>
              <Text style={style.Text}>Google pay     ⬤</Text>  
              </View>
            </View>
            <Text style={style.border}></Text>
            <View  style={{flexDirection:'row'}}>
                    <Image source={cash}  style={{width:30,height:30,marginLeft:10,marginTop:10}}/>       
                 <View>
              <Text style={style.Text}>Cash on Delivery       ⬤</Text>  
              </View>
            </View>
          </View>
           <View style={{flexDirection:'row'}}>
            <View>
             <Text style={style.Text2}>Total price</Text>
             <Text style={style.Text3}>$324.00</Text>
             <View  style={style.box3}>
                <Text style={style.Text4}>pay Now</Text>
             </View>
          </View>
          </View>
          </View>
         
 
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
        height:51,
        width:335,
        marginTop:20,
        fontSize:15,
        fontWeight:'bold',
        borderRadius:5,
    },
    box1:{
        borderWidth:2,
        borderColor:'#EFEFFF',
    //    marginLeft:,
       height:51,
       width:335,
       marginTop:20,
       fontSize:15,
       fontWeight:'bold',
       borderRadius:5,
   },
    Text:{
        color:'#FEFEFF',
        marginLeft:40,
        marginTop:7,
        fontWeight:'bold',
     },
     Text1:{
        color:'#FEFEFF',
        marginLeft:40,
        fontSize:10,
     },
     add:{
       color:'#FEFEFF',
          marginTop:70,
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
        marginTop:120
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
         marginLeft:210,
         borderRadius:10

     },
     Text4:{
        color:'#000000',
        marginLeft:12,
        fontWeight:'bold',
        marginTop:10,
     },
   
});
export default Payment;