import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import PageContainer from '../components/PageContainer';

const HelloScreen = (props) => {

  return (
    <PageContainer {...props}>
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
        if (error) return console.log(error) || <Text>Error :(</Text>;

        console.log(data)
        const message = data.greeting.who
        return (
            <View style={styles.container}>
              <Text>{message}</Text>
            </View>
        )
      }}
    </Query>
  </PageContainer>
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
