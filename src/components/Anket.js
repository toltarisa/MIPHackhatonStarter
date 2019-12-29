import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { ToastAndroid } from 'react-native';
const ls = require('react-native-local-storage');

export default class extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };
  }

  sendQuestionData = async () => {
    try {
      const data = await ls.get('id');
      this.setState({ Text: data });
    } catch (error) {
      throw error;
    }
    const { text } = this.state;

    const Text = text;
    console.log(Text);
    const url = 'http://10.103.174.191:5000/setQuestion';
    axios
      .post(url, {
        Text,
      })
      .then(res => {
        ToastAndroid.show('Anket Ekleme Başarılı !', ToastAndroid.SHORT);
        this.setState({
          text: '',
        });
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Container>
          <ImageBackground
            source={require('../assets/images/BackGround.jpg')}
            style={{ flex: 1 }}>
            <Content style={styles.content}>
              <Form style={styles.form}>
                <Item style={styles.item} last>
                  <Input
                    onChange={e => this.setState({ text: e.nativeEvent.text })}
                    style={styles.input}
                    placeholder="Soruyu Giriniz"
                    value={this.state.text}
                  />
                </Item>
                <View>
                  <Button
                    onPress={() => {
                      this.sendQuestionData();
                    }}
                    small
                    primary
                    style={{ marginLeft: '50%', width: '45%', height: 50, padding: 10 }}>
                    <Icon color={'#fff'} name="ios-checkmark" size={30} />
                    <Text style={{ paddingLeft: 10, paddingRight: 3, fontSize: 15, color: '#fff' }}>Soruyu Gönder</Text>
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
