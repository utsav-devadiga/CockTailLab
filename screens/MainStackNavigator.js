import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";
import Icon from "react-native-vector-icons/Ionicons";
import SearchScreen from "./SearchScreen";
import DeveloperContactScreen from "./DeveloperContactScreen";
import MainTabs from "./MainTabs";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import DetailScreen2 from "./DetailScreen2";

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createSharedElementStackNavigator();


const MainStackNavigator = () => (
  <Tab.Navigator
    shifting={true}
    backBehavior="none"
    initialRouteName="Home"
    activeColor="#fff"
    barStyle={{height:50,}}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
        tabBarColor: "#FC5404",
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-search" color={color} size={26} />
        ),
        tabBarColor: "#FC5404",
      }}
    />

    <Tab.Screen
      name="Developer"
      component={DeveloperContactScreen}
      options={{
        tabBarLabel: "Feedback",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-aperture" color={color} size={26} />
        ),
        tabBarColor: "#FC5404",
      }}
    />
  </Tab.Navigator>
);

export default MainStackNavigator;





const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Cocktail²ab",
        headerShown: true,
        headerStyle: {
          backgroundColor: "#FC5404",
        },
        headerTitleAlign: "center",
        headerStatusBarHeight: 12,
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
    <HomeStack.Screen
      name="Details"
      component={DetailScreen}
      
      options={navigation=>({headerBackTitleVisible:false,headerShown:false,backgroundColor:'transparent',
      cardStyleInterpolator:({current:{progress}})=>{
    return{
      cardStyle:{
        opacity:progress
      }
    }
  }
  })}

      sharedElements={(route)=>{
        const {data}=route.params
        return[
          {
          id:`item.${data.idDrink}.photo`,
          animation: 'move',
          resize:'clip',
          align:'center-top'
           },
           {
            id:`item.${data.strDrink}.text`,
            animation: 'move',
            resize:'clip',
            align:'center-top'
             }]
      }}
    />
    <HomeStack.Screen
    name="list"
    backBehavior='Home'
    component={MainTabs}
    options={{title:"Categories",headerBackTitle:'Back', headerTintColor: "#FC5404",  headerTitleAlign: "center",}}/>

<HomeStack.Screen
    name="Detail2"
    backBehavior='list'
    component={DetailScreen2}
    options={{title:"Categories",headerBackTitle:'Back', headerTintColor: "#FC5404",  headerTitleAlign: "center",}}/>

  </HomeStack.Navigator>
  
);



