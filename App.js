import React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StyleSheet, Text, View } from 'react-native';

import HelloScreen from './screens/HelloScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { createStackNavigator } from 'react-navigation';
import { getApiAccessDataFromStorage } from './helpers/apiKey';

const httpLink = new HttpLink({
  uri: "https://graphql.searchmetrics.com",
})

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Hello: HelloScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
  }
);

export default class App extends React.Component {

  state = { client: null }

  componentDidMount () {
    getApiAccessDataFromStorage(({ apiKey, apiSecret }) => {
      console.log('get Data callback', apiKey, apiSecret)
      const authLink = setContext((_, { headers }) => ({
        headers: {
          ...headers,
          "sm-api-key": apiKey,
          "sm-api-secret": apiSecret,
        }
      }))
      this.setState({
        client: new ApolloClient({
          link: authLink.concat(httpLink),
          cache: new InMemoryCache(),
        })
      })
    })
  }

  render() {
    if (!this.state.client) {
      return null
    }

    return (
      <ApolloProvider client={this.state.client}>
        <RootStack />
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
