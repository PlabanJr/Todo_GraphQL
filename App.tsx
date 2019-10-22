import React, { Component } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { ApolloProvider } from '@apollo/react-hooks';

import AppNavigator from './src/navigation/AppNavigator';

import { client } from "./src/graphql/client";

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={Style.container}>
        <ApolloProvider client={client}>
          <AppNavigator />
        </ApolloProvider>
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