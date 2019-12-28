import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Container, Button, Content, Header, Form, Item, Input, Label } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <Container style={styles.main}>
        <Content style={styles.content}>
          <Form onSubmit={this.handleSubmit}>
            <Item>
              <Input onChange={e => this.setState({ email: e.nativeEvent.text })} style={styles.formInput} placeholder="E-Posta" />
            </Item>
            <Item>
              <Input onChange={e => this.setState({ password: e.nativeEvent.text })} style={styles.formInput} placeholder="Şifre" />
            </Item>
            <TouchableOpacity onPress={this.onPress} style={styles.loginButton}><Text style={styles.loginText}>KAYDOL</Text></TouchableOpacity>
          </Form>
        </Content>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginTop: '8%'
  },
  formInput: {
    margin: '1%',
  },
  loginButton: {
    borderRadius: 20,
    marginVertical: '7%',
    marginHorizontal: '5%',
    alignItems: 'center',
    backgroundColor: '#515859'
  },
  loginText: {
    padding: 5,
    fontSize: 21,
    color: 'white'
  }
});
