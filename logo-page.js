import React, { useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Animated } from 'react-native';
import { StackNavigationState } from '@react-navigation/native';

export default function App() {
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
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, { transform: [{ rotateY }] }]}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>
      <StatusBar style="auto" />
    </View>
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