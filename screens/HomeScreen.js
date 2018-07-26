import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import PageContainer from '../components/PageContainer';
import Greeting from '../components/Greeting';
import { CTAButton, Headline, SubHeading } from '../components/basics';

const HomeScreen = (props) => (
  <PageContainer {...props}>
    <View style={styles.greeting}>
      <Greeting {...props}/>
    </View>
    <Headline level='h2'>Welcome to the Searchmetrics API</Headline>
    <SubHeading style={styles.text}>Explore Keywords and related Topics</SubHeading>
    <CTAButton onPress={() => props.navigation.navigate('Keywords')}>Start Exploring</CTAButton>
  </PageContainer>
);

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
  greeting: {
    height: 100,
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
