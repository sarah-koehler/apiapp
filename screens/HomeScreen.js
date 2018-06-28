import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import PageContainer from '../components/PageContainer';
import Greeting from '../components/Greeting';

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <PageContainer {...props}>
      <Greeting {...props}/>
      <Text style={styles.text}>Welcome to the Searchmetrics API!</Text>
      <Text style={styles.text}>Explore Keywords and related Topics</Text>
    </PageContainer>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    color: "#4d0026",
    textAlign: 'center',
  },
});

export default HomeScreen;
