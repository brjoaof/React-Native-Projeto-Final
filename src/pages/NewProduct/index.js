import React, {useEffect, useState} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api';
import {Picker} from '@react-native-community/picker';

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
    <View style={{flex: 1}}>
      <Text style={{marginBottom: 15}}>DADOS DO PRODUTO</Text>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={{fontSize: 18}}>Código do Produto: </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
          }}
          onChangeText={(text) => setId(text)}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={{fontSize: 18}}>Produto: </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
          }}
          onChangeText={(text) => setNome(text)}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={{fontSize: 18}}>Descrição: </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
          }}
          onChangeText={(text) => setDescricao(text)}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={{fontSize: 18}}>Quantidade em Estoque: </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
          }}
          onChangeText={(text) => setQtdEstoque(text)}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={{fontSize: 18}}>Valor: R$ </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
          }}
          onChangeText={(text) => setValor(text)}
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>Categoria: </Text>
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>Funcionário: </Text>
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

      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={{fontSize: 18}}>Data de Fabricação: </Text>
        <TextInput
          defaultValue={'2019-10-01T00:00:00Z'}
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
          }}
          onChangeText={(text) => setDataFabricacao(text)}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'baseline',
        }}>
        <Text style={{fontSize: 18}}>Link da Imagem: </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
            width: '60%',
          }}
          onChangeText={(text) => setFotoLink(text)}
        />
      </View>
      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
};

export default NewProduct;
