import React, { Component } from 'react';
import { View,  Image } from 'react-native';

const icone = require('../../img/jokenpo.png');

class Topo extends Component{
    render(){
      return(
        <View>
        <Image source={icone} />
        </View> 
      );
    }
  }

  export default Topo;