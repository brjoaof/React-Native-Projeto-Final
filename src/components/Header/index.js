import React from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({navigation, netInfo}) => {
  return (
    <LinearGradient
      colors={['#210934', '#36065b', '#700cbc']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 36,
            fontFamily: 'Alegreya-BlackItalic',
          }}>
          Produtos
        </Text>
        <TouchableOpacity
          onPress={() =>
            netInfo
              ? navigation.navigate('NewProduct')
              : Alert.alert(
                  'SEM CONEXÃO',
                  'Desculpe, você está sem internet =(',
                )
          }>
          <MaterialIcons name="add" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Header;
