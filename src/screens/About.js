import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
export default class extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={{flex: 1}}>
          <Button style={{width: 100}} success>
            <Text style={{color: '#fff'}}> Success </Text>
          </Button>
        </View>
        <View style={{flex: 1}}>
          <Button style={{width: 100}} danger>
            <Icon name="ios-navigate" size={40} color="#fff" />
            <Text style={{color: '#fff'}}> Danger </Text>
          </Button>
        </View>
        <View style={{flex: 1}}>
          <Spinner color="#9a69c5" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
