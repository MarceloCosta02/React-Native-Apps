import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import Modal from './modalCores/index'

export default class App extends Component {

  constructor(props){
    super(props)

    this.state = {

      isModalVisible: true

    }

  }

  render() {

    return (
      
      <View>

      <Modal 

        isModalVisible={this.state.isModalVisible}

      />

      </View>

    
    
    );
  }
}

