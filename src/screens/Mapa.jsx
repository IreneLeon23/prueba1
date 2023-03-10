import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Mapa = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AQUI VA EL MAPA DE GOOGLE MAPS (NO SE COMO SE PONE)</Text>
    </View>
  )
}

Mapa.navigationOptions = {
  drawerLabel: 'Mapa',
  drawerIcon: () => (
    <FontAwesome name='map' size={30} color="red"/> 
  ),
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginTop: 58,
    fontSize: 30,
    fontWeight: 700,
    color: 'black',
    lineHeight: 48,
    marginBottom: -10,
  },
})

export default Mapa