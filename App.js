import React from 'react';
import { StyleSheet, View, Platform, StatusBar,Alert } from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import WelcomeScreen from "./src/screens/WelcomeScreen";
import AuthScreen from "./src/screens/AuthScreen";
import MapScreen from "./src/screens/MapScreen";
import DeckScreen from "./src/screens/DeckScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import ReviewScreen from "./src/screens/ReviewScreen";
import {Provider} from 'react-redux';
import Expo, {Notifications} from 'expo'
import store from './src/store';
import registerForNotifications from './src/services/push_notification'

export default class App extends React.Component {
    componentDidMount() {
        registerForNotifications();
        Notifications.addListener((notification) => {
            const { data: { text }, origin } = notification;
            if (origin === 'received' && text) {
                Alert.alert(
                    'New Push Notification',
                    text,
                    [{ text: 'Ok.' }]
                );
            }
        });
    }
  render() {
    const MainNavigator = createBottomTabNavigator({
        welcome: WelcomeScreen,
        auth : AuthScreen,
        main: createBottomTabNavigator({
           map: MapScreen,
           deck : DeckScreen,
           review: createStackNavigator({
               review: ReviewScreen,
               settings: SettingsScreen
           })
         }, {
            tabBarOptions: {
                labelStyle:{fontSize : 12 }
            }
        })
    }, {
        lazy: true,
        navigationOptions: {
            tabBarVisible: false
        }
    });
    return (
    <Provider store={store}>
      <View style={[styles.container]}>
        <MainNavigator/>
      </View>
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
