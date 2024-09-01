import { Picker } from "@react-native-picker/picker";
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

import { RutaContext } from "./RutaContext";
import axios from "axios";
import { useRoute } from "@react-navigation/native";

const EditSituacion = ({ navigation }) => {
  const route = useRoute();
  const { scan } = route.params;

  const [ruta, setRuta] = useState(scan.ruta);
  const [tienda, setTienda] = useState(scan.tienda);
  const [colonia, setColonia] = useState(scan.colonia);
  const [calle, setCalle] = useState(scan.calle);
  const [cp, setCP] = useState(scan.cp);

  const showDateTime = () => {
    setDateTime(dateTimeString);
    ToastAndroid.show(dateTimeString, ToastAndroid.SHORT);
  };

  const sendFormData = async () => {
    if (!ruta || !tienda || !colonia || !calle || !cp ) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const formData = {
      tienda: tienda,
      colonia: colonia,
      calle: calle,
      cp: cp,
    };

    try {
      const response = await axios.put(
        `https://onroute.fly.dev/postubicacion/${scan._id}`,
        formData
      );
      console.log(response);
      alert("Ubicación modificada");
      setNewSituationAdded(true);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      alert("Error al modificar la ubicación");
    }
  };

  const handleSubmit = () => {
    sendFormData();
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {/* Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <FontAwesome5Icon name="user" size={18} color="#003566" solid />{" "}
            Ruta
          </Text>
          <View style={styles.pickerContainer}>
            <TextInput
              editable={false}
              style={styles.textInput}
              value={ruta}
              onChangeText={(value) => setRuta(value)}
            />
          </View>
        </View>
        {/* Termina input */}
        {/* Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <FontAwesome5Icon name="store" size={18} color="#003566" /> Tienda
          </Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              value={tienda}
              onChangeText={(value) => setTienda(value)}
            />
          </View>
        </View>
        {/* Termina input */}
        {/* Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <FontAwesome5Icon name="map-marker-alt" size={18} color="#003566" />{" "}
            Colonia
          </Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              value={colonia}
              onChangeText={(value) => setColonia(value)}
            />
          </View>
        </View>
        {/* Termina input */}
        {/* Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <FontAwesome5Icon name="road" size={18} color="#003566" /> Calle
          </Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              value={calle}
              onChangeText={(value) => setCalle(value)}
            />
          </View>
        </View>
        {/* Termina input */}
        {/* Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <FontAwesome5Icon name="mail-bulk" size={18} color="#003566" />{" "}
            Código postal
          </Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              value={cp}
              onChangeText={(value) => setCP(value)}
            />
          </View>
        </View>
        {/* Termina input */}

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Actualizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditSituacion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    padding: 16,
  },
  inputContainer: {
    marginHorizontal: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#003566",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    height: 35,
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: "#003566",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  dateButton: {
    backgroundColor: "#4287f5",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    height: 50,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  datepicker: {
    width: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
