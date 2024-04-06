import React, { useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Logo() {
  const navigation = useNavigation();
  const flipAnimation = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(
        flipAnimation,
        {
          toValue: 1,
          duration: 1000, 
          useNativeDriver: true
        }
      ).start();
    }, 500); 
    return () => clearTimeout(timer);
  }, [flipAnimation]);

  const rotateY = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg']
  });

  const handleIntro = () => {
    navigation.navigate('Animation');
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleIntro}>
      <Animated.View style={[styles.logoContainer, { transform: [{ rotateY }] }]}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122636',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
  },
  logo: {
    height: 200,
    width: 200,
  }
});
