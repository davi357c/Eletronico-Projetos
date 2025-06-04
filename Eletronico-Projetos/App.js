import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home.js'
import cadastroViagem from './screens/cadastroViagens.js'

function BottomTabs() {
  const BottomTab = createBottomTabNavigator();
  return (
      <BottomTab.Navigator 
        initialRouteName='Home'
        screenOptions={{ 
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'cyan',
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: '#000000',
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: '#050545',
        }}>
        <BottomTab.Screen name="home" component={cadastroViagem} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="box" color={color} size={26} />
            ),
        }}/>
      </BottomTab.Navigator>
 
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='home' component={cadastroViagem}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}