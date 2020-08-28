import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OrdinaryDrink from "./tabs/OrdinaryDrink";
import Cocktail from "./tabs/Cocktail";
import Milkshakes from "./tabs/Milkshakes";
import SoftDrinks from "./tabs/SoftDrinks";
import Cocoa from "./tabs/Cocoa";
import Shots from "./tabs/Shots";
import Coffee from "./tabs/Coffee";
import Homemade from "./tabs/Homemade";
import Punches from "./tabs/Punches";
import Beer from "./tabs/Beer";
import Others from "./tabs/Others";

const Tab = createMaterialTopTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    backBehavior="none"
    tabBarOptions={{
      scrollEnabled: true,
      activeTintColor: "#FC5404",
      indicatorStyle:{backgroundColor:"#FC5404"},
      labelStyle: { fontSize: 12 },
      style: { backgroundColor: "white", }
    }}
  >
    <Tab.Screen
      name="Ordinary Drink"
      component={OrdinaryDrink}
      options={{ tabBarLabel: "Ordinary Drink" }}
    />
    <Tab.Screen
      name="Cocktail"
      component={Cocktail}
      options={{ tabBarLabel: "Cocktail" }}
    />
    <Tab.Screen
      name="Milk Shakes"
      component={Milkshakes}
      options={{ tabBarLabel: "Milk Shakes" }}
    />
    <Tab.Screen
      name="Soft Drinks"
      component={SoftDrinks}
      options={{ tabBarLabel: "Soft Drinks" }}
    />
    <Tab.Screen
      name="Cocoa"
      component={Cocoa}
      options={{ tabBarLabel: "Cocoa" }}
    />
    <Tab.Screen
      name="Shots"
      component={Shots}
      options={{ tabBarLabel: "Shots" }}
    />
    <Tab.Screen
      name="Coffee"
      component={Coffee}
      options={{ tabBarLabel: "coffee" }}
    />
    <Tab.Screen
      name="Homemade"
      component={Homemade}
      options={{ tabBarLabel: "Homemade" }}
    />
    <Tab.Screen
      name="Punches"
      component={Punches}
      options={{ tabBarLabel: "Punches" }}
    />
    <Tab.Screen
    name="Beer"
    component={Beer}
    options={{ tabBarLabel: "Beer" }}
  />
    <Tab.Screen
      name="Others"
      component={Others}
      options={{ tabBarLabel: "Others" }}
    />
  </Tab.Navigator>
);
export default MainTabs;
