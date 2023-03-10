import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react';

const Home = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
    title: {
      marginTop: 58,
      fontSize: 50,
      fontWeight: 700,
      color: 'black',
      lineHeight: 48,
      marginBottom: -10,
    },
  })

export default Home