import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#8A05BE',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 36,
          fontFamily: 'Alegreya-BlackItalic',
        }}>
        Produtos
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('NewProduct')}>
        <MaterialIcons name="add" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
