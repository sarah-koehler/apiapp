import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

const CTAButton = ({ children, onPress }) => {
    return (
      <View style={styles.container}>
      <Button color="#990099" onPress={onPress} title={children} />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    padding: 5,
    margin: 10,
    borderRadius: 5,
  },
})

export default CTAButton;

