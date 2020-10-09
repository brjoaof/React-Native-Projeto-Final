import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Alert, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import api from '../../services/api';
import {Picker} from '@react-native-community/picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

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
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#210934', '#36065b', '#700cbc']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={styles.container1}>
          <Text style={styles.texto}>Dados do Produto</Text>
          <TouchableOpacity onPress={() => navigation.goBack('Product')}>
            <MaterialIcons name="keyboard-return" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.container2}>
        <Text style={styles.texto1}>Código do Produto: </Text>
        <TextInput
          style={styles.textoinput}
          onChangeText={(text) => setId(text)}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.texto1}>Produto: </Text>
        <TextInput
          style={styles.textoinput}
          onChangeText={(text) => setNome(text)}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.texto2}>Descrição: </Text>
        <TextInput
          style={styles.textoinput}
          onChangeText={(text) => setDescricao(text)}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.texto1}>Quantidade em Estoque: </Text>
        <TextInput
          style={styles.textoinput}
          onChangeText={(text) => setQtdEstoque(text)}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.texto1}>Valor: R$ </Text>
        <TextInput
          style={styles.textoinput}
          onChangeText={(text) => setValor(text)}
        />
      </View>

      <View style={styles.container3}>
        <Text style={styles.texto1}>Categoria: </Text>
        <Picker
          selectedValue={cat}
          onValueChange={(itemValue) => setCat(itemValue)}
          style={styles.picker}>
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
      <View style={styles.container3}>
        <Text style={styles.texto1}>Funcionário: </Text>
        <Picker
          selectedValue={func}
          onValueChange={(itemValue) => setFunc(itemValue)}
          style={styles.picker}>
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

      <View style={styles.container2}>
        <Text style={styles.texto2}>Data de Fabricação: </Text>
        <TextInput
          defaultValue={'2019-10-01T00:00:00Z'}
          style={styles.textoinput}
          onChangeText={(text) => setDataFabricacao(text)}
        />
      </View>
      <View style={styles.container4}>
        <Text style={styles.texto2}>Link da Imagem: </Text>
        <TextInput
          style={styles.textoinput}
          onChangeText={(text) => setFotoLink(text)}
        />
      </View>
      <LinearGradient
        colors={['#210934', '#36065b', '#700cbc']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <TouchableOpacity
          style={styles.button}
          title="Cadastrar"
          onPress={cadastrar}>
          <Text style={styles.texto3}>CADASTRAR</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

export default NewProduct;
