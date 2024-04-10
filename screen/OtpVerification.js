import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Background from '../assets/Background.jpg';
    
const OtpVerification = () => {
  const navigation = useNavigation(); 
  const [otp, setOtp] = useState('');
  const [userInput, setUserInput] = useState(['', '', '', '']);
  const [isValid, setIsValid] = useState(null);
  const [showOtpBox, setShowOtpBox] = useState(false);
  const refs = useRef([...Array(4)].map(() => React.createRef()));

  useEffect(() => {
    generateOtp();
  }, []);

  const generateOtp = () => {
    let generatedOtp = '';
    const characters = '0123456789';
    for (let i = 0; i < 4; i++) {
      generatedOtp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setOtp(generatedOtp);
    setIsValid(null);
    setShowOtpBox(true);
    refs.current[0].current.focus(); 
  };

  const handleInputChange = (index, value) => {
    const updatedUserInput = [...userInput];
    updatedUserInput[index] = value;
    setUserInput(updatedUserInput);
    if (value !== '' && index < 3) {
      refs.current[index + 1].current.focus(); 
    }
  };

  const validateOtp = () => {
    const enteredOtp = userInput.join('');
    if (enteredOtp === otp) {
        Alert.alert('Valid OTP', 'Create Your New Password');
      setIsValid(true);
      navigation.navigate('CreatePassword');
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Background} style={styles.backgroundImage} />
      <Text style={styles.Text}>OTP Verification</Text>
      {showOtpBox && (
        <View style={styles.otpBox}>
          <Text style={styles.otp}>Enter this OTP :- {otp}</Text>
        </View>
      )}
      <Text style={styles.Text2}>We have sent a Verification code </Text>
      <View style={styles.otpContainer}>
        {userInput.map((value, index) => (
          <TextInput
            key={index}
            style={styles.TextInput}
            value={value}
            onChangeText={(text) => handleInputChange(index, text)}
            keyboardType="numeric"
            maxLength={1}
            ref={refs.current[index]} 
          />
        ))}
      </View>
      <TouchableOpacity style={styles.btn} onPress={validateOtp}>
        <Text style={styles.btntext}>Verify</Text>
      </TouchableOpacity>
      {isValid === true && <Text style={styles.validText}>Valid OTP</Text>}
      {isValid === false && <Text style={styles.invalidText}>Invalid OTP</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#122636',
  },
  backgroundImage: {
    width: '100%',
    height: '30%',
    position: 'absolute',
  },
  Text: {
    fontSize: 24,
    color: '#F5FCFF',
    marginTop: 200,
    fontWeight: 'bold',
    marginLeft: -190,
  },
  Text2: {
    fontSize: 15,
    color: '#D9D9D9',
    marginTop: 10,
    marginLeft: -120,
  },
  Text3: {
    fontSize: 17,
    color: '#F5FCFF',
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft:-230,
  },
  otpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  TextInput: {
    height: 70,
    width: 80,
    backgroundColor: '#192D3C',
    marginLeft: 8,
    borderRadius: 5,
    fontSize:18,
    textAlign: 'center',
    color: '#F5FCFF',
  },
  btn: {
    backgroundColor: '#FFC107',
    height: 35,
    width: 300,
    marginTop: 35,
    borderRadius: 2,
    padding: 7,
  },
  btntext: {
    color: '#122636',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  otpBox: {
    marginTop: 10,
    padding: 10,
  },
  otp: {
    color: '#ffffff',
    fontSize: 14,
    marginLeft: -180,
  },
  validText: {
    fontSize: 20,
    color: 'green',
    marginTop: 20,
  },
  invalidText: {
    fontSize: 20,
    color: 'red',
    marginTop: 20,
  },
});

export default OtpVerification;
