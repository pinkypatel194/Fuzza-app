import  React from "react";
import { View,Text,Image,StyleSheet} from "react-native";
// import {profile}from "./assets/pro.jpg";

const  Menu =()=>{
          return(
             <View style={style.Color}>
                 <View style={{flexDirection:'row'}}>
                 {/* <Image  source={profile} style={{marginLeft:10,marginTop:50,}}/> */}
                <Text style={style.profile}>● Hello,Pinky!</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                 <Text style={style.RTL}>RTL</Text>
                 <Text style={style.Button}>  </Text>
                 </View>
                 <Text style={style.line}></Text>
                 <View style={{flexDirection:'row'}}>
                 <Text style={style.RTL}>DARK</Text>
                 <Text style={style.Button1}>  </Text>
                 </View>
                 <View>
                 <Text style={style.line}></Text>
                 <Text style={style.RTL}>Pages List</Text>
                 </View>
                
                 <View>
                 <Text style={style.line}></Text>
                 <Text style={style.RTL}>Setting</Text>
                 </View>
                 <Text style={style.line}></Text>  
                 <View>
                 
                 <Text style={style.RTL}>Logout</Text>
                 </View>
                 <Text style={style.line}></Text>
              </View>
              
             

          )
}
const style=StyleSheet.create({
    profile:{
         marginLeft:50,
         marginTop:50,
         color:'#FEFEFF',
         fontWeight:'bold',
         fontSize:15,
    },
    Color:{
      backgroundColor:'#07141F',
         flex:1,
       },
      RTL:{
         marginLeft:50,
         marginTop:50,
         fontSize:15,
         fontWeight:'bold',
         color:'#FEFEFF'

      },
      line:{
         borderBottomWidth:2,
         borderColor:'#FEFEFF'
      },
      Button:{
         marginLeft:180,
         backgroundColor:'#FEFEFF',
         borderRadius:20,
         height:33,
         width:61,
         marginTop:50,
      },
      Button1:{
        marginLeft:180,
        backgroundColor:'#686868',
        borderRadius:20,
        height:33,
        width:61,
        marginTop:50,
     }
})

export default Menu;