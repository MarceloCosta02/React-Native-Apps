import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Itens extends Component {
  render(){      
    return (           
        <View style = { styles.item }>         
            <View style = { styles.detalhesItens }> 
                <Text style = {styles.txtTitulo}>{this.props.item.id}</Text>       
                <Text style = { styles.txtValor }>R${this.props.item.name}</Text> 
                <Text style = { styles.txtDetalhes }>Local: {this.props.item.password}</Text>       
                <Text style = { styles.txtDetalhes }>Data Publicação: {this.props.item.creationDate}</Text>  
            </View>
                          
        </View>           
    );
  }
};

const styles = StyleSheet.create({
    item:{
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        
    }, 
    detalhesItens:{
        marginLeft: 20,
        flex: 1
    },
    txtTitulo:{
        fontSize: 18,
        color: 'blue',
        marginBottom: 5
    },
    txtValor:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtDetalhes:{
        fontSize: 16
    }
});

