import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { getApiAccessDataFromStorage, setApiAccessDataInStorage } from '../helpers/apiKey';
import { CTAButton, Headline, SubHeading } from '../components/basics';

import PageContainer from '../components/PageContainer';

const styles = StyleSheet.create({
  headerArea: {
    borderWidth: 10,
    borderColor: 'white',
  },
  inputGroup: {
    flexDirection: 'column',
    alignItems: 'stretch',
    borderWidth: 8,
    borderColor: 'white',
  },
  label: {
    color: '#33001a',
    fontSize: 14,
  },
  input: {
  },
});

class SettingsScreen extends React.Component {

  state = {
    apiKey: '',
    apiSecret: '',
  }

  componentDidMount() {
    getApiAccessDataFromStorage((newState) => this.setState(newState))
  }

  onSave = () => {
    setApiAccessDataInStorage({ ...this.state })
  }


  render () {
    const { navigate } = this.props.navigation;
    return (
      <PageContainer {...this.props}>
        <View style={styles.headerArea}>
          <Headline level='h1'>Security</Headline>
          <SubHeading>Set your API key and secret here</SubHeading>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>API Key: </Text>
          <TextInput
            style={styles.input}
            value={this.state.apiKey}
            placeholder="Enter API Key..."
            onChangeText={(text) => this.setState({ apiKey: text })}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>API Secret: </Text>
          <TextInput
            style={styles.input}
            value={this.state.apiSecret}
            placeholder="Enter API Secret..."
            onChangeText={(text) => this.setState({ apiSecret: text })}
          />
        </View>
        <CTAButton onPress={this.onSave}>
          Save
        </CTAButton>
      </PageContainer>
    );
  }
}

SettingsScreen.navigationOptions = {
  title: 'Settings',
};

export default SettingsScreen;
