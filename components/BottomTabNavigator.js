import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
        screenOptions = {({route}) => ({
          tabBarIcon:({focused, color, size}) => {
            let Iconname;
            if(route.name === "Transaction"){
              Iconname = "book";
            }else if(route.name === "Search"){
              Iconname = "search";
            }
            return (
              <Ionicons
              name = {Iconname}
              size = {size}
              color = {color}
              ></Ionicons>
            )
          }
        })}
        tabBarOptions = {{
          activeTintColor : "orange",
          inactiveTintColor: "yellow",
          style : {height: 150, borderTopWidth: 0, backgroundColor: "#93E9BE"},
          labelStyle : {fontSize : 20, fontFamily : "Rajdhani_600SemiBold"},
          labelPosition : "beside-icon",
          tabStyle : {marginTop : 25, marginLeft: 10, marginRight: 10, borderRadius: 30, borderWidth: 2, alignItems: 'center', justifyContent:'center', backgroundColor: '#F28500'}
        }}
        >
          <Tab.Screen name="Transaction" component={TransactionScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
