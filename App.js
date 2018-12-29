import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux'
import ConfigureStore from './src/store/ConfigureStore'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'

import Login from './src/screens/Login/Login'

const store = ConfigureStore();

export function registerScreens() {

  Navigation.registerComponentWithRedux('test.initializing', () => require('./src/screens/Initializing/Initializing').default,Provider,store);
  Navigation.registerComponentWithRedux('test.Login', () => gestureHandlerRootHOC(Login),Provider,store);
  Navigation.registerComponentWithRedux('test.Signup', () => require('./src/screens/Signup/Signup').default,Provider,store);
  Navigation.registerComponentWithRedux('test.AddEmployee', () => require('./src/screens/AddEmployee/AddEmployee').default,Provider,store);
  Navigation.registerComponentWithRedux('test.Home', () => require('./src/screens/Home/Home').default,Provider,store);
  Navigation.registerComponentWithRedux('test.SideMenu', () => require('./src/screens/SideMenu/SideMenu').default,Provider,store);
  Navigation.registerComponentWithRedux('test.ViewEmployee', () => require('./src/screens/ViewEmployee/ViewEmplyee').default,Provider,store);
  Navigation.registerComponentWithRedux('test.AboutUs', () => require('./src/screens/AboutUs/AboutUs').default,Provider,store);


  
}