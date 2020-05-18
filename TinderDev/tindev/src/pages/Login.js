import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { KeyboardAvoidingView, StyleSheet, Platform, Text, Image, TextInput, TouchableOpacity } from 'react-native'
// O image precisa ser importado para trabalhar com imagens

import api from '../services/api.js'

import logo from '../assets/logo.png'

export default function Login( {navigation }) {
    const [user, setUser] = useState('')

    useEffect(() => { // se o user nao estiver nulo, quer dizer que o user ja ta logado ele vai manter na tela main
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('Main', { user })
            }
        })
    }, [])

    async function handleLogin() {
        const response = await api.post('/devs', { username: user })
        const { _id } = response.data

        await AsyncStorage.setItem('user', _id) // guarda o id do usuario

        navigation.navigate('Main', { user: _id }) // Para passar pra proxima tela
    }

    return (
    <KeyboardAvoidingView style={styles.container}
        behavior="padding" // Para não deixar o teclado por cima do login
        enabled={Platform.OS === 'ios'} // Usar somente no ios
    >
        <Image source={logo}></Image>

        <TextInput
            autoCapitalize='none' // primeira letra digitada pelo teclado é minuscula
            autoCorrect={false}            
            placeholder='Digite seu usuário no Github'
            placeholderTextColor='#999'
            style={styles.input}
            value={user} // pega o valor do usuario
            onChangeText={setUser} // quando modificado, chama a função
        />

        <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center', // Alinha verticalmente
        alignItems: 'center', // Alinha horizontalmente
        padding: 30 // Para que todo conteudo dentro desse container, fica 30px de distancia das bordas
    },
    input: {
        height: 46,
        alignSelf: 'stretch', // Ele vai ocupar toda a largura possivel
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
})