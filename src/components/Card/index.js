import React from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import api from '../../services/api';

const Card = ({item, navigation, p}) => {
  function deletar() {
    Alert.alert(
      'ATENÇÃO!',
      'Você tem certeza que deseja DELETAR este produto?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelou'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            api
              .delete(`/produto/${item.id}`)
              .then(() => {
                p();
              })
              .catch((e) => console.log(e));
          },
        },
      ],
      {cancelable: false},
    );
  }

  return (
    <View
      style={{
        marginTop: 15,
        marginHorizontal: 15,
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
      <View style={{flexDirection: 'row', marginBottom: 0, padding: 5}}>
        <View>
          <Image
            source={{uri: item.fotoLink}}
            style={{width: 150, height: 150}}
            // onError={() => console.log(`Deu erro: ${item.nome}`)}
          />
        </View>
        <View style={{flex: 1, marginLeft: 5, justifyContent: 'space-evenly'}}>
          <Text style={{fontSize: 16, textAlign: 'center'}}>{item.id}</Text>
          <Text style={{fontSize: 24, textAlign: 'center'}}>{item.nome}</Text>
          <Text style={{fontSize: 16, textAlign: 'center'}}>
            Categoria: {item.nomeCategoria}
          </Text>
          <Text style={{fontSize: 16, textAlign: 'center'}}>
            Estoque: {item.qtdEstoque}
          </Text>
          <View
            style={{
              borderRadius: 10,
              marginHorizontal: 35,
              backgroundColor: '#24e00b',
            }}>
            <Text style={{fontSize: 26, textAlign: 'center', color: 'white'}}>
              R$ {item.valor}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#8A05BE',
          borderTopWidth: 2,
          justifyContent: 'space-around',
          paddingVertical: 5,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('EditProduct', {
              item: item,
            })
          }>
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
