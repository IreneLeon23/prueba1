import { createDrawerNavigator } from "@react-navigation/drawer";

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Perfil from "./src/screens/Perfil";
import Situacion from "./src/screens/Situacion";
import Mapa from "./src/screens/Mapa";
import Ubicaciones from "./src/screens/Ubicaciones";
import Situaciones from "./src/screens/Situaciones";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { useFonts } from "expo-font";
import RutaContext from "./src/screens/RutaContext";
import RutaProvider from "./src/screens/RutaContext";
import AppNavigator from "./src/components/StackNavigator";
import AppNavigatorU from "./src/components/AlterStackNavigator";

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    setIsLoggedIn(true);
  };
  const [fontsLoaded] = useFonts({
    ProductRegular: require("./src/assets/fonts/ProductRegular.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
    <RutaProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              drawerLabelStyle: {
                fontSize: 16,
                fontFamily: "ProductRegular",
                margin: 5,
                alignItems: "center",
              },
            }}
          >
            <Drawer.Screen
              name="Mapa"
              component={Mapa}
              options={{
                title: "Nueva ubicación",
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome5Icon
                    name="map"
                    size={size}
                    color={focused ? "blue" : "gray"}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Ubicaciones"
              component={AppNavigatorU}
              options={{
                title: "Ubicaciones",
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome5Icon
                    name="map-marker-alt"
                    size={size}
                    color={focused ? "blue" : "gray"}
                    light
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Nueva situación"
              component={Situacion}
              options={{
                title: "Nuevo reporte",
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome5Icon
                    name="file"
                    size={size}
                    color={focused ? "blue" : "gray"}
                  />
                ),
              }}
            />

            <Drawer.Screen
              name="Situaciones"
              component={AppNavigator}
              options={{
                title: "Reportes",
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome5Icon
                    name="copy"
                    size={size}
                    color={focused ? "blue" : "gray"}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Perfil"
              component={Perfil}
              options={{
                title: "Perfil",
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome5Icon
                    name="user"
                    size={size}
                    color={focused ? "blue" : "gray"}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        ) : (
          <Login onLogin={handleSubmit} />
        )}
      </NavigationContainer>
    </RutaProvider>
  );
};

export default App;
