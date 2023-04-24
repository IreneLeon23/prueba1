import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { RutaContext } from "./RutaContext";
import { ScrollView } from "react-native";

const ScanCard = ({ scan, navigation }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleEditPress = (event) => {
    event.stopPropagation();
    navigation.navigate("EditUbicacion", { scan: scan });
  };

  return (
    <View style={[styles.scanCard, expanded && styles.expandedCard]}>
      <TouchableWithoutFeedback onPress={toggleExpand}>
        <View style={{ flex: 1 }}>
          <Text style={styles.scanName}>
            <FontAwesome5Icon name="map-pin" style={styles.icon} />{" "}
            {scan.tienda}
          </Text>
          <Text style={styles.scanDate}>
            <MaterialIcons name="date-range" style={styles.icon} /> {scan.fecha}{" "}
          </Text>
          <Text style={styles.scanRoute}>
            <FontAwesome5Icon name="user" style={styles.icon} /> {scan.ruta}
          </Text>
          {expanded && (
            <View>
              <Text style={styles.scanInfo}>
                <FontAwesome5Icon name="road" style={styles.icon} />{" "}
                {scan.colonia}, {scan.calle}
              </Text>
              <Text style={styles.scanInfo}>
                <FontAwesome5Icon name="search-location" style={styles.icon} />{" "}
                {scan.lat}, {scan.lng}
              </Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
      {expanded && (
        <View style={styles.editIconContainer}>
          <TouchableWithoutFeedback onPress={handleEditPress}>
            <FontAwesome
              name="edit"
              size={25}
              color="#003566"
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
          `https://onroutebackend.fly.dev/ubicaciones?ruta=${ruta}`
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
    borderColor: "#003566",
    borderEndWidth: 2,
    borderBottomWidth: 1,
  },
  scanName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#003566",
    paddingTop: 10,
  },
  scanDate: {
    fontSize: 16,
    color: "#888",
  },
  scanRoute: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#003566",
  },
  expandedCard: {
    width: "100%",
    height: 180,
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
    borderColor: "#003566",
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
    color: "#888",
    marginTop: 10,
  },
  editIconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default Ubicaciones;
