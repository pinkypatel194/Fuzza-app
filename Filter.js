import  React from "react";
import { View,Text,Image,StyleSheet, ScrollView} from "react-native";


const  Filter=()=>{
    return(
         <View>
            <Text style={style.Filter}>Filter</Text>
                 <View style={style.box}>  
                       
                    <Text style={style.Text1}>Sort By</Text>
                     <Text style={style.border}></Text>
                     <Text style={style.Text1}>Color</Text>
                     <Text style={style.border}></Text>
                     <Text style={style.Text1}>Price</Text>
                     <Text style={style.border}></Text>
                     <Text style={style.Text1}>Material</Text>
                     <Text style={style.border}></Text>
                 <View>
                <Text style={style.Text}>⬤ Relevance</Text>
                <Text style={style.Text}>⬤ Highest Priced First</Text>
                <Text style={style.Text}>⬤ Lowest Priced First</Text>
                <Text style={style.Text}>⬤ Fastest Shipping</Text>
                <Text style={style.Text}>⬤ Newest</Text>
                <Text style={style.Text}>⬤ Highest Rating First</Text>   
            </View>
           </View>  
           </View>
         
          
    )
   }

         
       const style=StyleSheet.create({
        Filter:{
             marginLeft:160,
             marginTop:30,
             color:'#FEFEFF',
             fontWeight:'bold',
             fontSize:15,
                
        }, 
        Text :{
             marginLeft:10,
            marginTop:30,
            color:'#FEFEFF',
            fontWeight:'bold',
            fontSize:15,
        },
        box:{
            marginTop:30,
             height:660,
             width:90,
             backgroundColor:'#122636'

        },
        Text1:{
            marginLeft:10,
            marginTop:30,
            color:'#FEFEFF',
            fontSize:15,
           },
           border:{
             borderBottomWidth:2,
             borderColor:'#FEFEFF',
           }  
    })
    export default Filter;