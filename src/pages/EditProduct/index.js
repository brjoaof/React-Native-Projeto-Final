import React, {useEffect, useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import api from '../../services/api';
import {Picker} from '@react-native-community/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

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
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 21, fontFamily: 'Alegreya-Bold'}}>
          Código do Produto:{' '}
        </Text>
        <TextInput
          defaultValue={String(item.id)}
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
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text
          style={{fontSize: 21, fontFamily: 'Alegreya-Bold', paddingTop: 5}}>
          Produto:{' '}
        </Text>
        <TextInput
          defaultValue={item.nome}
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
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text
          style={{fontSize: 21, fontFamily: 'Alegreya-Bold', paddingTop: 5}}>
          Descrição:{' '}
        </Text>
        <TextInput
          defaultValue={item.descricao}
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
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text
          style={{fontSize: 21, fontFamily: 'Alegreya-Bold', paddingTop: 5}}>
          Quantidade em Estoque:{' '}
        </Text>
        <TextInput
          defaultValue={String(item.qtdEstoque)}
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
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text
          style={{fontSize: 21, fontFamily: 'Alegreya-Bold', paddingTop: 5}}>
          Valor: R${' '}
        </Text>
        <TextInput
          defaultValue={String(item.valor)}
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
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text style={{fontSize: 21, fontFamily: 'Alegreya-Bold'}}>
          Categoria:{' '}
        </Text>
        <Picker
          selectedValue={cat}
          onValueChange={(itemValue) => setCat(itemValue)}
          style={{
            height: 50,
            width: '60%',
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
          paddingHorizontal: 10,
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
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text
          style={{fontSize: 21, fontFamily: 'Alegreya-Bold', paddingTop: 5}}>
          Data de Fabricação:{' '}
        </Text>
        <TextInput
          defaultValue={item.dataFabricacao}
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
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <Text
          style={{fontSize: 21, fontFamily: 'Alegreya-Bold', paddingTop: 5}}>
          Link da Imagem:{' '}
        </Text>
        <TextInput
          defaultValue={item.fotoLink}
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
      </LinearGradient>
    </ScrollView>
  );
};

export default EditProduct;
