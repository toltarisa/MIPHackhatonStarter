import React, {Component} from 'react';
import {StyleSheet, View, Text, Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card, CardItem, Body, Button, Content} from 'native-base';
import axios from 'axios';
export default class extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  getProducts = () => {
    const url = 'http://10.103.174.191:5000/getCompanyProduct';
    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.setState({products: res.data});
      })
      .catch(err => {
        throw err;
      });
  };
  componentDidMount = () => {
    this.getProducts();
  };

  render() {
    const {products} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {products.map((data, index) => (
            <View key={index} style={styles.card}>
              <Content>
                <Card>
                  <CardItem
                    style={{flex: 1, justifyContent: 'space-between'}}
                    header>
                    <Text>Ürün: {data.Name}</Text>
                    <Text>Fiyat: {data.Price}</Text>
                  </CardItem>
                  <CardItem>
                    <Body
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text>Firma Adı: {data.CompanyName}</Text>
                      <Text>Stock: {data.Stock}</Text>
                    </Body>
                  </CardItem>
                  <CardItem footer style={styles.footer}>
                    <Text>Kategori: {data.Category}</Text>
                    <Button
                      onPress={() => {
                        this.setModalVisible(true);
                      }}
                      small
                      success
                      style={styles.button}>
                      <Icon
                        style={{marginRight: 10}}
                        color={'#fff'}
                        name="ios-checkmark"
                        size={20}
                      />
                      <Text style={styles.textColor}>Satın Al</Text>
                    </Button>
                  </CardItem>
                </Card>
              </Content>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    marginVertical: 0,
    marginVertical: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 10,
  },
  textColor: {
    color: '#fff',
  },
});
