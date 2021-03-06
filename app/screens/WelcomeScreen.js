import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import CustomButton from '../components/CustomButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
  // const background = { uri: 'https://picsum.photos/1242/2688' };
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton title="Login" />
        <CustomButton title="Register" color="secondary" />
        <View style={styles.registerButton}></View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
