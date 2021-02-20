import React, { Component } from "react";
import { View, ScrollView, TouchableOpacity, AsyncStorage, FlatList, Modal, Image, Switch } from 'react-native';
import Nav from './src/Router/index'
 import SplashScreen from 'react-native-splash-screen';
 import firebase from 'firebase';

const config = {
  databaseURL: "https://new-bus-track.firebaseio.com",
  projectId: "new-bus-track",
};

export default class App extends Component {
  constructor() {
    super();
  }
   
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 600);
  }
  render() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }
    return (
      <Nav></Nav>
    )
  }

}