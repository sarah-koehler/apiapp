import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Spinner } from './basics';

const Status = ({ text, isError }) => {
  const indicatorStyle = isError ? styles.indicatorError : styles.indicatorSuccess;
  return (
    <View style={styles.status}>
      <View style={indicatorStyle} />
      <View style={styles.textContainer}>
        <Text>{text}</Text>
      </View>
    </View>
  )
}

const Greeting = (props) => {

  return (
      <Query
      errorPolicy="all"
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
        if (loading) { return <Spinner /> }
        if (error) {
          const { graphQLErrors, networkError } = error
          if (graphQLErrors.length > 0) {
            console.log('graphQL error occured:', graphQLErrors)
            return <Status isError text="GraphQL error" />
          }
          if (networkError) {
            const { response, statusCode, result } = networkError

            if (statusCode === 403 || statusCode === 401) {
              return <Status isError text="Authorization required, check the Settings." />
            }
            return <Status isError text="Network error" />
          }
          //TODO find out how a timeout looks like
        }

        const message = data.greeting.who
        return (
            <View style={styles.container}>
              <Status text={message} />
              <Text>You are connected to the Searchmetrics GraphQL API</Text>
            </View>
        )
      }}
    </Query>
  );
}

const indicatorBase = {
  height: 15,
  width: 15,
  borderRadius: 8,
  marginRight: 5,
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    overflow: 'hidden', //TODO: this does not work properly
  },
  indicatorSuccess: {
    ...indicatorBase,
    backgroundColor: 'lightgreen',
  },
  indicatorError: {
    ...indicatorBase,
    backgroundColor: 'red',
  },
});


export default Greeting;

