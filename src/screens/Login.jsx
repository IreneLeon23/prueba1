import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'

const Login = ({ onLogin }) => {

    const [ruta, setRuta] = useState('');
    const [pass, setPass] = useState('');

    const handleRutaChange = (texto) => {
        setRuta(texto);
    }

    const handlePassChange = (texto) => {
        setPass(texto);
    }

    const handleSubmit = () => {
        if (ruta === '' || pass === '') {
            alert('Por favor, completa todos los campos');
        } else {
            alert('¡Bienvenido!');
        }
        onLogin();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>OnRoute</Text>
            <Text style={[styles.label, styles.ruta]}>RUTA</Text>
            <TextInput
                placeholder='Introduce tu ruta'
                value={ruta}
                onChangeText={handleRutaChange}
                style={styles.input}
                required
            />

            <Text style={[styles.label, styles.pass]}>CONTRASEÑA</Text>
            <TextInput
                placeholder='Introduce tu contraseña'
                value={pass}
                onChangeText={handlePassChange}
                style={styles.input}
                secureTextEntry={true}
                required
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link}>
                <Text style={styles.textLink}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
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
        marginTop: 100,
        fontSize: 50,
        fontWeight: 700,
        color: 'black',
        lineHeight: 48,
        marginBottom: -10,
    },
    label: {
        fontSize: 22,
        marginBottom: 5,
        fontWeight: 700,
        lineHeight: 30,
        color: 'black',
    },
    ruta: {
        marginTop: 50,
        marginRight: 150,
        width: 164,
        height: 41,
    },
    pass: {
        marginTop: 5,
        marginRight: 120,
        width: 200
    },
    input: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '100%',
        fontSize: 20,
        color: 'black',
    },
    button: {
        backgroundColor: '#003566',
        width: 158,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 700,
    },
    link: {
        marginTop: 30,
    },
    textLink: {
        color: '#1400FF',
        fontWeight: 700,
        fontSize: 20
    },
})

export default Login;