
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
  const { setRuta, newSituationAdded, setNewSituationAdded } =
    useContext(RutaContext);

  const [situation, setSituation] = useState(scan.situacion);
  const [description, setDescription] = useState(scan.descripcion);
  const [dateTime, setDateTime] = useState("");
  const now = new Date();
  const dateTimeString = now.toISOString().slice(0, 19).replace("T", " ");

  const showDateTime = () => {
    setDateTime(dateTimeString);
    ToastAndroid.show(dateTimeString, ToastAndroid.SHORT);
  };

  const sendFormData = async () => {
    if (!situation || !description || !dateTime) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const formData = {
      situacion: situation,
      descripcion: description,
      fecha: dateTime,
    };

    try {
      const response = await axios.put(
        `https://onroute.fly.dev/situaciones/${scan._id}`,
        formData
      );
      console.log(response);
      alert("Situacion modificada");
      setNewSituationAdded(true);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      alert("Error al modificar la situacion");
    }
  };

  const handleSubmit = () => {
    sendFormData();
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Situacion:</Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              value={situation}
              onChangeText={(value) => setSituation(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descripcion:</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={4}
            value={description}
            onChangeText={(value) => setDescription(value)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity onPress={showDateTime}>
            <View style={styles.dateButton}>
              <Text style={styles.submitButtonText}>
                <FontAwesome5Icon name="calendar" size={18} color="#fff" />{" "}
                Ingresar fecha y hora
              </Text>
            </View>
          </TouchableOpacity>
          {dateTime ? (
            <Text style={styles.dateSideText}>
              Fecha y hora seleccionada:{" "}
              <Text style={styles.dateText}>{dateTime}</Text>
            </Text>
          ) : null}
        </View>

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
  header: {
    backgroundColor: "#003566",
    padding: 16,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  dateSideText: {
    color: "#888",
    fontSize: 14,
  },
  dateText: {
    color: "#888",
    fontSize: 14,
    fontWeight: "bold",
  },
  form: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
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
  },
  picker: {
    height: 50,
    width: "100%",
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    textAlignVertical: "top",
    marginBottom: 16,
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
