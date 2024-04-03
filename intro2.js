import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Animated, Easing, TouchableOpacity } from 'react-native';
import round from './assets/round.png';
import sub from './assets/sub.png';
import arrow from './assets/back.png';
import logo from './assets/LOGO.png';
import chair from './assets/animatedchair2.png';

const Intro2 = ({ navigation }) => {
    const spinValue = useRef(new Animated.Value(0)).current;

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
        height: 70, width: 150, marginLeft: 120, marginTop: 50
    },
    round: {
        height: 280, width: 280, marginTop: 50, marginLeft: 35
    },
    chair: {
        height: 150, width: 150, marginTop: -200, marginLeft: 100

    },
    sub: {
        marginLeft: 15, width: 330, marginTop: 130, height: 140
    }, Furniture: {
        marginTop: -130, marginLeft: 130, color: '#F5FCFF', fontSize: 18
    }, borderend: {
        borderWidth: 1, height: 1, width: 15, marginLeft: 215, marginTop: 10, borderRadius: 10,
        borderColor: '#FFC107'
    }, bordermin: {
        borderWidth: 1, height: 1, width: 30, marginLeft: -60, marginTop: 10, borderRadius: 10,
        borderColor: '#FFC107'
    }, borderfirst: {
        borderWidth: 1, height: 1, width: 15, marginLeft: -60, marginTop: 10, borderRadius: 10,
        borderColor: '#FFC107'
    }, descrpiton: {
        fontSize: 10, marginLeft: 30, color: '#9BA3AA', marginTop: 15
    }, descrpiton2: {
        fontSize: 10, marginLeft: 120, color: '#9BA3AA', marginTop: 5
    }, arrowround: {
        height: 50, width: 50, marginLeft: 160, marginTop: 20, borderRadius: 50,
        backgroundColor: "#F5FCFF", justifyContent: 'center', alignItems: 'center'
    }, arrow: {
        marginLeft: 5
    }
});

export default Intro2;
