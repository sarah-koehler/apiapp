import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Navigation from './Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  navigation: {
  },
});


const PageContainer = (props) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        {children}
      </View>
      <View style={styles.navigation}>
        <Navigation {...props} />
      </View>
    </View>
  )
};


export default PageContainer;
