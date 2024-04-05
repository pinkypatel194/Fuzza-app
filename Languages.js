import { View,StyleSheet,ScrollView,Image,Text, TouchableOpacity } from "react-native";


const Languages=()=>{
    return(   
       <View style={style.Color}>
           <Text style={style.Languages}>Languages</Text>
            <View style={{flexDirection:'row'}}>
             <Text style={style.Text}>English</Text>
             <Text style={style.round}></Text>
             </View>
             <Text style={style.Text1}></Text>
             <View style={{flexDirection:'row'}}>
             <Text style={style.Text}>Spanish</Text>
             <Text style={style.round}></Text>
             </View>
             <Text style={style.Text1}></Text>
             <View style={{flexDirection:'row'}}>
             <Text style={style.Text}>France</Text>
             <Text style={style.round}></Text>
             </View>
             <Text style={style.Text1}></Text>
             <View style={{flexDirection:'row'}}>
             <Text style={style.Text}>Portugue</Text>
             <Text style={style.round}></Text>
             </View>
             <Text style={style.Text1}></Text>
             <View style={{flexDirection:'row'}}>
             <Text style={style.Text}>Russian</Text>
             <Text style={style.round}></Text>
             </View>
             <Text style={style.Text1}></Text>
             <View style={{flexDirection:'row'}}>
             <Text style={style.Text}>Chinese</Text>
             <Text style={style.round}></Text>
             </View>
             <Text style={style.Text1}></Text>
       </View>
    )
    }
    const style=StyleSheet.create({
        Languages:{
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
        Text:{
            marginLeft:30,
            marginTop:50,
            fontWeight:'bold',
            color:'#FEFEFF',
            fontSize:15

        },
        Text1:{
             borderBottomWidth:2,
             borderColor:'#FEFEFF'
        },
        round:{
              height:20,
              width:20,
              backgroundColor:'#FEFEFF',
              marginLeft:230,
              marginTop:50,
              borderRadius:50,
        }
    })
    export default Languages;            