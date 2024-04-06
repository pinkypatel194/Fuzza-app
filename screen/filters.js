import  React,{useState} from "react";
import { View,Text,Image,StyleSheet, ScrollView} from "react-native";
import arrow from '../assets/back2.png'
import { RadioButton } from 'react-native-paper'; 
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const  Filter=()=>{
    const navigation=useNavigation()
    const handleapply=()=>{
        navigation.navigate('MainContainer')
    }
    const handlecolor=()=>{
        navigation.navigate('colorfilter')
    }
    const handlematerial=()=>{
        navigation.navigate('matetials')
    }
    const [selectedValue, setSelectedValue] = useState('option1')
    return(
       
    <View style={styles.con}> 
         <ScrollView>
         <View style={{flexDirection:'row'}}> 
              <Text style={styles.heading}> Filter </Text></View>
              <View style={styles.border}></View>
              <View style={styles.radioGroup}> 
				<View style={styles.radioButton}> 
					<RadioButton.Android 
						value="option1"
						status={selectedValue === 'option1' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option1')} 
						color="#007BFF"
					/> 
					<Text style={styles.radioLabel}> 
                    Relevance 
					</Text> 
				</View> 

				<View style={styles.radioButton}> 
					<RadioButton.Android 
						value="option2"
						status={selectedValue === 'option2' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option2')} 
						color="#007BFF"
					/> 
					<Text style={styles.radioLabel}> 
                    Highest Priced First 
					</Text> 
				</View> 

				<View style={styles.radioButton}> 
					<RadioButton.Android 
						value="option3"
						status={selectedValue === 'option3' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option3')} 
						color="#007BFF"
					/> 
					<Text style={styles.radioLabel}> 
                    Lowest Priced First</Text> 
				</View> 
                <View style={styles.radioButton}> 
					<RadioButton.Android 
						value="option4"
						status={selectedValue === 'option4' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option4')} 
						color="#007BFF"
					/> 
					<Text style={styles.radioLabel}> 
                    Fastest Shipping</Text> 
				</View> 
                <View style={styles.radioButton}> 
					<RadioButton.Android 
						value="option5"
						status={selectedValue === 'option5' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option5')} 
						color="#007BFF"
					/> 
					<Text style={styles.radioLabel}> 
                    Newest</Text> 
				</View> 
                <View style={styles.radioButton}> 
					<RadioButton.Android 
						value="option6"
						status={selectedValue === 'option6' ? 
								'checked' : 'unchecked'} 
						onPress={() => setSelectedValue('option6')} 
						color="#007BFF"
					/> 
					<Text style={styles.radioLabel}> 
                    Highest Rating First</Text> 
				</View> 
			</View> 
              <View style={styles.longbox}>
               <View style={styles.box}>
                   <Text style={{color:"#FFFFFF"}}>Sort By</Text>
               </View>
               <View style={styles.box}>
                <TouchableOpacity onPress={()=>handlecolor()}>
                   <Text style={{color:"#FFFFFF"}}>Color</Text>
                   </TouchableOpacity>
               </View>
               <View style={styles.box}>
                <TouchableOpacity onPress={()=>handlematerial()}>
                   <Text style={{color:"#FFFFFF"}}>Material</Text>
                   </TouchableOpacity>
               </View>
              </View>
              <View style={{flexDirection:'row'}}>
                  <View style={styles.box2}>
                  <TouchableOpacity  onPress={()=>handleapply()}>
                        <Text style={styles.text2}>Clear Filter</Text>
                </TouchableOpacity>
                  </View>
                  <View style={styles.box3}>
                    <TouchableOpacity  onPress={()=>handleapply()}> 
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
        }, 
        radioButton: { 
            flexDirection: 'row', 
            // alignItems: 'center', 
            marginLeft:20,
            marginTop:30,
        }, 
        radioLabel: { 
            flexDirection:'column',
            marginLeft: 18, 
            fontSize: 16, 
            color: '#F5FCFF', 
            marginTop:10
        }, 
        box2:{
            height:50,
            width:150,
            marginTop:90,
            marginLeft:20,
            backgroundColor:'#122636',
            borderRadius:5
        },
        box3:{
            height:50,
            width:150,
            marginTop:90,
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
    export default Filter;