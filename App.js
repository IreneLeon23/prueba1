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
import { useFonts } from "expo-font";
import RutaContext from "./src/screens/RutaContext";
import RutaProvider from "./src/screens/RutaContext";
import AppNavigator from "./src/components/StackNavigator";

const Drawer = createDrawerNavigator();

const App = () => {
<<<<<<< HEAD
=======

>>>>>>> e557c0fd7bbba3d780d6a252e3f2fe4a23775537
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = () => {
    setIsLoggedIn(true);
  };
  const [fontsLoaded] = useFonts({
    ProductRegular: require("./src/assets/fonts/ProductRegular.ttf"),
  });
  if (!fontsLoaded) return null;
  return (
<<<<<<< HEAD
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
          {/* <Drawer.Screen
            name="Inicio"
            component={Home}
            options={{
              title: "Inicio",
              drawerIcon: ({ focused, size }) => (
                <FontAwesome
                  name="home"
                  size={size}
                  color={focused ? "blue" : "gray"}
                />
              ),
            }}
          /> */}
          <Drawer.Screen
            name="Ubicaciones"
            component={Ubicaciones}
            options={{
              title: "Ubicaciones",
              drawerIcon: ({ focused, size }) => (
                <FontAwesome
                  name="map-pin"
                  size={size}
                  color={focused ? "blue" : "gray"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Mapa"
            component={Mapa}
            options={{
              title: "Mapa",
              drawerIcon: ({ focused, size }) => (
                <FontAwesome
                  name="map"
                  size={size}
                  color={focused ? "blue" : "gray"}
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
                <FontAwesome
                  name="file"
                  size={size}
                  color={focused ? "blue" : "gray"}
                />
              ),
            }}
          />

          <Drawer.Screen
            name="Situaciones"
            component={Situaciones}
            options={{
              title: "Reportes",
              drawerIcon: ({ focused, size }) => (
                <FontAwesome
                  name="exclamation-triangle"
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
                <FontAwesome
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
=======
    <RutaProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{ drawerLabelStyle: { fontSize: 16, fontFamily: "ProductRegular", margin: 5, alignItems: "center"} }}
          >
            <Drawer.Screen
              name="Inicio"
              component={Home}
              options={{
                title: "Inicio",
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome
                    name="home"
                    size={size}
                    color={focused ? "blue" : "gray"}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Mapa"
              component={Mapa}
              options={{
                title: "Mapa",
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome
                    name="map"
                    size={size}
                    color={focused ? "blue" : "gray"}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Ubicaciones"
              component={Escaneos}
              options={{
                title: "Ubicaciones",
                drawerIcon: ({ focused, size }) => (
                  <FontAwesome
                    name="map-pin"
                    size={size}
                    color={focused ? "blue" : "gray"}
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
                  <FontAwesome
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
                  <FontAwesome
                    name="exclamation-triangle"
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
                  <FontAwesome
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
>>>>>>> e557c0fd7bbba3d780d6a252e3f2fe4a23775537
  );
};

export default App;
