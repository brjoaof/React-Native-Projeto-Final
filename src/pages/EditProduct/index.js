import React, {useState} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api';

const EditProduct = ({route}) => {
  const {item} = route.params;
  const [id, setId] = useState(item.id);
  const [nome, setNome] = useState(item.nome);
  const [descricao, setDescricao] = useState(item.descricao);
  const [qtdEstoque, setQtdEstoque] = useState(item.qtdEstoque);
  const [valor, setValor] = useState(item.valor);
  const [idCategoria, setIdCategoria] = useState(item.idCategoria);
  const [nomeCategoria, setNomeCategori] = useState(item.nomeCategoria);
  const [idFuncionario, setIdFuncionario] = useState(item.idFuncionario);
  const [nomeFuncionario, setNomeFuncionario] = useState(item.nomeFuncionario);
  const [dataFabricacao, setDataFabricacao] = useState(item.dataFabricacao);
  const [fotoLink, setFotoLink] = useState(item.fotoLink);

  function atualizar() {
    api.put(`/produto/${item.id}`, {
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
          defaultValue={String(item.id)}
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
          defaultValue={item.nome}
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
          defaultValue={item.descricao}
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
          defaultValue={String(item.qtdEstoque)}
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
          defaultValue={String(item.valor)}
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
          defaultValue={String(item.idCategoria)}
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
          defaultValue={item.nomeCategoria}
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
          defaultValue={String(item.idFuncionario)}
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
          defaultValue={item.nomeFuncionario}
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
          defaultValue={item.dataFabricacao}
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
          defaultValue={item.fotoLink}
          style={{
            borderBottomWidth: 1,
            paddingBottom: 0,
            width: '60%',
          }}
          onChangeText={(text) => setFotoLink(text)}
        />
      </View>
      <Button title="Atualizar" onPress={atualizar} />
    </View>
  );
};

export default EditProduct;
