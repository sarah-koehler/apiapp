import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const HelloScreen = (props) => {
  const { navigate } = props.navigation;
  const name = props.navigation.getParam('name', 'Jim')

  return (
    <Query
    query={gql`
      {
        greeting {
          randomId
          who
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;

      console.log(data)
      const message = data.greeting.who
      return (
        <View style={styles.container}>
          <Text>{message}</Text>
          <Button
            title="Home"
            onPress={() =>
              navigate('Home', { testProp: 'Jane' })
            }
          />
        </View>
      )
    }}
  </Query>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

HelloScreen.navigationOptions = {
  title: 'Welcome',
};

export default HelloScreen;
