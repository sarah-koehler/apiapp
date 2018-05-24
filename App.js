import React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StyleSheet, Text, View } from 'react-native';

import HelloScreen from './screens/HelloScreen';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from 'react-navigation';

// add authentication to all request
const httpLink = new HttpLink({
  uri: "https://graphql-api.prod.searchmetrics.space/production/graphql",
})

const authLink = setContext((_, { headers }) => ({
  headers: {
    ...headers,
    "sm-api-key": process.env.REACT_APP_API_KEY,
    "sm-api-secret": process.env.REACT_APP_API_SECRET,
  }
}))

// build the client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Hello: HelloScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
  }
);

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
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
