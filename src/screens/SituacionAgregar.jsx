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

const SituacionAgregar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>SITUACIÓN:</Text>
      <Picker
        style={styles.input}
        selectedValue={opcionSituacion}
        onValueChange={(itemValue, itemIndex) => setOpcionSituacion(itemValue)}
      >
        <Picker.Item label="Opcion 1" value="opcion1" />
        <Picker.Item label="Opcion 2" value="opcion2" />
        <Picker.Item label="Opcion 3" value="opcion3" />
      </Picker>

      <Text style={styles.label}>DESCRIPCIÓN:</Text>
      <TextInput
        value={descripcion}
        onChangeText={(text) => setDescripcion(text)}
        multiline={true}
        style={[styles.input, styles.textarea]}
      ></TextInput>

      <Text style={styles.label}>FECHA:</Text>
      <TextInput
        value={fecha}
        onChangeText={(text) => setFecha(text)}
        placeholder="DD-MM-AAAA"
        keyboardType="numeric"
        style={styles.input}
      ></TextInput>
      <FontAwesome
        style={styles.calendar}
        name="calendar"
        size={35}
        color="black"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SituacionAgregar;
