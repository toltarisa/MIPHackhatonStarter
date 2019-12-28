import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginTab from './Login';
import RegisterTab from './Register';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Giriş">
            <LoginTab />
          </Tab>
          <Tab heading="Kaydol">
            <RegisterTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}