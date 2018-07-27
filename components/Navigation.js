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
  button: {
    backgroundColor: '#ffe6ff',
  },
  buttonActive: {
    backgroundColor: '#ffe6ff',
    borderTopWidth: 4,
    borderTopColor: '#990099',
  }
})

const NavItem = ({ isActive, title, routeName, navigate }) => {
  const style = isActive ? styles.buttonActive : styles.button
  return (
    <View style={style}>
      <Button
        title={title}
        onPress={() => navigate(routeName)}
        color="#990099"
      />
    </View>
  )
}

const navRoutes = [
  {
    routeName: 'Home',
    title: 'Home',
  },
  {
    routeName: 'Keywords',
    title: 'Keywords',
  },
  {
    routeName: 'Settings',
    title: 'Settings',
  },
]

const Navigation = (props) => {
  const { navigate, state } = props.navigation;
  console.log(props.navigation)
  const currentRoute = state.routeName

  return (
    <View style={styles.container}>
      {navRoutes.map(({ routeName, title }) => {
        const isActive = routeName === currentRoute
        return <NavItem isActive={isActive} title={title} routeName={routeName} key={routeName} navigate={navigate} />
      })}
    </View>
  )
}
export default Navigation;
