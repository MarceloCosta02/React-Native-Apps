import React, { useEffect, useState } from 'react' // o useEffect faz uma chamada a api assim que o componente for exibido em tela
import io from 'socket.io-client'
import { Link } from 'react-router-dom' //cria uma ancora, um link

import './Main.css'

import logo from '../assets/logo.svg' // importando o logo da app
import like from '../assets/like.svg' // importando o like da app
import dislike from '../assets/dislike.svg' // importando o dislike da app
import itsamatch from '../assets/itsamatch.png'
import api from '../services/api';

// usando o { match } eu tenho acesso a todos os parametro que foram passados a essa rota
export default function Main({ match }) {
    const [users, setUsers] = useState([])
    const [matchDev, setMatchDev] = useState(false) // inicia como false, para só mostrar o match quando realmente houver

    useEffect( () => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id
                }
            })

            setUsers(response.data)
        }

        loadUsers()
    }, [match.params.id]) // pega o id passado por parametro lá na api

    useEffect(() => { // conecta com o web socket
        const socket = io('http://localhost:3333', { 
            query: { // query são parametros adicionais que eu posso enviar na conexão
                user: match.params.id
            }
        })

        socket.on('match', dev => { // ouve o dev que deu match la do backend
            setMatchDev(dev)
        })
    }, [match.params.id])

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: {
                user: match.params.id
            }
        })

        setUsers(users.filter(user => user._id !== id))
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                user: match.params.id
            }
        })

        setUsers(users.filter(user => user._id !== id))
    }

    //usando o users.map ele percorre o array, retornando algo
    return ( // Usando o Link, sempre que o usuario clicar na logo, volta pra tela de login
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="Logo Tindev" />
            </Link>

            { users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name}/>
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button type="button" onClick={() => handleDislike(user._id)}>
                                    <img src={dislike} alt="Dislike" />
                                </button>

                                <button type="button" onClick={() => handleLike(user._id)}>
                                    <img src={like} alt="Like" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
            <div className="empty">Sem devs no momento!</div>
            )}

            { matchDev && (
                <div className="match-container">
                    <img src={itsamatch} alt="" />

                    <img className="avatar" src={matchDev.avatar} alt="" />                    
                    <strong>{matchDev.name}</strong>
                    <p>{matchDev.bio}</p>

                    <button type="button" onClick={() => setMatchDev(false)}>Fechar</button> 
                </div>
                                // quando o usuario clicar em fechar, seta a variavel matchdev como nula
            )}
        </div>
    )
}