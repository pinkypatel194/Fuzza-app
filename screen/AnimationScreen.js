import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const TruckDeliveryAnimation = () => {
  
  const navigation = useNavigation();
  const truckPosition = useRef(new Animated.Value(-150)).current;
  const loadingProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(truckPosition, {
      toValue: screenWidth / 2 - 155,
      duration: 5000,
      useNativeDriver: true,
    }).start();

    Animated.timing(loadingProgress, {
      toValue: screenWidth - 0,
      duration: 5000,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate('intro1');
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.road}>
        <Animated.View style={[styles.loading, { width: loadingProgress }]} />
      </View>
      <View style={styles.truckContainer}>
        <Animated.View style={[styles.truck, { transform: [{ translateX: truckPosition }] }]}>
          <Image source={require('../assets/truck.png')} style={styles.truckImage} />
        </Animated.View>
      </View>
      <View style={styles.house}>
        <Image source={require('../assets/house.png')} style={styles.houseImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#122636',
  },
  road: {
    position: 'absolute',
    width: '100%',
    height: '2%',
    backgroundColor: '#203342',
    bottom: '41%',
    justifyContent: 'flex-end',
  },
  loading: {
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  truckContainer: {
    position: 'absolute',
    bottom: '38%',
  },
  truck: {
    width: 250,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  truckImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  house: {
    position: 'absolute',
    bottom: '37.2%',
    right: -49,
    width: 200,
    height: 200,
  },
  houseImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default TruckDeliveryAnimation;