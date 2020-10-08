import React, {useEffect, useState} from 'react';
import {Alert, FlatList} from 'react-native';
import api from '../../services/api';
import Card from '../../components/Card';
import Header from '../../components/Header';
import getRealm from '../../services/realm';
import NetInfo from '@react-native-community/netinfo';

const Dashboard = ({navigation}) => {
  const [produtos, setProdutos] = useState([]);
  const [realmProdutos, setRealmProdutos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [connected, setConnected] = useState(true);

  // Executa quando o Dashboard entra em FOCO
  useEffect(() => {
    navigation.addListener('focus', () => {
      refreshList();
    });
  });

  //Faz a Verificação da Conexão com a Internet
  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setConnected(state.isConnected);
    });
  }, []);

  //Executa a função loadPage
  useEffect(() => {
    loadPage();
    getProdutosRealm();
  }, []);

  //Função para Salvar dados no Realm
  async function saveRealm(listaProduto) {
    await deleteRealm();
    const realm = await getRealm();
    listaProduto.map((produto) => {
      realm.write(() => {
        realm.create('Produto', {
          id: produto.id,
          nome: produto.nome,
          descricao: produto.descricao,
          qtdEstoque: produto.qtdEstoque,
          valor: produto.valor,
          idCategoria: produto.idCategoria,
          nomeCategoria: produto.nomeCategoria,
          idFuncionario: produto.idFuncionario,
          nomeFuncionario: produto.nomeFuncionario,
          dataFabricacao: produto.dataFabricacao,
          fotoLink: produto.fotoLink,
        });
      });
    });
  }

  //Função para Obter dados do Realm
  async function getProdutosRealm() {
    const realm = await getRealm();
    //Salva dados no state
    setRealmProdutos(realm.objects('Produto'));
  }

  //Função para Deletar dados do Realm
  async function deleteRealm() {
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(realm.objects('Produto'));
    });
  }

  async function loadPage() {
    if (connected) {
      try {
        //Requisição da API
        const {data} = await api.get('/produto');
        //Salva requisição no State
        setProdutos(data);
        //Chama função para salvar no Realm
        await saveRealm(data);
        //Chama função para Obter dados do Realm e armarzenar no state realmProdutos
        getProdutosRealm();
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function refreshList() {
    setRefreshing(true);
    await loadPage();
    setRefreshing(false);
  }

  return (
    <FlatList
      ListHeaderComponent={
        <Header navigation={navigation} netInfo={connected} />
      }
      data={connected ? produtos : realmProdutos}
      keyExtractor={(item) => String(item.id)}
      onRefresh={refreshList}
      refreshing={refreshing}
      renderItem={({item}) => (
        <Card
          item={item}
          navigation={navigation}
          p={() => loadPage()}
          netInfo={connected}
        />
      )}
    />
  );
};

export default Dashboard;
