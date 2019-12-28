import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
const ls = require('react-native-local-storage');
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Picker,
} from 'native-base';
import axios from 'axios';
export default class extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      text: '',
      category: '',

      UserId: '',
    };
  }
  onValueChange2 = value => {
    this.setState({
      title: value,
    });
  };

  createJob = () => {
    ls.get('id').then(data => {
      console.log(data);
      this.setState({UserId: data});
    });
    const {title, text, category, UserId} = this.state;
    const url = 'http://10.103.174.191:5000/addJob';
    axios
      .post(url, {
        title,
        text,
        category,
        UserId,
      })
      .then(res => console.log(res))
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
                    onChange={e => this.setState({text: e.nativeEvent.text})}
                    style={styles.input}
                    placeholder="Açıklama"
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
                <Item picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{width: undefined}}
                    placeholder="Select your SIM"
                    placeholderStyle={{color: '#bfc6ea'}}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.title}
                    onValueChange={this.onValueChange2.bind(this)}>
                    <Picker.Item label="Personel" value="Personel" />
                    <Picker.Item label="Stajyer" value="Stajyer" />
                  </Picker>
                </Item>

                <View>
                  <Button
                    onPress={() => {
                      this.createJob();
                    }}
                    small
                    success
                    style={{width: '40%', height: 50, padding: 10}}>
                    <Icon color={'#fff'} name="ios-checkmark" size={30} />
                    <Text style={{fontSize: 15, color: '#fff'}}>
                      İlan Oluştur
                    </Text>
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
