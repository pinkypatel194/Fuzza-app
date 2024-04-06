import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Background from '../assets/Background.jpg';
import userIcon from '../assets/usericon.png'
import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phonecall.png';
import passwordIcon from '../assets/passwordIcon.png';
import { TouchableOpacity } from "react-native-gesture-handler";

const SignIn = () => {
  const navigation = useNavigation(); 
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePress = () => {
    if (!Firstname || !Lastname || !Email || !Phone || !Password) {
      setError('Please fill in all fields');
      return;
    }
    const newData = { Firstname, Lastname, Email, Phone, Password };
    console.log(newData);
    navigation.navigate('MainContainer');
  };

  const handleTerm = () => {
    navigation.navigate('termsCondition');
  }
  
  const handleLogin = () => {
    navigation.navigate('Login');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled">     
        <Image source={Background} style={styles.image} />
        <Text style={styles.title}>Let's Get You In</Text>
        <Text style={styles.subtitle}>Hey, You've Been Missed!</Text>
        <FormField
          label="First Name"
          icon={userIcon}
          placeholder="Enter Your First Name"
          value={Firstname}
          onChangeText={setFirstname}
        />
        <FormField
          label="Last Name"
          icon={userIcon}
          placeholder="Enter Your Last Name"
          value={Lastname}
          onChangeText={setLastname}
        />
        <FormField
          label="E-mail"
          icon={emailIcon}
          placeholder="Enter Your Email Address"
          value={Email}
          onChangeText={setEmail}
        />
        <FormField
          label="Phone Number"
          icon={phoneIcon}
          placeholder="Enter Your Phone Number"
          value={Phone}
          onChangeText={setPhone}
          keyboardType="numeric"
        />
        <FormField
          label="Password"
          icon={passwordIcon}
          placeholder="Enter Your Password"
          value={Password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text style={styles.error}>{error}</Text>
        <TouchableOpacity onPress={handleTerm}>
          <Text style={styles.terms}>By creating an account, you agree to our <Text style={styles.termsLink}>Terms & Conditions</Text></Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button
            title="Create Account"
            color="#FFC107"
            onPress={handlePress}
          />
        </View>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.terms}>Already Have an account ?<Text style={styles.signInLink}> Login</Text></Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const FormField = ({ label, icon, placeholder, value, onChangeText, keyboardType = "default", secureTextEntry = false }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Image source={icon} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor="#D9D9D9"
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122636',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    color: '#F5FCFF',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 15,
    color: '#F5FCFF',
    marginTop: 5,
  },
  fieldContainer: {
    marginTop: 15,
  },
  label: {
    fontSize: 15,
    color: '#F5FCFF',
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#192D3C',
    borderRadius: 5,
    borderLeftColor: 'rgba(255, 193, 7, 1)',
    borderLeftWidth: 5,
    paddingLeft: 10,
    height: 40,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
  input: {
    flex: 1,
    color: '#F5FCFF',
    fontSize:12,
    marginLeft: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  terms: {
    alignSelf: 'center',
    color: '#F5FCFF',
    marginTop: 20,
  },
  termsLink: {
    color: '#FFC107',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginTop: 20,
  },
  image: {
    width:'110%',
    height:200,
    resizeMode: 'cover',
    marginLeft:-17,
  },
  signInText: {
    color: '#9BA3AA',
    fontSize: 14,
    marginTop: 20,
    marginLeft: 80,
    alignContent: 'center',
    justifyContent: 'center',
  },
  signInLink: {
    color: 'rgba(255, 193, 7, 1)',
    fontSize: 18,
    marginLeft: 1,
  },  
});
export default SignIn;