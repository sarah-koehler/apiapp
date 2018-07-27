import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Headline = ({ children, level = 'h2' }) => {
  let levelStyles = styles[level]
  if (Object.keys(levelStyles) < 1) {
    levelStyles = styles.h2
  }
    return (
      <Text style={styles[level]}>
        {children}
      </Text>
    )
}

const baseStyles = {
  textAlign: 'center',
}

const styles = StyleSheet.create({
  // This is a major Headline for a whole page
  h1: {
    ...baseStyles,
    color: 'black',
    fontSize: 24,
  },
  // This is supposed to be the default Headline for modules on a page
  h2: {
    ...baseStyles,
    color: 'black',
    fontSize: 18,
  },
  // This one is for more special cases, more prominent color
  h3: {
    ...baseStyles,
    color: "#4d0026",
    fontSize: 18,
  },
})

export default Headline;
