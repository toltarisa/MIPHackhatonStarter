import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {Container, Content, Form, Item, Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {ToastAndroid} from 'react-native';
const ls = require('react-native-local-storage');
export default class extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      price: '',
      stok: '',
      category: '',
      UserId: '',
    };
  }

  sendProductData = async () => {
    try {
      const data = await ls.get('id');
      this.setState({UserId: data});
    } catch (error) {
      throw error;
    }
    const {name, price, stok, category, UserId} = this.state;

    const Name = name;
    const Price = price;
    const Stock = stok;
    const Category = category;
    console.log(Name, Price, Stock, Category, UserId);
    const url = 'http://10.103.174.191:5000/addCompanyProduct';
    axios
      .post(url, {
        UserId,
        Name,
        Price,
        Stock,
        Category,
      })
      .then(res => {
        ToastAndroid.show('Ürün Ekleme Başarılı !', ToastAndroid.SHORT);
        this.setState({
          name: '',
          price: '',
          stok: '',
          category: '',
          UserId: '',
        });
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Container>
          <ImageBackground
            source={require('../assets/images/BackGround.jpg')}
            style={{flex: 1}}>
            <Content style={styles.content}>
              <Form style={styles.form}>
                <Item style={styles.item} last>
                  <Input
                    onChange={e => this.setState({name: e.nativeEvent.text})}
                    style={styles.input}
                    placeholder="Ürün Adı"
                    value={this.state.name}
                  />
                </Item>
                <Item style={styles.item} last>
                  <Input
                    onChange={e => this.setState({price: e.nativeEvent.text})}
                    style={styles.input}
                    placeholder="Fiyat"
                    value={this.state.price}
                  />
                </Item>
                <Item style={styles.item} last>
                  <Input
                    onChange={e => this.setState({stok: e.nativeEvent.text})}
                    style={styles.input}
                    placeholder="Stok"
                    value={this.state.stok}
                  />
                </Item>
                <Item style={styles.item} last>
                  <Input
                    onChange={e =>
                      this.setState({category: e.nativeEvent.text})
                    }
                    style={styles.input}
                    placeholder="Kategori"
                    value={this.state.category}
                  />
                </Item>

                <View>
                  <Button
                    onPress={() => {
                      this.sendProductData();
                    }}
                    small
                    success
                    style={{width: '30%', height: 50, padding: 10}}>
                    <Icon color={'#fff'} name="ios-checkmark" size={30} />
                    <Text style={{fontSize: 15, color: '#fff'}}>Gönder</Text>
                  </Button>
                </View>
              </Form>
            </Content>
          </ImageBackground>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {},
  content: {},
  form: {
    padding: 10,
  },
  item: {
    marginVertical: 10,
  },
  input: {
    padding: 5,
    fontSize: 16,
  },
});
