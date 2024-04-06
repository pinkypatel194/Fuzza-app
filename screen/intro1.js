import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing, TouchableOpacity } from 'react-native';
import round from '../assets/round.png';
import sub from '../assets/sub.png';
import arrow from '../assets/arrow1.png';
import logo from '../assets/logo.png';
import chair from '../assets/winbackchair.png';
import { useNavigation, useIsFocused } from "@react-navigation/native";

const Intro1 = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isFocused) {
            const timer = setTimeout(() => {
                navigation.navigate('intro2');
            }, 2000); 
            return () => clearTimeout(timer);
        }
    }, [isFocused, navigation]);
    useEffect(() => {
        Animated.loop(
            Animated.timing(
                spinValue,
                {
                    toValue: 1,
                    duration: 3000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )
        ).start();
    }, []);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <View style={styles.con}>
            <Image source={logo} style={styles.logo}/>
            <View>
                <Animated.Image source={round} style={[styles.round, { transform: [{ rotate: spin }] }]} />
                <Image source={chair} style={styles.chair} />
            </View>
            <View>
                <Image source={sub} style={styles.sub} />
                <Text style={styles.Furniture}>Office Furniture</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.borderend}></Text>
                    <Text style={styles.bordermin}></Text>
                    <Text style={styles.borderfirst}></Text>
                </View>
                <Text style={styles.descrpiton}>The best payment method connects your money to friends, family,</Text>
                <Text style={styles.descrpiton2}> brands, and experiences.</Text>
            </View>
            <TouchableOpacity style={styles.arrowround} onPress={() => navigation.navigate('intro3')}>
                <Image source={arrow} style={styles.arrow} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    con: {
        flex: 1,
        backgroundColor: "#122636"
    },
    logo: {
        height: 70, 
        width: 150, 
        marginLeft: 120, 
        marginTop: 50
    },
    round: {
        height: 330, 
        width: 330, 
        marginTop: 50, 
        marginLeft: 35
    },
    chair: {
        height: 190, 
        width: 190, 
        marginTop: -230, 
        marginLeft: 100
    },
    sub: {
        marginLeft: 15, 
        width: 350, 
        marginTop: 100, 
        height: 210
    }, 
    Furniture: {
        marginTop: -180, 
        marginLeft: 110, 
        color: '#F5FCFF', 
        fontSize: 24,
    }, 
    borderend: {
        borderWidth: 2, 
        height: 1, 
        width: 20,
        marginLeft: 140, 
        marginTop: 10, 
        borderRadius: 10,
        borderColor: '#FFC107'
    }, 
    bordermin: {
        borderWidth: 2, 
        height: 1, 
        width: 50, 
        marginLeft: 10, 
        marginTop: 10, 
        borderRadius: 10,
        borderColor: '#FFC107'
    }, 
    borderfirst: {
        borderWidth: 2, 
        height: 1, 
        width: 20, 
        marginLeft: 10, 
        marginTop: 10, 
        borderRadius: 10,
        borderColor: '#FFC107'
    },
    descrpiton: {
        fontSize: 11, 
        marginLeft: 30, 
        color: '#9BA3AA', 
        marginTop: 17,
    }, 
    descrpiton2: {
        fontSize: 11, 
        marginLeft: 130, 
        color: '#9BA3AA', 
        marginTop: 9,
    },
    arrowround: {
        height: 80, 
        width: 80, 
        marginLeft: 159, 
        marginTop: 40, 
        borderRadius: 50,
        borderColor:'gray',
        borderWidth:3,
        // borderStyle:'dashe',
        backgroundColor: "#F5FCFF", 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    arrow: {
        marginLeft: 4,
        // height:40,
        marginTop:4,
        height:30,
        width:30,
    }
});
export default Intro1;