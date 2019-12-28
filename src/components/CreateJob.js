import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {Container, Content, Form, Item, Input, Button} from 'native-base';
export default class extends Component {
  constructor() {
    super();

    this.state = {};
  }

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
                  />
                </Item>
                <Item style={styles.item} last>
                  <Input
                    onChange={e => this.setState({price: e.nativeEvent.text})}
                    style={styles.input}
                    placeholder="Fiyat"
                  />
                </Item>
                <Item style={styles.item} last>
                  <Input
                    onChange={e => this.setState({stok: e.nativeEvent.text})}
                    style={styles.input}
                    placeholder="Stok"
                  />
                </Item>
                <Item style={styles.item} last>
                  <Input
                    onChange={e =>
                      this.setState({category: e.nativeEvent.text})
                    }
                    style={styles.input}
                    placeholder="Kategori"
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
