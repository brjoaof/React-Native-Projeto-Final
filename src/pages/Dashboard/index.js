import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import api from '../../services/api';
import Card from '../../components/Card';
import Header from '../../components/Header';
import getRealm from '../../services/realm';
import NetInfo from '@react-native-community/netinfo';

const Dashboard = ({navigation}) => {
  const [produtos, setProdutos] = useState([]);
  const [realmProdutos, setRealmProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
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
  }, []);

  //Função para Salvar dados no Realm
  async function saveRealm(listaProdutos) {
    const realm = await getRealm();
    produtos.map((produto) => {
      realm.write(() => {
        realm.create('Produto', produto);
      });
    });
  }

  //Função para Obter dados do Realm
  async function getRealm() {
    const realm = await getRealm();
    const rdata = realm.objects('Produto');
    //Salva dados no state
    setRealmProdutos(rdata);
  }

  //Função para Deletar dados do Realm
  async function deleteRealm() {
    const realm = await getRealm();
    realm.write(() => {
      realm.delete(realm.objects('Produto'));
    });
  }

  async function loadPage() {
    if (loading) return;

    try {
      setLoading(true);
      //Requisição da API
      const {data} = await api.get('/produto');
      setProdutos(data);
      setLoading(false);

      //Chama função para salvar no Realm
      await saveRealm(data);

      //Chama função para Obter dados do Realm e armarzenar no state realmProdutos
      getRealm();
    } catch (err) {
      console.log(err);
    }
  }

  async function refreshList() {
    setRefreshing(true);
    await loadPage();
    setRefreshing(false);
  }

  return (
    <FlatList
      ListHeaderComponent={<Header navigation={navigation} />}
      data={connected ? produtos : realmProdutos}
      keyExtractor={(item) => String(item.id)}
      onRefresh={refreshList}
      refreshing={refreshing}
      renderItem={({item}) => (
        <Card item={item} navigation={navigation} p={() => loadPage()} />
      )}
    />
  );
};

export default Dashboard;
