import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import EditUbicacion from "../screens/EditUbicacion";
import Ubicaciones from "../screens/Ubicaciones";

const Stack = createStackNavigator();

const AppNavigatorU = () => (
  <Stack.Navigator initialRouteName="Situaciones">
    <Stack.Screen
      name="Ubicaciones"
      component={Ubicaciones}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="EditUbicacion"
      component={EditUbicacion}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigatorU;
