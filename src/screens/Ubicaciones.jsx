import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";

const Ubicaciones = () => {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ubicaciones")
      .then((response) => setScans(response.data))
      .catch((error) => console.error(error));
  }, []);

  const ubiCard = ({ scan }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
      setExpanded(!expanded);
    };

    return (
      <TouchableWithoutFeedback onPress={toggleExpand}>
        <View style={[styles.ubiCard, expanded && styles.expandedCard]}>
          <Text style={styles.scanName}>{scan.tienda}</Text>
          <Text style={styles.scanDate}>{scan.fecha}</Text>
          <Text style={styles.scanDate}>{scan.ruta}</Text>
          {expanded && (
            <View>
              <Text style={styles.scanInfo}>
                Colonia: {scan.colonia}
              </Text>
              <Text style={styles.scanInfo}>
                Calle: {scan.calle}
              </Text>
              <Text style={styles.scanInfo}>
                Latitud: {scan.lat}
              </Text>
              <Text style={styles.scanInfo}>
                Longitud: {scan.lng}
              </Text>
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.scanList}>
        {scans.map((scan) => (
          <ubiCard key={scan._id} scan={scan} />
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
  ubiCard: {
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
    color: "#333",
    marginTop: 10,
  },
});

export default Ubicaciones;
