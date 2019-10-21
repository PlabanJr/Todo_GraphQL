import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import { SplashScreen } from './src/screens';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={Style.container}>
        <SplashScreen />
      </SafeAreaView>
    )
  }
}

const Style = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  }
})