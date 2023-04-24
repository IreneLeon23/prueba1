import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, TextInput, ToastAndroid } from "react-native";
import { TouchableOpacity, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { RutaContext } from "./RutaContext";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";

export default function Mapa() {
  //Formato de tiempo para pasarlo a la BD
  const now = new Date();
  const formattedDate = now.toISOString().slice(0, 19).replace("T", " ");

  const { valorRuta } = useContext(RutaContext);
  const [origin, setOrigin] = React.useState({
    latitude: 0,
    longitude: 0,
  });

  React.useEffect(() => {
    getLocationPermission();
    getLocationInfo();
  }, []);

  async function getLocationPermission() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      ToastAndroid.show(response.data, ToastAndroid.SHORT);
      return;
    }
    let location = await Location.getCurrentPositionAsync({});

    const current = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setOrigin(current);
    setLat(current.latitude.toString());
    setLng(current.longitude.toString());
  }
  //Obtener detalles de la ubicación
  async function getLocationInfo() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      ToastAndroid.show(
        "Se denegó el permiso para acceder a la locación",
        ToastAndroid.SHORT
      );
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;

    let addressResponse = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    if (addressResponse.length > 0) {
      const street = addressResponse[0].street;
      const zipCode = addressResponse[0].postalCode;
      const subregion = addressResponse[0].subregion;
      setCalle(street);
      setCP(zipCode);
      setColonia(subregion);
    } else {
      ToastAndroid.show(
        "No se encontraron datos para esta ubicación",
        ToastAndroid.SHORT
      );
    }
  }

  const { ruta, setRuta, newSituationAdded, setNewSituationAdded } =
    useContext(RutaContext);
  const [tienda, setTienda] = useState("");
  const [colonia, setColonia] = useState("");
  const [calle, setCalle] = useState("");
  const [cp, setCP] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const [date, setDate] = useState(new Date());

  const sendFormData = async (formData) => {
    try {
      const response = await axios.post(
        "https://onroutebackend.fly.dev/postubicacion",
        formData
      );
      console.log(response.data);
      ToastAndroid.show(
        "Ubicación registrada con exito! 😎👌",
        ToastAndroid.CENTER
      );
    } catch (error) {
      console.log(error);
      alert("Error al guardar la ubicación");
    }
  };

  const handleSubmit = () => {
    if (
      !ruta ||
      !tienda ||
      !colonia ||
      !calle ||
      !cp ||
      !lat ||
      !lng ||
      !date
    ) {
      ToastAndroid.show("Complete todo los campos", ToastAndroid.SHORT);
      return;
    }

    //NOMÁS ES UNA VERIFICACIÓN PARA MI PAZ MENTAL, ESTE ELSE BORRALO A LA FREGADA
    else {
      // ToastAndroid.show(
      //   "Ubicación registrada con exito! 😎👌",
      //   ToastAndroid.SHORT
      // );
    }

    const formData = {
      ruta: ruta,
      tienda: tienda,
      colonia: colonia,
      calle: calle,
      cp: cp,
      lat: lat,
      lng: lng,
      fecha: formattedDate,
    };

    sendFormData(formData);
  };

  return (
    <ScrollView style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        <Marker coordinate={origin} />
      </MapView>

      {/* FORMULARIO EMPIEZA AQUÍ  */}

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <FontAwesome5Icon name="store" size={18} color="#003566" /> Tienda
          </Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              value={tienda}
              onChangeText={(value) => setTienda(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <FontAwesome5Icon name="map-marker-alt" size={18} color="#003566" />{" "}
            Colonia
          </Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              value={colonia}
              onChangeText={(value) => setColonia(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            <FontAwesome5Icon name="road" size={18} color="#003566" /> Calle
          </Text>
          <View style={styles.pickerContainer}>
            <TextInput
              style={styles.textInput}
              value={calle}
              onChangeText={(value) => setCalle(value)}
            />
          </View>
        </View>

        <View style={styles.latlngContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              <FontAwesome5Icon name="mail-bulk" size={18} color="#003566" />{" "}
              Código postal
            </Text>
            <View style={styles.pickerContainer}>
              <TextInput
                style={styles.textInput}
                value={cp}
                onChangeText={(value) => setCP(value)}
              />
            </View>
          </View>
          {/* Ruta */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              <FontAwesome5Icon name="user" size={18} color="#003566" solid />{" "}
              Ruta
            </Text>
            <View style={styles.pickerContainer}>
              <TextInput
                editable={false}
                style={styles.textInput}
                value={ruta}
                onChangeText={(text) => setRuta(text)}
              />
            </View>
          </View>
        </View>
        <View style={styles.latlngContainer}>
          <View style={[styles.inputContainer]}>
            <Text style={styles.label}>
              <FontAwesome5Icon name="map-marker" size={18} color="#003566" />{" "}
              Latitud
            </Text>
            <View style={styles.pickerContainer}>
              <TextInput
                editable={false}
                style={styles.textInput}
                value={lat}
                onChangeText={(value) => setLat(value)}
              />
            </View>
          </View>

          <View style={[styles.inputContainer]}>
            <Text style={styles.label}>
              <FontAwesome5Icon name="map-marker" size={18} color="#003566" />{" "}
              Longitud
            </Text>
            <View style={styles.pickerContainer}>
              <TextInput
                editable={false}
                style={styles.textInput}
                value={lng}
                onChangeText={(value) => setLng(value)}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

Mapa.navigationOptions = {
  drawerLabel: "Mapa",
  drawerIcon: () => <FontAwesome name="map" size={16} color="red" />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: 'center',
  },
  map: {
    width: 340,
    height: 200,
    alignSelf: "center",
  },
  form: {
    padding: 16,
  },
  inputContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#003566",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
    height: 35,
    paddingLeft: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    textAlignVertical: "top",
    marginBottom: 16,
  },
  textInput: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#003566",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  datepicker: {
    width: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  latlngContainer: {
    flexDirection: "row",
  },
});
