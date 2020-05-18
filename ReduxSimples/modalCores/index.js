import PropTypes from 'prop-types';
import React, { useState, useEffect, Fragment, useCallback } from 'react';
import { StyleSheet ,Modal, TouchableOpacity ,View, Text } from 'react-native';

import ColorOption from './color-option';

const ColorPalette = (props) => {
  const {
    colors,
    defaultColor,
    icon,
    onChange,
    paletteStyles,
    scaleToWindow,
    title,
    titleStyles,
    value,
  } = props;
  const [color, setColor] = useState(value || defaultColor);

  const [modalVisible, setModalVisible] = useState(false);

  
  useEffect(() => {
    value && setColor(value);
  }, [value]);

  const onColorChange = useCallback((color) => {
    setColor(color);
    onChange(color);
  }, [onChange]);

  return (
    <View>
    <Text>Cor selecionada: {color}</Text>
    <TouchableOpacity 
      style={[styles.colorCircle, { backgroundColor: color }]}
    />
    <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}               
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Cores</Text>
              <View style={[styles.colorContainer, { ...paletteStyles }]}>
              {colors.map((c) => (
              <ColorOption
                key={c}
                color={c}
                icon={icon}
                onColorChange={onColorChange}
                scaleToWindow={scaleToWindow}
                isSelected={value ? value ===c : color ===c}
               />
              ))}
              </View>

              <TouchableOpacity
                onPress={() => { setModalVisible(false) }}
                style={styles.button}>
                <Text style={styles.buttonText}>Fechar Cores</Text>
              </TouchableOpacity>
              
            </View>
          </View>
        </Modal>         
      </View>     

      <TouchableOpacity
        onPress={() => { setModalVisible(true) }}
        style={styles.button}>
        <Text style={styles.buttonText}>Abrir Cores</Text>
      </TouchableOpacity>
    </View>
       
   
  );
}

const styles = StyleSheet.create({
  titleStyles: {
    color: 'black',
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    marginLeft: 20,
    marginRight: 20,
    position: 'absolute' // Deixa o modal de loading por cima de tudo
  },
  modalView: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  loading: {
    marginTop: 10,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#85A4D2',
    color: '#FFF',
    borderRadius: 4,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30      
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

ColorPalette.defaultProps = {
  colors: [
    '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9', '#3498DB', '#1ABC9C',
    '#16A085', '#27AE60', '#2ECC71', '#F1C40F', '#F39C12', '#E67E22', '#D35400',
    '#FFFFFF', '#BDC3C7', '#95A5A6', '#7F8C8D', '#34495E', '#2C3E50', '#000000', 
  ],
  defaultColor: null,
  onChange: () => { },
  paletteStyles: {},
  scaleToWindow: false,
  title: "Color Palette:",
  titleStyles: {},
  value: null,
};

ColorPalette.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  onChange: PropTypes.func,
  defaultColor: PropTypes.string,
  value: PropTypes.string,
  paletteStyles: PropTypes.shape({})
};

export default ColorPalette;


