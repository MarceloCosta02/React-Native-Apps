import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as countActions from './actions/color';
import Modal from './src/index'
import MonthSelectorCalendar from 'react-native-month-selector';
import moment from 'moment'

class App extends Component {

  constructor(props){
    super(props)

    this.state={
      currentDate : new Date()
    }
  }

  teste = async () => {

    //let tomorrow = new Date();
    //tomorrow = moment(tomorrow).add(1, 'day').format('YYYY-MM-DD');

    let nextMonth = moment(this.state.currentDate).add(1, 'month').format('YYYY-MM');
    this.setState({currentDate: nextMonth})
    //moment(currentMonth).subtract(1, 'month');

    console.log('Proximo mes: '+this.state.currentDate)

  }


  decrementCount() {
    let { cor, actions } = this.props;
    cor = false;
    actions.changeCor(cor);
    console.log(cor)

  }
  incrementCount() {
    let { cor, actions } = this.props;
    cor = '';
    actions.changeCor(cor);
    console.log(cor)
  }
  render() {
    const { cor } = this.props;
    return (

      <View styles={styles.container}>
            <Text>Cor selecionada: {cor}</Text>
        <TouchableOpacity 
          style={[styles.colorCircle, { backgroundColor: cor }]}
    />

        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text style={styles.textCenter}>Cor do componente pai{cor}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />

        <Button
          title="teste"
          onPress={() => this.teste()}
        />

        <Modal />

    

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCenter:{
    textAlign :'center'
  },
  colorCircle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 15,
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: .25,
  }
});

const mapStateToProps = state => ({
  cor: state.cor.cor,
});

const ActionCreators = Object.assign(
  {},
  countActions,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
