import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme, Button } from 'react-native';

export default function Login() {
  const color = useColorScheme();
  const [mode, setMode] = useState(color);
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };
  return (
    <View style={[styles.container, mode === 'dark' && styles.containerDark]}>
      <View style={styles.logoContainer}>
      </View>
      <Button title={mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} onPress={toggleMode} />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDark: {
    backgroundColor: '#122636',
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
  },
});
