import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
const Ubicaciones = () => {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    axios
      .get("http://onroutebackend.fly.dev/ubicaciones")
      .then((response) => setScans(response.data))
      .catch((error) => console.error(error));
  }, []);

  const UbiCard = ({ scan }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
      setExpanded(!expanded);
    };

    return (
      <TouchableWithoutFeedback onPress={toggleExpand}>
        <View style={[styles.UbiCard, expanded && styles.expandedCard]}>
          <Text style={styles.scanName}><FontAwesome5Icon name="map-pin" style={styles.icon} /> {scan.tienda} </Text>
          <Text style={styles.scanDate}><MaterialIcons name="date-range" style={styles.icon} /> {scan.fecha} </Text>
          <Text style={styles.scanRoute}><FontAwesome5Icon name="user" style={styles.icon}/> {scan.ruta}</Text>
          {expanded && (
            <View>
              <Text style={styles.scanInfo}>
              <FontAwesome5Icon name="road" style={styles.icon} /> {scan.colonia}, {scan.calle}
              </Text>
              <Text style={styles.scanInfo}>
              <FontAwesome5Icon name="search-location" style={styles.icon} /> {scan.lat}, {scan.lng}
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
          <UbiCard key={scan._id} scan={scan} />
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
  UbiCard: {
    width: "47%",
    height: 140,
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
    color: "#003566",
    fontWeight: "bold"
  },
  expandedCard: {
    width: "100%",
    height: 200,
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
  icon: {
    marginRight: 5,
    fontSize: 14
  },
});

export default Ubicaciones;
