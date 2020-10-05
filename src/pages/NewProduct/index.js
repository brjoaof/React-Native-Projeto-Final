import React, {useState} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api';

const NewProduct = () => {
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [qtdEstoque, setQtdEstoque] = useState();
  const [valor, setValor] = useState();
  const [idCategoria, setIdCategoria] = useState();
  const [nomeCategoria, setNomeCategori] = useState();
  const [idFuncionario, setIdFuncionario] = useState();
  const [nomeFuncionario, setNomeFuncionario] = useState();
  const [dataFabricacao, setDataFabricacao] = useState();
  const [fotoLink, setFotoLink] = useState();

  function cadastrar() {
    api.post('/produto', {
      id: Number(id),
      nome: nome,
      descricao: descricao,
      qtdEstoque: qtdEstoque,
      valor: Number(valor),
      idCategoria: Number(idCategoria),
      nomeCategoria: nomeCategoria,
      idFuncionario: Number(idFuncionario),
      nomeFuncionario: nomeFuncionario,
      dataFabricacao: dataFabricacao,
      fotoLink: fotoLink,
    });
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
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={{fontSize: 18}}>Código da Categoria: </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
          }}
          onChangeText={(text) => setIdCategoria(text)}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={{fontSize: 18}}>Nome da Categoria: </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
          }}
          onChangeText={(text) => setNomeCategori(text)}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={{fontSize: 18}}>Código do Funcionário: </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
          }}
          onChangeText={(text) => setIdFuncionario(text)}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={{fontSize: 18}}>Nome do Funcionário: </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
          }}
          onChangeText={(text) => setNomeFuncionario(text)}
        />
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
