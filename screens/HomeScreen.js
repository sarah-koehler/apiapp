import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <Button
      title="Hello!"
      onPress={() =>
        navigate('Hello', { name: 'Jane' })
      }
    />
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
