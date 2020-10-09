import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import api from '../../services/api';
import styles from './style';

const Card = ({item, navigation, p, netInfo}) => {
  function deletar() {
    if (netInfo) {
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
    } else {
      Alert.alert('SEM CONEXÃO', 'Desculpe, você está sem internet =(');
    }
  }

  let link = {uri: item.fotoLink};

  const [valid, setValid] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.container3}>
          <Image
            onError={() => setValid(false)}
            source={
              valid
                ? {uri: item.fotoLink}
                : require('../../assets/img/indisponivel.jpg')
            }
            style={styles.image}
          />
        </View>
        <View style={styles.container3}>
          <Text style={styles.texto}>{item.id}</Text>
          <Text style={styles.texto1}>{item.nome}</Text>
          <Text style={styles.texto2}>Categoria: {item.nomeCategoria}</Text>
          <Text style={styles.texto2}>Estoque: {item.qtdEstoque}</Text>
          <View style={styles.container4}>
            <Text style={styles.texto3}>R$ {item.valor}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container5}>
        <TouchableOpacity
          onPress={() =>
            netInfo
              ? navigation.navigate('EditProduct', {
                  item: item,
                })
              : Alert.alert(
                  'SEM CONEXÃO',
                  'Desculpe, você está sem internet =(',
                )
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
