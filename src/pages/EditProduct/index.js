import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import api from '../../services/api';
import {Picker} from '@react-native-community/picker';

const EditProduct = ({route, navigation}) => {
  const {item} = route.params;
  const [id, setId] = useState(item.id);
  const [nome, setNome] = useState(item.nome);
  const [descricao, setDescricao] = useState(item.descricao);
  const [qtdEstoque, setQtdEstoque] = useState(item.qtdEstoque);
  const [valor, setValor] = useState(item.valor);
  const [cat, setCat] = useState(item.idCategoria);
  const [func, setFunc] = useState(item.idFuncionario);
  const [dataFabricacao, setDataFabricacao] = useState(item.dataFabricacao);
  const [fotoLink, setFotoLink] = useState(item.fotoLink);
  const [categoria, setCategoria] = useState([]);
  const [funcionario, setFuncionario] = useState([]);

  useEffect(() => {
    const cat = async () => {
      api
        .get('/categoria')
        .then((response) => {
          setCategoria(response.data);
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    };
    cat();
  }, []);

  useEffect(() => {
    const func = async () => {
      api
        .get('/funcionario')
        .then((response) => {
          setFuncionario(response.data);
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    };
    func();
  }, []);

  function atualizar() {
    Alert.alert(
      'ATENÇÃO!',
      'Você tem certeza que deseja atualizar?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelou'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            api.put(`/produto/${item.id}`, {
              id: Number(id),
              nome: nome,
              descricao: descricao,
              qtdEstoque: qtdEstoque,
              valor: Number(valor),
              idCategoria: Number(cat),
              idFuncionario: Number(func),
              dataFabricacao: dataFabricacao,
              fotoLink: fotoLink,
            });
            console.log('Atualizou');
            navigation.goBack();
          },
        },
      ],
      {cancelable: false},
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            marginBottom: 15,
            fontSize: 28,
            backgroundColor: '#8A05BE',
            fontFamily: 'Alegreya-BlackItalic',
            color: 'white',
            textAlign: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
          }}>
          DADOS DO PRODUTO
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
            Código do Produto:{' '}
          </Text>
          <TextInput
            defaultValue={String(item.id)}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingBottom: 0,
              backgroundColor: 'white',
              width: '45%',
              marginHorizontal: 5,
              marginVertical: 10,
              fontSize: 17,
              fontFamily: 'Alegreya-Regular',
              textAlign: 'center',
            }}
            onChangeText={(text) => setId(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
            Produto:{' '}
          </Text>
          <TextInput
            defaultValue={item.nome}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingBottom: 0,
              backgroundColor: 'white',
              width: '72%',
              marginHorizontal: 5,
              marginVertical: 10,
              fontSize: 17,
              fontFamily: 'Alegreya-Regular',
              textAlign: 'center',
            }}
            onChangeText={(text) => setNome(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
            Descrição:{' '}
          </Text>
          <TextInput
            defaultValue={item.descricao}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingBottom: 0,
              backgroundColor: 'white',
              width: '68%',
              marginHorizontal: 5,
              marginVertical: 10,
              fontSize: 17,
              fontFamily: 'Alegreya-Regular',
              textAlign: 'center',
            }}
            onChangeText={(text) => setDescricao(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
            Quantidade em Estoque:{' '}
          </Text>
          <TextInput
            defaultValue={String(item.qtdEstoque)}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingBottom: 0,
              backgroundColor: 'white',
              width: '32%',
              marginHorizontal: 5,
              marginVertical: 10,
              fontSize: 17,
              fontFamily: 'Alegreya-Regular',
              textAlign: 'center',
            }}
            onChangeText={(text) => setQtdEstoque(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
            Valor: R${' '}
          </Text>
          <TextInput
            defaultValue={String(item.valor)}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingBottom: 0,
              backgroundColor: 'white',
              width: '71%',
              marginHorizontal: 5,
              marginVertical: 10,
              fontSize: 17,
              fontFamily: 'Alegreya-Regular',
              textAlign: 'center',
            }}
            onChangeText={(text) => setValor(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
            Categoria:{' '}
          </Text>
          <Picker
            selectedValue={cat}
            onValueChange={(itemValue) => setCat(itemValue)}
            style={{
              // height: 50,
              width: '68%',
              backgroundColor: 'white',
              borderWidth: 2,
              marginHorizontal: 5,
            }}>
            {categoria.map((cate) => {
              return (
                <Picker.Item
                  label={cate.nome.toUpperCase()}
                  value={cate.id}
                  key={cate.id}
                />
              );
            })}
          </Picker>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
            Funcionário:{' '}
          </Text>
          <Picker
            selectedValue={func}
            onValueChange={(itemValue) => setFunc(itemValue)}
            style={{height: 50, width: '60%'}}>
            {funcionario.map((fun) => {
              return (
                <Picker.Item
                  label={fun.nome.toUpperCase()}
                  value={fun.id}
                  key={fun.id}
                />
              );
            })}
          </Picker>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
            Data de Fabricação:{' '}
          </Text>
          <TextInput
            defaultValue={item.dataFabricacao}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingBottom: 0,
              backgroundColor: 'white',
              width: '45%',
              marginHorizontal: 5,
              marginVertical: 10,
              fontSize: 17,
              fontFamily: 'Alegreya-Regular',
              textAlign: 'center',
            }}
            onChangeText={(text) => setDataFabricacao(text)}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'baseline',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
            Link da Imagem:{' '}
          </Text>
          <TextInput
            defaultValue={item.fotoLink}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingBottom: 0,
              backgroundColor: 'white',
              marginHorizontal: 5,
              marginVertical: 10,
              fontSize: 17,
              fontFamily: 'Alegreya-Regular',
              textAlign: 'center',
              width: '52%',
            }}
            onChangeText={(text) => setFotoLink(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            fontSize: 28,
            backgroundColor: '#24e00b',
            fontFamily: 'Alegreya-BlackItalic',
            color: 'white',
            textAlign: 'center',
            justifyContent: 'center',
          }}
          title="Atualizar"
          onPress={atualizar}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 24,
              fontFamily: 'Alegreya-BlackItalic',
            }}>
            ATUALIZAR
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProduct;
