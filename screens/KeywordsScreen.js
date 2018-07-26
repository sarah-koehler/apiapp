import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import PageContainer from '../components/PageContainer';
import KeywordList from '../components/KeywordList';
import { CTAButton, Headline, SubHeading } from '../components/basics';

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
            <CTAButton onPress={this.onSearch}>
              Search
            </CTAButton>
          </View>
          { showResults && keyword &&
            <View>
              <Headline level='h2'>Similar Keywords</Headline>
              <SubHeading>Select one to start exploring</SubHeading>
              <KeywordList keyword={keyword} />
            </View>
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
    alignItems: 'center',
    justifyContent: 'flex-start',
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

