import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>Details Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,

    backgroundColor: '#fff',
  },
});
