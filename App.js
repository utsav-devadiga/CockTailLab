import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./screens/MainStackNavigator";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
   
    return (
      <NavigationContainer>
     <MainStackNavigator/>
    </NavigationContainer>
    );
  }
}
