import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import DrawerMenu from './components/DrawerMenu';
import Home from './screens/Home';
import About from './screens/About';
import Details from './screens/Details';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { Chat, LogIn, Friends, JobIntern } from './screens/index';

const TabStack = createBottomTabNavigator(
  {
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={25} color={tintColor} />
        ),
      },
    },
    İş: {
      screen: JobIntern,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-list" size={35} color={tintColor} />
        ),
      },
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-notifications-outline" size={25} color={tintColor} />
        ),
      },
    },
    Giriş: {
      screen: LogIn,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-log-in" size={25} color={tintColor} />
        ),
      },
    },
  },
  {},
);
const ModalStack = createStackNavigator(
  {
    Tabs: {
      screen: TabStack,
    },
    Home: {
      screen: Home,
    },
    About: {
      screen: About,
    },
    Details: {
      screen: Details,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    ModalStack: {
      screen: ModalStack,
    },
  },
  {
    contentComponent: DrawerMenu,
  },
);

export default createAppContainer(DrawerNavigator);
