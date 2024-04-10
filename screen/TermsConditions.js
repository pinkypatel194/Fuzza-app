import * as React from 'react';
import { View , Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TermsCondition (){
    const navigation = useNavigation();
    
    return(
        <ScrollView style={styles.container}>
            <View style={styles.screen}>
                <Text style={styles.Text}>Terms and conditions</Text>
                {/* <T~z */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        color:'#fff',
        backgroundColor:'#122636',
    },
    screen:{
        fontSize:26,
        fontWeight:'bold',
    },
    Text:{
        color:'#fff',
        fontSize:15,
        marginTop:10,
        textAlign:'center',
        justifyContent:'center',
    }
});
