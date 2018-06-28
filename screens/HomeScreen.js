import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import PageContainer from '../components/PageContainer';

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <PageContainer {...props}>
      <Text>Welcome to the Searchmetrics API!</Text>
      <Text>Explore Keywords and related Topics</Text>
    </PageContainer>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
