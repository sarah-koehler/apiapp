import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import PageContainer from '../components/PageContainer';
import KeywordList from '../components/KeywordList';

class KeywordsScreen extends React.Component {

  state = {
    keyword: '',
    showResults: false,
  }

  onSearch = () => {
    this.setState({ showResults: true })
  }

  render () {
    const { keyword, showResults } = this.state
    return (
      <PageContainer {...this.props}>
        <View style={styles.container}>
          <View style={styles.inputGroup}>
            <Text>Enter a Keyword: </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter a Keyword..."
              onChangeText={(text) => this.setState({ showResults: false, keyword: text })}
              value={keyword}
              placeHolderColor="grey"
            />
            <Button
              title="Search"
              onPress={this.onSearch}
              color="#990099"
            />
          </View>
          { showResults && keyword &&
            <KeywordList keyword={keyword} />
          }
        </View>
      </PageContainer>
    );
  }
}

KeywordsScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputGroup: {
    height: 150,
    justifyContent: 'space-around',
  },
  input: {
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: "#4d0026",
    textAlign: 'center',
  },
});

export default KeywordsScreen;

