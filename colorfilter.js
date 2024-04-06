import  React,{useState} from "react";
import { View,Text,Image,StyleSheet, ScrollView} from "react-native";
import arrow from './assets/back 1.png'
import { RadioButton ,Checkbox} from 'react-native-paper'; 
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const  Colorfilter=()=>{
        const [checkedOptions, setCheckedOptions] = useState({
        relevance: false,
        highestPricedFirst: false,
        lowestPricedFirst: false,
        fastestShipping: false,
        newest: false,
        highestRatingFirst: false
    });

    const handleCheckboxChange = (option) => {
        setCheckedOptions(prevState => ({
            ...prevState,
            [option]: !prevState[option]
        }));
    };
    const navigation =useNavigation()

    const handleapply=()=>{
        navigation.navigate('home1')
    }
    const handlefilter=()=>{
        navigation.navigate('filters')
    }
    const handlematerial=()=>{
        navigation.navigate('matetials')
    }
    return(
       
    <View style={styles.con}> 
         <ScrollView>
         <View style={{flexDirection:'row'}}> 
              <Text style={styles.heading}> Filter </Text></View>
              <View style={styles.border}></View>
              <View style={styles.radioGroup}> 
				<View style={styles.radioButton}> 
                <Checkbox
                            status={checkedOptions.Black ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange('Black')}
                            color="#007BFF"
                        />
					<Text style={styles.radioLabel}> 
                    Black
					</Text> 
				</View> 

				<View style={styles.radioButton}> 
                <Checkbox
                            status={checkedOptions.Gray ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange('Gray')}
                            color="#007BFF"
                        />
					<Text style={styles.radioLabel}> 
                    Gray
					</Text> 
				</View> 

				<View style={styles.radioButton}> 
                <Checkbox
                            status={checkedOptions.Blue ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange('Blue')}
                            color="#007BFF"
                        />
					<Text style={styles.radioLabel}> 
                    Blue</Text> 
				</View> 
                <View style={styles.radioButton}> 
                <Checkbox
                            status={checkedOptions.Yellow ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange('Yellow')}
                            color="#007BFF"
                        />
					<Text style={styles.radioLabel}> 
                    Yellow</Text> 
				</View> 
                <View style={styles.radioButton}> 
                <Checkbox
                            status={checkedOptions.Green ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange('Green')}
                            color="#007BFF"
                        />
					<Text style={styles.radioLabel}> 
                    Green</Text> 
				</View> 
                <View style={styles.radioButton}> 
                <Checkbox
                            status={checkedOptions.Red ? 'checked' : 'unchecked'}
                            onPress={() => handleCheckboxChange('Red')}
                            color="#007BFF"
                        />
					<Text style={styles.radioLabel}> 
                    Red</Text> 
				</View> 
			</View> 
              <View style={styles.longbox}>
               <View style={styles.box}>
                <TouchableOpacity onPress={()=>handlefilter()}>
                   <Text style={{color:"#FFFFFF"}}>Sort By</Text>
                   </TouchableOpacity>
               </View>
               <View style={styles.box}>
                   <Text style={{color:"#FFFFFF"}}>Color</Text>
               </View>
               <View style={styles.box}>
                <TouchableOpacity onPress={()=>handlematerial()}>
                   <Text style={{color:"#FFFFFF"}}>Material</Text>
                   </TouchableOpacity>
               </View>
              </View>
              <View style={{flexDirection:'row'}}>
                  <View style={styles.box2}>
                  <TouchableOpacity onPress={()=>handleapply()}>
                        <Text style={styles.text2}>Clear Filter</Text>
                </TouchableOpacity>
                  </View>
                  <View style={styles.box3}>
                    <TouchableOpacity onPress={()=>handleapply()} > 
                        <Text style={styles.text3}>Apply</Text>
                </TouchableOpacity>
                  </View>
              </View>
         </ScrollView>
    </View>
          
    )
   }
       const styles=StyleSheet.create({

        con:{
            backgroundColor:'#07141F',
            flex:1
        },
        heading:{
            color:"#F5FCFF",
            fontWeight:'bold',
            fontSize:15,
            marginLeft:165,
            marginTop:45
        },
        arrowicon:{
            height:24,width:24,  marginLeft:16,
            marginTop:40,fontWeight:'bold'
        },
        border:{
            width:360,
            borderWidth:1,
            marginLeft:2,
            marginTop:20,borderColor:'#FFFFFF'
        },
        longbox:{
            height:550,
            width:100,marginTop:-401,marginLeft:3,
            backgroundColor:'#122636',flexDirection:'column'
        },box:{
            height:100,
            width:100,
            borderWidth:1,
            marginTop:0,
            borderLeftWidth:0,
            borderRightWidth:0,paddingTop:40,
            paddingLeft:20,
            borderColor:'#D9D9D9'
        },
        radioGroup: { 
            flexDirection: 'column',
            marginTop: 5, 
            borderRadius: 8,
            marginLeft:120,
            borderRadius:50,
            borderRadius:50
        }, 
        radioButton: { 
            flexDirection: 'row', 
            // alignItems: 'center', 
            marginLeft:20,
            marginTop:30,
            borderRadius:50
        }, 
        radioLabel: { 
            flexDirection:'column',
            marginLeft: 18, 
            fontSize: 16, 
            color: '#F5FCFF', 
            marginTop:10,
        }, 
        box2:{
            height:50,
            width:150,
            marginTop:40,
            marginLeft:20,
            backgroundColor:'#122636',
            borderRadius:5
        },
        box3:{
            height:50,
            width:150,
            marginTop:40,
            marginLeft:20,
            backgroundColor:'#FFFFFF',
            borderRadius:5
        },
        text2:{
            color:'#FFFFFF',
            marginTop:15,
            textAlign:'center'
        },
        text3:{
            color:'#000000',
            marginTop:15,
            textAlign:'center'
        }
    })
    export default Colorfilter;