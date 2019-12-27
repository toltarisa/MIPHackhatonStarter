import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Lightbox from 'react-native-lightbox';
export default class extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <Text>Home Page</Text>
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
