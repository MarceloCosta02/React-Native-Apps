import React, { Component } from 'react';
import { ScrollView } from 'react-native'; // O ScrollView implementa um scroll lateral
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {
    
    constructor(props){
        super(props)

        this.state = { ListaItens: [] }
    }

    UNSAFE_componentWillMount(){
       // requisiçao HTTP
       axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then( (response) => {
                this.setState({ ListaItens : response.data })
            })
            .catch( () => {
                console.log('Erro ao recuperar os dados');
            });
    }
  
    render(){      
        return (
            <ScrollView style = {{ backgroundColor: '#DDD' }}>
            { this.state.ListaItens.map( (item) => { 
                    return (                        
                        <Itens key={ item.titulo } item={item} />                    
                    )
                } 
             )}
            </ScrollView>        
        );
    }
};


