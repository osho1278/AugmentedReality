/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './screens/home'
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  ViroARSceneNavigator
} from '@viro-community/react-viro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Render3D from 'components/Render3D';
import ARScene from 'screens/ARScene';
import BusinessCard from 'components/BusinessCard';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  function TabNavigation() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AR"
        options={{
          // hide the bottom tab bar on Product Screen
          tabBarStyle: { display: "none" },
          headerShown: false
        }}
        >
          {props => <ViroARSceneNavigator
            initialScene={{
              scene: ARScene,
            }}
            
            autofocus={true}
          />}
          </Tab.Screen>
          <Tab.Screen name="V-Team"
        options={{
          // hide the bottom tab bar on Product Screen
          tabBarStyle: { display: "none" },
          headerShown: false
        }}
        >
          {props => <ViroARSceneNavigator
            initialScene={{
              scene: BusinessCard,
            }}
            
            autofocus={true}
          />}
          </Tab.Screen>
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
       <TabNavigation/>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
