import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const scans = [
    { id: 1, name: "Situacion A", date: "12 de marzo de 2023", info: "Información adicional sobre Reporte de situación" },
    { id: 2, name: "Situacion B", date: "14 de marzo de 2023", info: "Información adicional sobre Reporte de situación" },
    { id: 3, name: "Situacion C", date: "16 de marzo de 2023", info: "Información adicional sobre Reporte de situación" },
    { id: 4, name: "Situacion D", date: "18 de marzo de 2023", info: "Información adicional sobre Reporte de situación" },
    { id: 5, name: "Situacion E", date: "20 de marzo de 2023", info: "Información adicional sobre Reporte de situación" },
    { id: 6, name: "Situacion F", date: "22 de marzo de 2023", info: "Información adicional sobre Reporte de situación" },
  ];

const ScanCard = ({ scan }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleExpand}>
      <View style={[styles.scanCard, expanded && styles.expandedCard]}>
        <Text style={styles.scanName}>{scan.name}</Text>
        <Text style={styles.scanDate}>{scan.date}</Text>
        {expanded && <Text style={styles.scanInfo}>{scan.info}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const Escaneos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportes Registrados</Text>
      <View style={styles.scanList}>
        {scans.map((scan) => (
          <ScanCard key={scan.id} scan={scan} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scanList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  scanCard: {
    width: "47%",
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
    borderColor: "#ef5b5b",
    borderEndWidth: 2,
    borderBottomWidth: 1,
  },
  scanName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#36311f",
   paddingTop: 10,
  },
  scanDate: {
    fontSize: 16,
    color: "#888",
  },
  expandedCard: {
    width: "97%",
    height: 140,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
    borderColor: "#ef5b5b",
    borderEndWidth: 10,
    borderBottomWidth: 1,
  },
  expandedName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#003566",
 
  },
  expandedDate: {
    fontSize: 20,
    color: "#888",
    marginBottom: 20,
  },
  scanInfo: {
    fontSize: 16,
    color: "#333",
    marginTop: 10,
  },
});

export default Escaneos;
