import React from 'react';
import { StyleSheet, Text } from 'react-native';

const SubHeading = ({ children }) => {
    return (
      <Text style={styles.sub}>
        {children}
      </Text>
    )
}

const styles = StyleSheet.create({
  sub: {
    color: 'darkgrey',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default SubHeading;

