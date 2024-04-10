import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, SafeAreaView } from 'react-native';
import background from '../assets/Background.jpg';
import emailIcon from '../assets/email.png';
import passwordIcon from '../assets/passwordIcon.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigation(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    loadRememberedCredentials();
  }, []);

  const loadRememberedCredentials = async () => {
    try {
      const rememberedEmail = await AsyncStorage.getItem('rememberedEmail');
      if (rememberedEmail) {
        setEmail(rememberedEmail);
        setRememberMe(true);
      }
    } catch (error) {
      console.error('Error loading remembered credentials:', error);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post('https://your-api-url.com/login', {
        email: email,
        password: password,
      });
      const data = response.data;
      if (response.status === 200) {
        setLoading(false);
        if (rememberMe) {
          await AsyncStorage.setItem('rememberedEmail', email);
        }
        Alert.alert('Success', 'Login successful!');
        navigation.navigate('MainContainer'); 
      } else {
        setLoading(false);
        Alert.alert('Error', data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      setLoading(false);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };
  
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword'); 
  };

  // Inside the handleSkip function in Login.js
const handleSkip = () => {
  navigation.reset({
    index: 0,
    routes: [{ name: 'MainContainer' }],
  });
};


  const handleSignin = () => {
    navigation.navigate('SingIn'); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={background}
        style={styles.image}
      />
      <Text style={styles.Text}>Hello Again!</Text>
      <Text style={styles.Text1}>Welcome back, You have been missed!</Text>
      <Text style={styles.Text2}>Email Id</Text>
      <View style={styles.sectionStyle}>
        <Image
          source={emailIcon}
          style={styles.imageStyle}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          placeholderTextColor="#D9D9D9"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Text style={styles.Text2}>Password</Text>
      <View style={styles.sectionStyle}>
        <Image
          source={passwordIcon}
          style={styles.imageStyle}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          placeholderTextColor="#D9D9D9"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.rememberMeContainer}>
        <TouchableOpacity
          style={styles.rememberMeCheckbox}
          onPress={() => setRememberMe(!rememberMe)}
        >
          {rememberMe ? <Text style={styles.checkboxText}>☑️</Text> : <Text style={styles.checkboxText}>□</Text>}
        </TouchableOpacity>
        <Text style={styles.rememberMeText}>Remember Me</Text>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>{loading ? 'Logging in...' : 'Login'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignin}>
        <Text style={styles.singIn}>Don't Have an account ?<Text style={styles.singIn2}>Sign up</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skip}>Skip For Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122636',
  },
  Text:{
    color:'#fff',
    fontSize:22,
    marginLeft:25,
  },
  Text1:{
    color:'#fff',
    fontSize:14,
    marginLeft:43,
    marginTop:10,
    marginBottom:15
  },
  Text2:{
    color:'#fff',
    marginTop:10,
    marginLeft:30,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#192D3C',
    borderLeftWidth: 5,
    borderLeftColor: 'rgba(255, 193, 7, 1)',
    height: 40,
    borderRadius: 5,
    marginLeft:25,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },
  image: {
    marginTop: 1,
    height: '30%',
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor:'rgba(255, 193, 7, 1)',
    borderRadius: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color:'black',
    fontWeight:'700',
    fontSize: 18,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 25,
  },
  rememberMeCheckbox: {
    width: 15,
    height: 15,
    borderColor: '#fff',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxText: {
    color: '#fff',
    fontSize: 20,
  },
  rememberMeText: {
    color: '#fff',
    fontSize: 12,
  },
  forgotPasswordText:{
    color:'red',
    marginLeft:130,
  },
  singIn:{
    color: '#9BA3AA',
    fontSize: 14,
    marginTop:20,
    marginLeft:80,
    alignContent:'center',
    justifyContent:'center',
  },
  singIn2:{
    color: '#fff',
    fontSize: 18,
    marginLeft :1,
  },
  skip:{
    fontSize:15,
    fontWeight:'500',
    marginLeft:270,
    marginTop:40,
    color:'rgba(255, 193, 7, 1)',
  },
});

export default Login;
