import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import api from '../../services/api';

const Card = ({item, navigation}) => {
  function deletar() {
    api.delete(`/produto/${item.id}`);
  }
  return (
    <View
      style={{marginTop: 15, marginHorizontal: 15, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', marginBottom: 0, padding: 5}}>
        <View>
          <Image
            source={{uri: item.fotoLink}}
            style={{width: 150, height: 150}}
            // onError={() => console.log(`Deu erro: ${item.nome}`)}
          />
        </View>
        <View style={{flex: 1, marginLeft: 5}}>
          <Text style={{fontSize: 16}}>{item.id}</Text>
          <Text style={{fontSize: 20}}>{item.nome}</Text>
          <Text>Estoque: {item.qtdEstoque}</Text>
          <Text>Valor: R$ {item.valor}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#c9c9c9',
          borderTopWidth: 1,
          justifyContent: 'space-around',
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProduct', {item: item})}>
          <EvilIcon name="pencil" size={50} color="#696969" />
        </TouchableOpacity>
        <TouchableOpacity onPress={deletar}>
          <AntDesign name="delete" size={35} color="#696969" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
