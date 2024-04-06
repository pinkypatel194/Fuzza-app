import  React, { useState } from "react";
import { View,Text,Image,StyleSheet, ScrollView, TouchableOpacity,Switch} from "react-native";



const Setting=()=>{
      const [SelectClick,setSelectClick]=useState(false);
      const [RTL,setSelectRTL]=useState(false);
      const [Notification,setNotification]=useState(false);


      
       const toggleSwitch=()=>{
          setSelectClick(previoutState =>!previoutState)
        };
          const toggleRTL=()=>{
            setSelectRTL (previoutState =>!previoutState)
          } ;
          const toggleNotification=()=>{
            setNotification  (previoutState =>!previoutState)
   
    };
   
     return(
        <View style={style.Color}>
                  <Text style={style.Setting}>Setting</Text>
                  <View style={style.box}>
                     <View>
                    <Text style={style.Text}>Dark/Light</Text>  
                      <Switch 
                       trackColor={{false:'#9BA3AA',true:'#FEFEFF'}}
                       thumbColor={SelectClick?'#9BA3AA':'#3C3C3C'}
                       ios_backgroundColor="9BA3AA"
                       onValueChange={toggleSwitch}
                       value={SelectClick}


                      />   
        
                    </View>
                   
                    <Text style={style.Text1}></Text>
                    <Text style={style.Text}>RTL</Text>
                    <Switch 
                       trackColor={{false:'#9BA3AA',true:'#FEFEFF'}}
                       thumbColor={RTL?'#9BA3AA':'#3C3C3C'}
                       ios_backgroundColor="9BA3AA"
                       onValueChange={toggleRTL}
                       value={RTL}


                      />   
                    <Text style={style.Text1}></Text>
                    <Text style={style.Text}>Notification</Text>
                    <Switch 
                       trackColor={{false:'#9BA3AA',true:'#FEFEFF'}}
                       thumbColor={Notification?'#9BA3AA':'#3C3C3C'}
                       ios_backgroundColor="9BA3AA"
                       onValueChange={toggleNotification}
                       value={Notification}


                      />   
                   
                    <Text></Text>
                  </View>
                </View>
     )
}

const style=StyleSheet.create({
    Setting:{
         marginLeft:160,
         marginTop:30,
         color:'#FEFEFF',
         fontWeight:'bold',
         fontSize:15,
    },    
    box:{
       height:300,
       width:310,
       marginLeft:20,
       marginTop:40,
       backgroundColor:'#122636', 
       borderRadius:10

    },
    Color:{
        backgroundColor:'#07141F',
           flex:1,
         },
    Text:{
        marginLeft:20,
        color:'#FEFEFF',
        marginTop:19,
   },
    Text1:{
     borderBottomWidth:2,
    },
    box1:{
        height:20,
        width:50,
        backgroundColor:'#364552',
        marginLeft:240,
        borderRadius:20
    },
    
}); 
export default  Setting;