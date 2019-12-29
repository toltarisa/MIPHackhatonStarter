import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import DrawerMenu from './components/DrawerMenu';
import Home from './screens/Home';
import About from './screens/About';
import Details from './screens/Details';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


import {
  Chat,
  Announcement,
  LogIn,
  Friends,
  JobIntern,
  SatinAl,
  Admin,
  CreateJobApplicant,
  CreateSellingProduct,
} from './screens/index';


import React from 'react';

const TabStack = createBottomTabNavigator(
  {
    Anasayfa: {
      screen: Announcement,
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

const AfterLoginTab = createBottomTabNavigator(
  {
    SatinAl: {
      screen: SatinAl,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={25} color={tintColor} />
        ),
      },
    },
    Admin: {
      screen: Admin,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-list" size={35} color={tintColor} />
        ),
      },
    },
    CreateJobApplicant: {
      screen: CreateJobApplicant,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-notifications-outline" size={25} color={tintColor} />
        ),
      },
    },
    CreateSellingProduct: {
      screen: CreateSellingProduct,
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
    AfterLoginTab: {
      screen: AfterLoginTab,
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
