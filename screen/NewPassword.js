import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import Background from '../assets/Background.jpg';
import { useNavigation } from "@react-navigation/native";

const CreatePassword = () => {
  const navigation = useNavigation(); 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Alert.alert('Success', 'Password reset successful');
    navigation.navigate('MainContainer');
  };
  return (
    <View style={styles.container}>
      <Image source={Background} style={styles.background} />
      <Text style={styles.title}>Create a new Password</Text>
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter New password"
        placeholderTextColor={'#D9D9D9'}
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm New password"
        placeholderTextColor={'#D9D9D9'}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122636',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    color: '#F5FCFF',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  label: {
    fontSize: 12,
    color: '#F5FCFF',
    marginLeft: 17,
    fontWeight: 'bold',
    marginTop: 25,
  },
  input: {
    height: 35,
    width: 330,
    backgroundColor: '#192D3C',
    marginLeft: 8,
    marginTop: 5,
    borderRadius: 5,
    color: '#F5FCFF',
    fontSize: 12,
    paddingLeft: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'rgba(255, 193, 7, 1)',
  },
  button: {
    backgroundColor: '#FFC107',
    height: 35,
    width: 300,
    marginTop: 35,
    borderRadius: 2,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#122636',
    fontWeight: 'bold',
  },
});

export default CreatePassword;
