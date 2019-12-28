import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export default class extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const AdminData = [
      {
        id: 1,
        content: 'Ürün İlanı',
        backgroundImage: '',
      },
      {
        id: 2,
        content: 'İş İlanı',
        backgroundImage: '',
      },
    ];

    const secondAdminData = [
      {
        id: 3,
        content: 'Duyuru',
        backgroundImage: '',
      },
      {
        id: 4,
        content: 'Mesaj Gönder',
        backgroundImage: '',
      },
    ];
    return (
      <View style={styles.main}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          {AdminData.map((data, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <View>
                <Text>{data.content}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          {secondAdminData.map((data, index) => (
            <TouchableOpacity key={index} style={styles.card}>
              <View>
                <Text>{data.content}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    marginTop: '30%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    width: 150,
    height: 120,
    borderColor: '#000',
    borderWidth: 1,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
});
