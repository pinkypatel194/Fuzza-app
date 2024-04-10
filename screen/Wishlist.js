import { View,StyleSheet,ScrollView,Image,Text, TouchableOpacity } from "react-native";
import  Wooden from'../assets/Wooden.png';
import Lamp  from'../assets/LampImage.png';
import  Flower  from'../assets/FlowerImage.png';
 import Wish from '../assets/Wish.png';

const Wishlist=()=>{
    return(     
         <View style={style.Color}>
           <Text style={style.continue}>Wishlist</Text>
           <View style={style.box}>
               <View style={{flexDirection:'row'}}>
               <View style={style.box1}>
                  <Image source={Wooden}  style={{height:75,width:70,marginTop:30,marginLeft:15,padding:10}}/>
               </View>

               <Text style={style.text}>Shiny Wooden chair</Text>
                 <Text style={style.text1}>Qty : 1 </Text> 
               <Text style={style.text2}>$130</Text> 
                <TouchableOpacity>
               <Image source={Wish}  style={{height:25,width:25,marginLeft:130,backgroundColor:'#FEFEFF',borderRadius:5}}/>  
               </TouchableOpacity>    
               </View>
           </View>
           <View style={style.box}>
               <View style={{flexDirection:'row'}}>
               <View style={style.box1}>
                  <Image source={Lamp}  style={{height:75,width:70,marginTop:30,marginLeft:15,padding:10}}/>
               </View>
               <Text style={style.text}>Bedroom Lamp</Text>
                 <Text style={style.text1}>Qty : 1 </Text> 
               <Text style={style.text2}>$130</Text> 
               <TouchableOpacity>
               <Image source={Wish}  style={{height:25,width:25,marginLeft:150,backgroundColor:'#FEFEFF',borderRadius:5}}/>
               </TouchableOpacity>      
               </View>
           </View>
           <View style={style.box}>
               <View style={{flexDirection:'row'}}>
               <View style={style.box1}>
               <Image source={ Flower}  style={{height:75,width:70,marginTop:30,marginLeft:15,padding:10}}/>
               </View>
               <Text style={style.text}>Marble Flower Vase</Text>
               <Text style={style.text1}>Qty : 1 </Text>
               <Text style={style.text2}>$50</Text> 
               <TouchableOpacity>
               <Image source={Wish}  style={{height:25,width:25,marginLeft:140,backgroundColor:'#FEFEFF',borderRadius:5}}/>
               </TouchableOpacity>
               </View>
           </View>
          </View>
            
)
}
const style=StyleSheet.create({
   continue:{
       marginTop:20,
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
         height:150,
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
       //   padding:5,
          color:'#FEFEFF',
          fontSize:14,
          fontWeight:'bold',
        
         
   },
   text1:
   {
       marginLeft:-60,
       marginTop:25,
          color:'#FEFEFF',
          fontSize:14,
          fontWeight:'bold',
        
   },
   text2:{
       marginLeft:-90,
       marginTop:50,
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
    navigator:{
          height:71,
          width:100, 
          fontSize:20,
          color:'#FEFEFF',
          marginLeft:10,
    },
    font:{
     
           color:'#FEFEFF',
           marginLeft:10,
   
    },
     Button:{
       //  padding:5,
       backgroundColor:'#FEFEFF',
       alignSelf:'flex-end',
       fontSize:12
     },
      
        click:{
             marginRight:-200,
             backgroundColor:"#FEFEFF",
             height:100,
             width:150,
             textAlign:'center',
             borderRadius:6
        }
   
      
})
export default Wishlist; 