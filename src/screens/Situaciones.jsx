import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const Situaciones = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={[styles.topinfo, styles.top1]}>Situación</Text>
        <Text style={styles.topinfo}>Fecha: 0/0/0</Text>
        <Text style={styles.color}></Text>
      </View>

      <View style={styles.top}>
        <Text style={[styles.topinfo, styles.top1]}>Situación</Text>
        <Text style={styles.topinfo}>Fecha: 0/0/0</Text>
        <Text style={styles.color}></Text>
      </View>

      <View style={styles.top}>
        <Text style={[styles.topinfo, styles.top1]}>Situación</Text>
        <Text style={styles.topinfo}>Fecha: 0/0/0</Text>
        <Text style={styles.color}></Text>
      </View>

      <TouchableOpacity style={styles.boton}>
        <FontAwesome style={styles.plus} name='plus' size={50} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  boton: {
    width: 80,
    height: 80,
    backgroundColor: "#0A0821",
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 140,
    marginTop: 20,
  },
  label: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700
  },
  boton: {
    backgroundColor: '#0A0821',
    borderRadius: 100,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 140,
    marginTop: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    position: 'relative',
    backgroundColor: '#0A0821',
    width: 350,
    height: 90,
    top: 20,
    left: 5,
    borderRadius: 10,
    marginBottom: 30,
  },
  topinfo: {
    color: 'white',
    fontSize: 25,
    padding: 10,
  },
  top1: {
    fontWeight: 700,
    marginBottom: -20
  },
  color: {
    position: 'absolute',
    backgroundColor: '#FF7A00',
    width: 90,
    height: 90,
    borderRadius: 10,
    left: 260,
  },
});

export default Situaciones