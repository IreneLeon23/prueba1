import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const Situacion = ({ navigation }) => {
  const [situation, setSituation] = useState("");
  const [description, setDescription] = useState("");

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "Android");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + "/" + (tempDate.getMonth(), 1) + "/" + tempDate.getFullYear();
    let fTime =
      "Hours: " + tempDate.getHours() + "| Minutes: " + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);
    console.log(fDate + "(" + fTime + ")");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const handleSubmit = () => {
    setOpcionSituacion("");
    setDescripcion("");
    setFecha("");
    alert("Situación Guardada");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Situaciones</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Situation:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={situation}
              onValueChange={(value) => setSituation(value)}
              style={styles.picker}
            >
              <Picker.Item label="Select a situation..." value="" />
              <Picker.Item label="Situation 1" value="Situation 1" />
              <Picker.Item label="Situation 2" value="Situation 2" />
              <Picker.Item label="Situation 3" value="Situation 3" />
            </Picker>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter description"
            multiline={true}
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{text}</Text>
          <Text style={styles.label}>Date:</Text>
          {/* Fecha ---------------------------------------------------*/}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => showMode("date")}
          >
            <Text style={styles.submitButtonText}>Fecha</Text>
          </TouchableOpacity>
          {/* Hora ------------------------------------------------*/}
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => showMode("time")}
          >
            <Text style={styles.submitButtonText}>Hora</Text>
          </TouchableOpacity>
        {show && (
          <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour="true"
          display="default"
          onChange={onChange}
          />
        )}
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
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
