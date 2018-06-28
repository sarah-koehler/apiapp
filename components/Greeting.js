import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Query } from "react-apollo";
import gql from "graphql-tag";


const Greeting = (props) => {

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
        if (error) return console.log(error) || <Text>Error :(</Text>;

        const message = data.greeting.who
        return (
            <View style={styles.container}>
              <Text style={{ fontWeight: 'bold' }}>{message}</Text>
              <Text>You are connected to the Searchmetrics GraphQL API</Text>
            </View>
        )
      }}
    </Query>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Greeting;

