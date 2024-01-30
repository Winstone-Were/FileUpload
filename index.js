/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { ThemeProvider } from 'react-native-ios-kit';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
