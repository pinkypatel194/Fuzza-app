import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native'; 
import Background from '../assets/Background.jpg';
import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phonecall.png';

const ForgotPassword = () => {
  const navigation = useNavigation(); 
  const [identifierType, setIdentifierType] = useState('email'); 
  const [identifier, setIdentifier] = useState(''); 

  const handleSendOTP = () => {
    if (!identifier) {
      Alert.alert('Error', 'Please enter your email address or phone number.');
      return;
    }
    navigation.navigate('OtpVerification', { identifierType, identifier });
  };

  return (
    <View style={styles.container}>
      <Image source={Background} style={styles.backgroundImage} />
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.label}>Select verification method:</Text>
      <View style={styles.selectorContainer}>
        <TouchableOpacity
          style={[styles.selectorButton, identifierType === 'email' && styles.selectedButton]}
          onPress={() => setIdentifierType('email')}
        >
          <Image source={emailIcon} style={styles.icon} />
          <Text style={styles.selectorButtonText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.selectorButton, identifierType === 'phone' && styles.selectedButton]}
          onPress={() => setIdentifierType('phone')}
        >
          <Image source={phoneIcon} style={styles.icon} />
          <Text style={styles.selectorButtonText}>Phone</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>{identifierType === 'email' ? 'Email' : 'Phone number'}</Text>
      <View style={styles.inputContainer}>
        <Image source={identifierType === 'email' ? emailIcon : phoneIcon} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={identifierType === 'email' ? 'Enter your E-mail' : 'Enter your Phone number'}
          placeholderTextColor="#D9D9D9"
          value={identifier}
          onChangeText={setIdentifier}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122636',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
  },
  title: {
    marginTop:230,
    fontSize: 24,
    marginLeft:-160,
    color: '#F5FCFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#F5FCFF',
    fontWeight: 'bold',
    marginTop:5,
    marginBottom: 10,
  },
  selectorContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  selectorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#192D3C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: '#FFC107',
  },
  selectorButtonText: {
    color: '#F5FCFF',
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#192D3C',
    borderRadius: 5,
    height:30,
    width:360,
    paddingLeft: 15,
    borderLeftWidth: 5,
    borderLeftColor: 'rgba(255, 193, 7, 1)',
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
    tintColor: '#F5FCFF',
  },
  input: {
    flex: 1,
    height: 35,
    color: '#F5FCFF',
    fontSize: 12,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#FFC107',
    height: 35,
    width: 300,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#122636',
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
