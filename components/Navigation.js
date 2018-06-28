import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffe6ff',
    borderColor: '#ffe6ff',
    borderWidth: 15,
  },
})

const Navigation = (props) => {
  const { navigate } = props.navigation;
  return (
    <View style={styles.container}>
      <Button
        title="Home"
        onPress={() => navigate('Home')}
        color="#990099"
      />
      <Button
        title="Keywords"
        onPress={() => navigate('Keywords')}
        color="#990099"
      />
      <Button
        title="Settings"
        onPress={() => navigate('Settings')}
        color="#990099"
      />
    </View>
  )
}
export default Navigation;
