import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const Perfil = () => {

    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [fnacimiento, setFnacimiento] = useState('');
    const [direccion, setDireccion] = useState('');
    const [estadoCivil, setEstadocivil] = useState('');

    return (
        <View>
            <FontAwesome style={styles.user} name='user' size={80} color="#0A0821" />
            <View style={styles.top}>
                <Text style={[styles.topinfo, styles.top1]}>Nombre</Text>
                <Text style={styles.topinfo}>Apellido</Text>
                <Text style={[styles.topinfo, styles.top3]}>#Ruta</Text>
            </View>

            <View style={styles.datos}>
                <TouchableOpacity>
                    <FontAwesome style={styles.edit} name='edit' size={30} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.label}>Teléfono:</Text>
                <TextInput value={telefono} onChangeText={setTelefono} editable={false} style={styles.input}></TextInput>
                <Text style={styles.label}>Correo:</Text>
                <TextInput value={email} onChangeText={setEmail} editable={false} style={styles.input}></TextInput>
                <Text style={styles.label}>Fecha de nacimiento:</Text>
                <TextInput value={fnacimiento} onChangeText={setFnacimiento} editable={false} style={styles.input}></TextInput>
                <Text style={styles.label}>Dirección:</Text>
                <TextInput value={direccion} onChangeText={setDireccion} editable={false} style={styles.input}></TextInput>
                <Text style={styles.label}>Estado Civil:</Text>
                <TextInput value={estadoCivil} onChangeText={setEstadocivil} editable={false} style={styles.input}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    user: {
        position: 'absolute',
        top: 25,
        left: 10,
    },
    edit: {
        left: 295,
        top: 10,
        position: 'absolute'
    },
    datos: {
        backgroundColor: '#0A0821',
        height: 520,
        width: 340,
        borderRadius: 10,
        marginTop: 40,
        marginLeft: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 30,
        color: 'white',
        marginTop: 20,
        marginLeft: 15
    },
    input: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        padding: 10,
        width: '90%',
        fontSize: 20,
        color: 'black',
        marginLeft: 15,
    },
    top: {
        position: 'relative',
        backgroundColor: '#0A0821',
        width: 271,
        height: 80,
        top: 20,
        left: 80,
        borderRadius: 10,
    },
    topinfo: {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    top1: {
        fontWeight: 700,
        marginBottom: -20
    },
    top3: {
        fontWeight: 700,
        marginTop: -60,
        marginLeft: 160
    },
});

export default Perfil