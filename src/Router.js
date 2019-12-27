import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import DrawerMenu from './components/DrawerMenu';
import Home from './screens/Home';
import About from './screens/About';
import Details from './screens/Details';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Chat, News, Friends, Search} from './screens/index';
import React from 'react';

const TabStack = createBottomTabNavigator(
  {
    Chat: {
      screen: Chat,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-home" size={25} color={tintColor} />
        ),
      },
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-search" size={25} color={tintColor} />
        ),
      },
    },
    Friends: {
      screen: Friends,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-notifications-outline" size={25} color={tintColor} />
        ),
      },
    },
    News: {
      screen: News,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-mail" size={25} color={tintColor} />
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
