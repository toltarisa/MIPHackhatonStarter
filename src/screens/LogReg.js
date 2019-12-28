import React, {Component} from 'react';
import {Container, Header, Content, Tab, Tabs} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import LoginTab from './Login';
import RegisterTab from './Register';
import {withNavigation} from 'react-navigation';

class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading="Giriş">
            <LoginTab navigation={this.props.navigation} />
          </Tab>
          <Tab heading="Kaydol">
            <RegisterTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default withNavigation(TabsExample);
