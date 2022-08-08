import React from 'react'
import { ImageBackground, Text, View, Image } from "react-native";

import styles from './style';

import Banner from './banner.png'
import Logo from './Logo.png'

const SpalshScreen = () => {
  return (
    <View style={styles.mainDiv}>
      <ImageBackground source={Banner} resizeMode="cover">
        <View style={styles.bannerDiv}>
          <Text style={styles.bannerText}>Welcome to Saiyonee</Text>
        </View>
      </ImageBackground>
      <View style={styles.divCenter}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.loadingSpinner}></View>
      </View>
    </View>
  );
}

export default SpalshScreen