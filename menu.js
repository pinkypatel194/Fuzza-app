import  React ,{useState}from "react";
import { View,Text,Image,StyleSheet,Switch} from "react-native";
// import {profile}from "./assets/pro.jpg";

const  Menu =()=>{
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled(previousState => !previousState);

  
  
          return(
             <View style={style.con}>
                 <View style={{flexDirection:'row'}}>
                 {/* <Image  source={profile} style={{marginLeft:10,marginTop:50,}}/> */}
                <Text style={style.profile}>                Hello,Pinky!</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                 <Text style={style.RTL}>RTL</Text>
                 <Text style={style.Button}> 
                 <Switch
                         trackColor={{false: '#767577', true: '#F5FCFF'}}
                        thumbColor={isEnabled ? '#D9D9D9' : '#D9D9D9'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch1}
                        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                        value={isEnabled}
                />
 </Text>
                 </View>
                 <Text style={style.line}></Text>
                 <View style={{flexDirection:'row'}}>
                 <Text style={style.RTL}>DARK</Text>
                 <Text style={style.Button1}> 
                 <Switch
                         trackColor={{false: '#767577', true: '#F5FCFF'}}
                        thumbColor={isEnabled ? '#D9D9D9' : '#D9D9D9'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
                        value={isEnabled}
                /> </Text>
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
    con:{
            backgroundColor:'#07141F',
            flex:1
    },
    profile:{
         marginLeft:50,
         marginTop:50,
         color:'#FEFEFF',
         fontWeight:'bold',
         fontSize:15,
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
         marginLeft:210,
         marginTop:50,
      },
      Button1:{
        marginLeft:210,
         marginTop:50,
     }
})

export default Menu;