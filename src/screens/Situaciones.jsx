import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const Situaciones = ({situacion1, fecha1, situacion2, fecha2, situacion3, fecha3}) => {
  return (
    <View style={styles.container}>
      <View style={styles.situacionContainer}>
        <View style={styles.situacionText}>
          <Text>{situacion1}</Text>
        </View>
        <View style={styles.fechaText}>
          <Text>{fecha1}</Text>
        </View>
      </View>
      <View style={styles.situacionContainer}>
        <View style={styles.situacionText}>
          <Text>{situacion2}</Text>
        </View>
        <View style={styles.fechaText}>
          <Text>{fecha2}</Text>
        </View>
      </View>
      <View style={styles.situacionContainer}>
        <View style={styles.situacionText}>
          <Text>{situacion3}</Text>
        </View>
        <View style={styles.fechaText}>
          <Text>{fecha3}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 5,
  },
  situacionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  situacionText: {
    flex: 1,
    alignItems: 'flex-start',
  },
  fechaText: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default Situaciones