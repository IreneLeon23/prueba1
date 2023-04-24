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

const Situacion = ({ navigation }) => {
  const { ruta, setRuta, newSituationAdded, setNewSituationAdded } =
    useContext(RutaContext);
  const [situation, setSituation] = useState("");
  const [otherSituation, setOtherSituation] = useState("");
  const [description, setDescription] = useState("");

  const [dateTime, setDateTime] = useState("");

  const now = new Date();
  const dateTimeString = now.toISOString().slice(0, 19).replace("T", " ");

  const showDateTime = () => {
    setDateTime(dateTimeString);
    ToastAndroid.show(dateTimeString, ToastAndroid.SHORT);
  };

  const sendFormData = () => {
    if (!ruta || !situation || !description || !dateTime) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const actualSituation = situation === "Otro" ? otherSituation : situation;

    const formData = {
      ruta: ruta,
      situacion: actualSituation,
      descripcion: description,
      fecha: dateTimeString,
    };

    axios
      .post("https://onroute.fly.dev/situaciones", formData)
      .then((response) => {
        console.log(response.data);
        alert("Situacion guardada");
        setSituation("");
        setDescription("");
        setDateTime("");
        setNewSituationAdded(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Error al guardar la situación");
      });
  };

  const handleSubmit = () => {
    sendFormData();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <FontAwesome5Icon name="flag" size={18} color="#003566" /> Situación
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={situation}
              onValueChange={(value) => setSituation(value)}
              style={styles.picker}
            >
              <Picker.Item label="Seleccione una opción..." value="" />
              <Picker.Item label="Choque" value="Choque" />
              <Picker.Item label="Asalto" value="Asalto" />
              <Picker.Item label="Transito" value="Transito" />
              <Picker.Item label="Otro" value="Otro" />
            </Picker>
          </View>
        </View>
        {situation === "Otro" && (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Otro:</Text>
            <TextInput
              style={styles.input}
              placeholder="Especifique la situación"
              onChangeText={(value) => setOtherSituation(value)}
            />
          </View>
        )}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <FontAwesome5Icon name="align-justify" size={18} color="#003566" />{" "}
            Descripción
          </Text>
          <TextInput
            style={styles.textArea}
            placeholder="Ingrese descripción del percance"
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
          <Text style={styles.submitButtonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
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

export default Situacion;
