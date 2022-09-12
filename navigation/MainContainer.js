import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import PropTypes from 'prop-types';
// Plus...

// Font Awesome Icons...

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRef } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import Plus from './screens/Plus';
import SettingsScreen from './screens/SettingsScreen';
import Inventory from './screens/Inventory';
import ModelPlus from './screens/modal';
import PassingParams from './screens/PassingParams';
import TodoList from '../Header/TodoList';
import Partiescontent from '../Header/partiescontent';
import morecontent from '../Header/morecontent';

//Screen namess
const homeName = "Dashboard";
const detailsName = "Inventory";
const PlusName = "Plus";
const settingsName = "Parties";
const InventoryName = "More";
const Modelplus = "ModalPlus"
const Tab = createBottomTabNavigator();
const {Navigator, Screen} = createStackNavigator();
// Hiding Tab Names...
export default function App() {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const HomeStack = () => {
    return(
      <Navigator initialRouteName = {"Dashboard"}>
        <Screen
        component={HomeScreen}
        name={'HomeScreen'}
        options={{headerShown:false}}
        />
         <Screen
        component={PassingParams}
        name={'PassingParams'}
        options={{headerShown:false}}
        />
      </Navigator>

    )
  }
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarHideOnKeyboard: true,
        showLabel: true,
        // Floating Tab Bar...
        style: {
          position: 'absolute',
          
          bottom: 40,
          marginHorizontal: 0,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        }
        
      }}>

        <Tab.Screen name={"HomeStack"} component={HomeStack} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 5
            }}>
              <Ionicons
                name="box"
                size={30}
                color={focused ? 'black' : 'grey'}
              ></Ionicons>
            </View>
          ),
          headerShown: false
        }} listeners={({ navigation, route }) => ({
          // 


        })}></Tab.Screen>

        <Tab.Screen name={"Inventory"} component={TodoList} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 5
            }}>
              <Ionicons
                name= "arrow-up"
                size={30}
                color={focused ? 'black' : 'grey'}
              ></Ionicons>
            </View>
          ),
          headerShown: false
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        {

          // Extra Tab Screen For Action Button..
        }

        <Tab.Screen
          name="Plus"
          component={Plus}
          options={{
            tabBarLabelStyle: {
              fontSize: 24,
              fontWeight: "bold",
              fontFamily: "sans-serif-medium"
            },
            tabBarButton: () => {
              return <ModelPlus />
            },
            tabBarLabel: ({ }) => {
              return null; //no label will be displayed
            },
            headerShown: false
          }}
        />
        <Tab.Screen name={"Parties"} component={Partiescontent} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 5
            }}>
              <Ionicons
                name="people-sharp"
                size={30}
                color={focused ? 'black' : 'grey'}
              ></Ionicons>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Team Member`s"} component={morecontent} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 5
            }}>
              <Ionicons
                name="ellipsis-vertical-sharp"
                size={30}
                color={focused ? 'black' : 'grey'}
              ></Ionicons>
            </View>
          ),
          //headerShown: false
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});