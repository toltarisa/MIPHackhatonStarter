import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class DrawerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.clickable}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('About')}
            style={styles.clickable}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>About</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Details')}
            style={styles.clickable}>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}>Details</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 3,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  clickable: {
    marginHorizontal: 15,
  },
  bottom: {
    flex: 4,
  },
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItemText: {
    marginHorizontal: 10,
  },
});
