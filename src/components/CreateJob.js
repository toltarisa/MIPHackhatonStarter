import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
const ls = require('react-native-local-storage');
import {ToastAndroid} from 'react-native';
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
      selected2: '',
      text: '',
      category: '',
      UserId: '',
    };
  }

  createJob = async () => {
    try {
      const data = await ls.get('id');
      this.setState({UserId: data});
    } catch (error) {
      throw error;
    }
    const {text, category, UserId} = this.state;
    const title = this.state.selected2;
    const url = 'http://10.103.174.191:5000/addJob';
    axios
      .post(url, {
        title,
        text,
        category,
        UserId,
      })
      .then(res => {
        ToastAndroid.show('İş Ekleme Başarılı', ToastAndroid.SHORT);
        this.setState({selected2: '', text: '', category: '', UserId: ''});
      })
      .catch(err => {
        throw err;
      });
  };
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }
  render() {
    const {selected2} = this.state;
    console.log(selected2);
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
                    value={this.state.text}
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
                <Item style={{flex: 1, marginBottom: 20}} picker>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="ios-arrow-dropdown" />}
                    style={{flex: 1}}
                    placeholderStyle={{color: '#bfc6ea'}}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selected2}
                    onValueChange={data => {
                      this.setState({selected2: data});
                    }}>
                    <Picker.Item label={'Personel'} value={'Personel'} />
                    <Picker.Item label={'Stajyer'} value={'Stajyer'} />
                  </Picker>
                </Item>

                <View>
                  <Button
                    onPress={() => {
                      this.createJob();
                    }}
                    small
                    success
                    style={{
                      width: '40%',
                      height: 50,
                      padding: 10,
                      marginVertical: 20,
                    }}>
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
