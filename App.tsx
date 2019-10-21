import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import AppNavigator from './src/navigation/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={Style.container}>
        <AppNavigator />
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