import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const KeywordItem = (props) => {
  const { keyword, cpc } = props.item
  console.log('render item props:', props)
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{keyword}</Text>
      <Text style={styles.itemText}>{cpc}€</Text>
    </View>
  )
}

const KeywordList = (props) => {
  const { keyword } = props
  return (
      <Query
      variables={{ search: keyword, se_id: 1 }}
      query={gql`
        query keywords($search: String!, $se_id: Int!){
          keywords(search: $search, se_id: $se_id) {
            keyword
            keyword_id
            search_volume
            cpc
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <Text>Loading...</Text>;
        if (error) return console.log(error) || <Text>Error :(</Text>;

        const keywordList = data.keywords
          console.log('keywordList', keywordList)
        return (
            <View style={styles.container}>
              <FlatList
                data={keywordList}
                renderItem={(item) => <KeywordItem {...item} />}
                keyExtractor={({ keyword_id }) => keyword_id.toString()}
              />
            </View>
        )
      }}
    </Query>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderWidth: 16,
    borderColor: 'white',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    lineHeight: 24,
  },
});


export default KeywordList;


