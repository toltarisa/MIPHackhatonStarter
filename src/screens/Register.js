import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  Container,
  Button,
  Content,
  Header,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isim: '',
      soyisim: '',
      tckimlik: '',
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <Container style={styles.main}>
        <ImageBackground
          source={require('../assets/images/BackGround.jpg')}
          style={{flex: 1}}>
          <Content style={styles.content}>
            <Form onSubmit={this.handleSubmit}>
              <Item>
                <Input
                  onChange={e => this.setState({isim: e.nativeEvent.text})}
                  style={styles.formInput}
                  placeholder="İsim"
                />
              </Item>
              <Item>
                <Input
                  onChange={e => this.setState({soyisim: e.nativeEvent.text})}
                  style={styles.formInput}
                  placeholder="Soy İsim"
                />
              </Item>
              <Item>
                <Input
                  onChange={e => this.setState({tckimlik: e.nativeEvent.text})}
                  style={styles.formInput}
                  placeholder="TC Kimlik Numarası"
                />
              </Item>
              <Item>
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
                onPress={this.onPress}
                style={styles.loginButton}>
                <Text style={styles.loginText}>Kayıt Ol</Text>
              </TouchableOpacity>
            </Form>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: '8%',
  },
  formInput: {
    margin: '1%',
  },
  loginButton: {
    borderRadius: 20,

    marginTop: '20%',
    marginHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: '#515859',
  },
  loginText: {
    padding: 5,
    fontSize: 21,
    color: 'white',
  },
});
