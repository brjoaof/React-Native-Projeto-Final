import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Alert, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api';
import {Picker} from '@react-native-community/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const NewProduct = ({navigation}) => {
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [qtdEstoque, setQtdEstoque] = useState();
  const [valor, setValor] = useState();
  const [cat, setCat] = useState();
  const [func, setFunc] = useState();
  const [dataFabricacao, setDataFabricacao] = useState();
  const [fotoLink, setFotoLink] = useState();
  const [categoria, setCategoria] = useState([]);
  const [funcionario, setFuncionario] = useState([]);

  useEffect(() => {
    const cat = async () => {
      api
        .get('/categoria')
        .then((response) => {
          setCategoria(response.data);
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
        })
        .catch((err) => console.log(err));
    };
    func();
  }, []);

  function cadastrar() {
    Alert.alert(
      'ATENÇÃO!',
      'Você tem certeza que deseja cadastrar um novo produto?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelou'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            api.post('/produto', {
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
            console.log('Cadastrou');
            navigation.goBack();
          },
        },
      ],
      {cancelable: false},
    );
  }

  return (
    <ScrollView style={{flex: 1}}>
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
            Dados do Produto
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack('Product')}>
            <MaterialIcons name="keyboard-return" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View
        style={{
          alignItems: 'baseline',
          marginHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 21, fontFamily: 'Alegreya-Bold'}}>
          Código do Produto:{' '}
        </Text>
        <TextInput
          style={{
            borderRadius: 10,
            paddingBottom: 0,
            backgroundColor: 'white',
            width: '100%',
            fontSize: 21,
            fontFamily: 'Alegreya-Regular',
          }}
          onChangeText={(text) => setId(text)}
        />
      </View>
      <View
        style={{
          alignItems: 'baseline',
          marginHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 21, fontFamily: 'Alegreya-Bold'}}>
          Produto:{' '}
        </Text>
        <TextInput
          style={{
            borderRadius: 10,
            paddingBottom: 0,
            backgroundColor: 'white',
            width: '100%',
            fontSize: 21,
            fontFamily: 'Alegreya-Regular',
          }}
          onChangeText={(text) => setNome(text)}
        />
      </View>
      <View
        style={{
          alignItems: 'baseline',
          marginHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
          Descrição:{' '}
        </Text>
        <TextInput
          style={{
            borderRadius: 10,
            paddingBottom: 0,
            backgroundColor: 'white',
            width: '100%',
            fontSize: 21,
            fontFamily: 'Alegreya-Regular',
          }}
          onChangeText={(text) => setDescricao(text)}
        />
      </View>
      <View
        style={{
          alignItems: 'baseline',
          marginHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 21, fontFamily: 'Alegreya-Bold'}}>
          Quantidade em Estoque:{' '}
        </Text>
        <TextInput
          style={{
            borderRadius: 10,
            paddingBottom: 0,
            backgroundColor: 'white',
            width: '100%',
            fontSize: 21,
            fontFamily: 'Alegreya-Regular',
          }}
          onChangeText={(text) => setQtdEstoque(text)}
        />
      </View>
      <View
        style={{
          alignItems: 'baseline',
          marginHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 21, fontFamily: 'Alegreya-Bold'}}>
          Valor: R${' '}
        </Text>
        <TextInput
          style={{
            borderRadius: 10,
            paddingBottom: 0,
            backgroundColor: 'white',
            width: '100%',
            fontSize: 21,
            fontFamily: 'Alegreya-Regular',
          }}
          onChangeText={(text) => setValor(text)}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 21, fontFamily: 'Alegreya-Bold'}}>
          Categoria:{' '}
        </Text>
        <Picker
          selectedValue={cat}
          onValueChange={(itemValue) => setCat(itemValue)}
          style={{height: 50, width: '60%'}}>
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
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 21, fontFamily: 'Alegreya-Bold'}}>
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
          alignItems: 'baseline',
          marginHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
          Data de Fabricação:{' '}
        </Text>
        <TextInput
          defaultValue={'2019-10-01T00:00:00Z'}
          style={{
            borderRadius: 10,
            paddingBottom: 0,
            backgroundColor: 'white',
            width: '100%',
            fontSize: 21,
            fontFamily: 'Alegreya-Regular',
          }}
          onChangeText={(text) => setDataFabricacao(text)}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'baseline',
          marginHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 24, fontFamily: 'Alegreya-Bold'}}>
          Link da Imagem:{' '}
        </Text>
        <TextInput
          style={{
            borderRadius: 10,
            paddingBottom: 10,
            backgroundColor: 'white',
            width: '100%',
            fontSize: 21,
            fontFamily: 'Alegreya-Regular',
          }}
          onChangeText={(text) => setFotoLink(text)}
        />
      </View>
      <LinearGradient
        colors={['#210934', '#36065b', '#700cbc']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <TouchableOpacity
          style={{
            height: 50,
            fontSize: 28,
            fontFamily: 'Alegreya-BlackItalic',
            color: 'white',
            textAlign: 'center',
            justifyContent: 'center',
          }}
          title="Cadastrar"
          onPress={cadastrar}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 24,
              fontFamily: 'Alegreya-BlackItalic',
            }}>
            CADASTRAR
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

export default NewProduct;
