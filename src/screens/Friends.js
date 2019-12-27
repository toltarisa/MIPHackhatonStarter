import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <View style={styles.main}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
          style={styles.menu}>
          <Icon name="ios-menu" size={40} />
        </TouchableOpacity>
        <Text>Friends Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,

    backgroundColor: '#fff',
  },
  menu: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
