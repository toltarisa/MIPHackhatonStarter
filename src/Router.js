import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import DrawerMenu from './components/DrawerMenu';
import Home from './screens/Home';
import About from './screens/About';
import Details from './screens/Details';
const ModalStack = createStackNavigator(
  {
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
