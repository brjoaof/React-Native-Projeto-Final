import React from 'react';
import {View, Text, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

const Card = ({item}) => {
  return (
    <View style={{marginTop: 15,marginHorizontal: 15, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', marginBottom: 15, padding: 5}}>
        <View>
          <Image
            source={{uri: item.fotoLink}}
            style={{width: 150, height: 150}}
          />
        </View>
        <View style={{flex: 1, marginLeft: 5}}>
          <Text style={{fontSize: 16}}>{item.id}</Text>
          <Text style={{fontSize: 20}}>{item.nome}</Text>
          <Text>Estoque: {item.qtdEstoque}</Text>
          <Text>Valor: R$ {item.valor}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', borderColor: '#c9c9c9', borderTopWidth: 1, justifyContent: 'space-around', paddingVertical: 5}}>
        <EvilIcon name="pencil" size={50} color="#696969" />
        <AntDesign name="delete" size={35} color="#696969" />
      </View>
    </View>
  );
};

export default Card;
