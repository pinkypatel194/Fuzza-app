import React  from "react";
import { View,Text,StyleSheet,Image} from "react-native";
import  CupboardImage from "./assets/CupboardImage.png";
import    Cupboardi from "./assets/Cupboard.png";
import  Cupboard1 from "./assets/Cupboard1.png";
import Cupboard2  from "./assets/Cupboard2.png";
import  Cupboard3 from "./assets/Cupboard3.png";
import  Cupboard4 from "./assets/Cupboard4.png";


const Cupboard =()=>{ 
     return(
         <View style={styles.container}>
          <Text style={styles.Cupboard}>Cupboard</Text>
          <View style={styles.box} >
                <View  style={styles.box3}>
                    {/* <Text><Image source={icon} style={{width:12,height:12,textAlign:'right',justifyContent:'flex-end',marginLeft:100,marginTop:2}}/></Text> */}
               <Image source={CupboardImage} style={{width:120,height:120,margin:0,padding:10}}/></View>
                   {/* <Text><Image source={iconbuy} style={{width:12,height:12,textAlign:'right',justifyContent:'flex-end',marginRight:10}}/></Text>    */}
                <Text style={styles.Text}>Buddy  Cupboard</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  5%off   
                 <Text style={styles.Text}>              ★4.5</Text>
                 </Text>
                
              
                
          </View>
          <View style={styles.box2}>
          <View  style={styles.box3}>
          <Image source={Cupboardi} style={{width:150,height:150,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>Cupboard</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  2%off
                <Text style={styles.Text}>               ★4.5</Text>
                </Text> 
          </View>
          <View style={styles.box}>
          <View  style={styles.box3}>
          <Image source={Cupboard1} style={{width:120,height:120,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>VOLTA Cupboard</Text>
                <Text style={styles.Text1}>Dining table</Text>
                <Text style={styles.Text2}>$15  10%off
                <Text style={styles.Text}>               ★4.5</Text>
                </Text> 
          </View>
          <View style={styles.box2}>
          <View  style={styles.box3}>
          <Image source={Cupboard2} style={{width:120,height:120,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>Modern round shape...</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  5%off
                <Text style={styles.Text}>                 ★4.5</Text>
                </Text> 
          </View>          
          <View style={styles.box}>
          <View style={styles.box3}>
          <Image source={Cupboard3} style={{width:120,height:120,margin:0,padding:10}}/>
          </View>
                <Text style={styles.Text}>Cupboard</Text>
                <Text style={styles.Text1}>Modern saddle arms</Text>
                <Text style={styles.Text2}>$15  2%off
                <Text style={styles.Text}>               ★4.5</Text>
                </Text>   
          </View>
          <View style={styles.box2}>
          <View  style={styles.box3}>
          <Image source={Cupboard4} style={{width:120,height:120,margin:0,padding:10}}/>
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
     Cupboard:{
       color :'white',
       fontSize:15,      
       padding:15,
       marginTop:20,
       marginLeft:140,
     },
     container:{
          // margin:5,
          backgroundColor:'#07141F',
     },
     box:{
          marginTop:10,
          width:165,
          height:216,
          backgroundColor:'#122636',
          margin:0,
          borderRadius:10,
          marginLeft:7,
          borderColor:'#707070'
     },
     box2:{
          
          marginTop:-215,
          marginRight:20,
          marginLeft:180,
          width:165,
          height:216,
          backgroundColor:'#122636',
          margin:0,
          borderRadius:10,
          borderColor:'#707070',
     },

    Text:{
           color:'#FEFEFF',
           fontSize:12,
           padding:10,
           fontWeight:'bold',
    },
    Text1:{
         color:'#FEFEFF',
         fontSize:10,
        marginLeft:10,

         
    } ,
    price:{
        color:'#FEFEFF',
        fontSize:12,
       marginLeft:7,
       fontWeight:'bold',
       padding:7,
        
   } ,
   box3:{
       width:135,
       height:135,
       backgroundColor:'#1F303E',
       padding:10,
       marginLeft:15,
       marginTop:10,
       borderRadius:5,
   },
   Text:{
       fontSize:12,
        marginLeft:15,
        fontWeight:'bold',
        color:'#FEFEFF',
        marginTop:5,

   },
   Text1:{
     fontSize:10,
      marginLeft:10,
      color:'#FEFEFF',
      padding:5,

 },
  
 Text2:{
     fontSize:12,
      marginLeft:10,
      fontWeight:'bold',
      color:'#FEFEFF',

 },
 Text4:{
    fontSize:12,
    fontWeight:'bold',
    color:'#FEFEFF',
    
    textAlign:'right',
    justifyContent:'right',

 }

})

  
export default Cupboard;