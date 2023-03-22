import { createDrawerNavigator } from '@react-navigation/drawer';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Perfil from './src/screens/Perfil';
import Situacion from './src/screens/Situacion';
import Mapa from './src/screens/Mapa';
import Escaneos from './src/screens/Escaneos';
import Situaciones from './src/screens/Situaciones';
import { FontAwesome } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleSubmit = () => {
    setIsLoggedIn(true);
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Drawer.Navigator initialRouteName='Home' screenOptions={{drawerLabelStyle: {fontSize: 20}}}>
          <Drawer.Screen name='Inicio' component={Home} options={{
            title: 'Inicio',
            drawerIcon: ({focused, size}) => (
              <FontAwesome name='home' size={size} color={focused ? 'blue' : 'gray'} />
            )
          }}/>
          <Drawer.Screen name='Perfil' component={Perfil} options={{
            title: 'Perfil',
            drawerIcon: ({focused, size}) => (
              <FontAwesome name='user' size={size} color={focused ? 'blue' : 'gray'} />
            )
          }}/>
          <Drawer.Screen name='Nueva situación' component={Situacion} options={{
            title: 'Nueva situación',
            drawerIcon: ({focused, size}) => (
              <FontAwesome name='bell' size={size} color={focused ? 'blue' : 'gray'} />
            )
          }}/>
          <Drawer.Screen name='Mapa' component={Mapa} options={{
            title: 'Mapa',
            drawerIcon: ({focused, size}) => (
              <FontAwesome name='map' size={size} color={focused ? 'blue' : 'gray'} />
            )
          }}/>
          <Drawer.Screen name='Ubicaciones' component={Escaneos} options={{
            title: 'Ubicaciones',
            drawerIcon: ({focused, size}) => (
              <FontAwesome name='map-marker' size={size} color={focused ? 'blue' : 'gray'} />
            )
          }}/>
          <Drawer.Screen name='Situaciones' component={Situaciones} options={{
            title: 'Situaciones',
            drawerIcon: ({focused, size}) => (
              <FontAwesome name='exclamation-triangle' size={size} color={focused ? 'blue' : 'gray'} />
            )
          }}/>
        </Drawer.Navigator>
      ) : (
        <Login onLogin={handleSubmit} />
      )}
    </NavigationContainer>
  )
}

export default App;