import { Picker } from "@react-native-picker/picker";
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import {RutaContext} from "./RutaContext";
import axios from "axios";

const Situacion = ({ navigation }) => {
  const { ruta, setRuta, newSituationAdded, setNewSituationAdded } = useContext(RutaContext);
  const [situation, setSituation] = useState("");
  const [otherSituation, setOtherSituation] = useState("");
  const [description, setDescription] = useState("");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");


  //Para obtener fecha y hora ANTES
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === "Android");
  //   setDate(currentDate);

  //   let tempDate = new Date(currentDate);
  //   let fDate = tempDate.getDate() + "/" + (tempDate.getMonth(), 1) + "/" + tempDate.getFullYear();
  //   let fTime =
  //     "Hours: " + tempDate.getHours() + "| Minutes: " + tempDate.getMinutes();
  //   setText(fDate + "\n" + fTime);
  //   console.log(fDate + "(" + fTime + ")");
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };
  // _-------------------------------------------------

  const sendFormData = () => {
    if (!ruta || !situation || !description || !date) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const actualSituation = situation === "Otro" ? otherSituation : situation;

    const formData = {
      ruta: ruta,
      situacion: actualSituation,
      descripcion: description,
      fecha: date,
    };

    axios
      .post("https://onroute.fly.dev/situaciones", formData)
      .then((response) => {
        console.log(response.data);
        alert('Situacion guardada');
        setSituation('');
        setDescription('');
        setDate(new Date());
        setText('Empty');
        setNewSituationAdded(true);
      })
      .catch((error) => {
        console.log(error);
        alert('Error al guardar la situación');
      });
  };

  const handleSubmit = () => {
    sendFormData();
  };


  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Situación</Text>
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
          <Text style={styles.label}>Descripción</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter description"
            multiline={true}
            numberOfLines={4}
            value={description}
            onChangeText={(value) => setDescription(value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{text}</Text>

        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
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
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
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
