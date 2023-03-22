import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Situacion from "../screens/Situacion";
import SituacionAgregar from "../screens/SituacionAgregar";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home */}
        <Stack.Screen name="Home" component={Home} />
        {/* Situacion */}
        <Stack.Screen name="Situacion" component={Situacion} />
        {/* SituacionAgregar */}
        <Stack.Screen name="SitacionAgregar" component={SituacionAgregar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
