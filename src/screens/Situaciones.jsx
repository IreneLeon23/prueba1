import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import { RutaContext } from "./RutaContext";
import { ScrollView } from "react-native";

const ScanCard = ({ scan, navigation }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleEditPress = (event) => {
    event.stopPropagation();
    navigation.navigate("EditSituacion", { scan: scan });
  };

  return (
    <View style={[styles.scanCard, expanded && styles.expandedCard]}>
      <TouchableWithoutFeedback onPress={toggleExpand}>
        <View style={{ flex: 1 }}>
          <Text style={styles.scanName}><FontAwesome5Icon name="flag" style={styles.icon} /> {scan.situacion}</Text>
          <Text style={styles.scanDate}><MaterialIcons name="date-range" style={styles.icon} /> {scan.fecha}</Text>
          {expanded && <Text style={styles.scanInfo}><FontAwesome5Icon name="align-justify" style={styles.icon} /> {scan.descripcion}</Text>}
        </View>
      </TouchableWithoutFeedback>
      {expanded && (
        <View style={styles.editIconContainer}>
          <TouchableWithoutFeedback onPress={handleEditPress}>
            <FontAwesome
              name="edit"
              size={25}
              color="#ef5b5b"
              style={{ top: -7 }}
            />
          </TouchableWithoutFeedback>
        </View>
      )}
    </View>
  );
};

const Ubicaciones = ({ navigation }) => {
  const [situaciones, setSituaciones] = useState([]);
  const { ruta, setRuta, newSituationAdded, setNewSituationAdded } =
    useContext(RutaContext);

  useEffect(() => {
    const obtenerSituaciones = async () => {
      try {
        const response = await axios.get(
          `https://onroute.fly.dev/situaciones?ruta=${ruta}`
        );
        setSituaciones(response.data);
      } catch (error) {
        console.error("Error al obtener situaciones:", error);
      }
    };

    obtenerSituaciones();
    setNewSituationAdded(false);
  }, [ruta, newSituationAdded]);

  return (
    <View style={styles.container}>

      <ScrollView
        style={styles.scanList}
        contentContainerStyle={styles.contentContainer}
      >
        {situaciones.map((scan, index) => (
          <ScanCard key={index} scan={scan} navigation={navigation} />
        ))}
      </ScrollView>
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
  },
  contentContainer: {
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
    width: "100%",
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
  editIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  icon: {
    fontSize: 18
  }
});

export default Ubicaciones;
