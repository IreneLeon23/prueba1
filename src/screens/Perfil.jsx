import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RutaContext } from "./RutaContext";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";

const Perfil = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [calle, setCalle] = useState("");
  const [cp, setCp] = useState("");

  const { ruta, setRuta, newSituationAdded, setNewSituationAdded } =
    useContext(RutaContext);

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const response = await axios.get(
          `https://onroutebackend.fly.dev/usuario?ruta=${ruta}`
        );
        
        console.log(response.data);
        setName(response.data.nombre);
        setSurname(response.data.apellidos);
        setPhone(response.data.telefono);
        setEmail(response.data.correo);
        setAddress(response.data.colonia);
        setCalle(response.data.calle);
        setCp(response.data.cp);
      } catch (error) {
        console.error("Error al obtener usuario:", error);
      }
    };

    obtenerUsuario();
  }, [ruta]);

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View>
          <Text style={styles.userIcon}>
            <FontAwesome5Icon name="user" size={40} color="#003566" solid />
          </Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.name}>
            {name}
            {" "}
            {surname}
          </Text>
          <TextInput
            editable={false}
            style={styles.id}
            value={ruta}
            onChangeText={(text) => setRuta(text)}
          />
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Telefono:</Text>
          <Text
            style={styles.input}
          >
            {phone}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text
            style={styles.input}
    >
      {email}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Colonia:</Text>
          <Text
            style={styles.input}
          >
            {address}, {calle}
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>C.P:</Text>
          <Text
            style={styles.input}
          >
            {cp}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  userIcon: {
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  id: {
    fontSize: 18,
    color: "#003566",
    fontWeight: "bold",
  },
  form: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#003566",
  },
});

export default Perfil;
