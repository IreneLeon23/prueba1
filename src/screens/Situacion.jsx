import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const Situacion = ({navigation}) => {

  const [opcionSituacion, setOpcionSituacion] = useState('opcion1');
  const [descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = () => {
    setOpcionSituacion('')
    setDescripcion('')
    setFecha('')
    alert('Situación Guardada')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>SITUACIÓN:</Text>
      <Picker style={styles.input} selectedValue={opcionSituacion} onValueChange={(itemValue, itemIndex) => setOpcionSituacion(itemValue)}>
        <Picker.Item label='Opcion 1' value='opcion1' />
        <Picker.Item label='Opcion 2' value='opcion2' />
        <Picker.Item label='Opcion 3' value='opcion3' />
      </Picker>

      <Text style={styles.label}>DESCRIPCIÓN:</Text>
      <TextInput value={descripcion} onChangeText={text => setDescripcion(text)} multiline={true} style={[styles.input, styles.textarea]}></TextInput>

      <Text style={styles.label}>FECHA:</Text>
      <TextInput value={fecha} onChangeText={text => setFecha(text)} placeholder='DD-MM-AAAA' keyboardType='numeric' style={styles.input}></TextInput>
      <FontAwesome style={styles.calendar} name='calendar' size={35} color='black'/>

      <TouchableOpacity style={styles.button} onPress={ () => {
          navigation.navigate('Profile')
      }}>
        <Text style={styles.buttonText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  calendar: {
    position: 'absolute',
    top: 395,
    left: 295
  },
  label: {
    fontSize: 25,
    fontWeight: 700,
    lineHeight: 30,
    color: 'black',
    marginTop: 30,
    marginLeft: 15,
    marginBottom: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    padding: 10,
    width: '90%',
    fontSize: 20,
    color: 'black',
    marginLeft: 15,
  },
  textarea:{
    height: 150,
  },
  button: {
    backgroundColor: '#003566',
    width: 158,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 100
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
  },
})

export default Situacion