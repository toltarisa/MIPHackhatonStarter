import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const ls = require('react-native-local-storage');
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {Container, Content, Form, Item, Input, Button} from 'native-base';
import AdminCart from '../components/AdminCarts';
import axios from 'axios';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      modalVisible: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  Login = () => {
    const {email, password} = this.state;
    const url = 'http://10.103.174.191:5000/login';
    const Email = email;
    const Password = password;
    axios
      .post(url, {
        Email,
        Password,
      })
      .then(res => {
        if (res.status === 200) {
          if (res.data.Role === 'M') {
            this.setModalVisible(true);

            ls.save('id', res.data.Id).then(res => {});
          }
          if (res.data.Role === 'E') {
          }
        }
      })
      .catch(err => {
        throw err;
      });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {}}>
            <View style={{marginTop: 22, flex: 1}}>
              <View style={{flex: 1}}>
                <Container>
                  <Content style={styles.content}>
                    <AdminCart />
                  </Content>
                </Container>
              </View>
            </View>
            <View>
              <Button
                style={styles.hidebtn}
                primary
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Icon
                  style={{marginLeft: 10}}
                  color={'#fff'}
                  name="ios-arrow-back"
                  size={20}
                />
              </Button>
            </View>
          </Modal>
        </View>
        <Container style={styles.main}>
          <Content style={styles.content}>
            <Form style={{flex: 1}} onSubmit={this.handleSubmit}>
              <Item style={{flex: 1}}>
                <Input
                  onChange={e => this.setState({email: e.nativeEvent.text})}
                  style={styles.formInput}
                  placeholder="E-Posta"
                />
              </Item>
              <Item>
                <Input
                  onChange={e => this.setState({password: e.nativeEvent.text})}
                  style={styles.formInput}
                  placeholder="Şifre"
                />
              </Item>
              <TouchableOpacity
                onPress={() => this.Login()}
                style={styles.loginButton}>
                <Text style={styles.loginText}>Giriş Yap</Text>
              </TouchableOpacity>
            </Form>
          </Content>
        </Container>
        <View style={{flex: 1}}>
          <Image
            style={styles.image}
            source={require('../assets/images/login.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  content: {
    marginTop: '8%',
  },
  formInput: {
    margin: '1%',
  },
  loginButton: {
    borderRadius: 20,
    marginVertical: '7%',
    marginHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: '#515859',
  },
  loginText: {
    padding: 5,
    fontSize: 21,
    color: 'white',
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'contain',
    width: 300,
    height: 300,
    marginBottom: '30%',
  },
});
