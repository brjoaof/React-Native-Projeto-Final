import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import api from '../../services/api';
import Card from '../../components/Card';
import Header from '../../components/Header';
import getRealm from '../../services/realm';
import {useNetInfo} from '@react-native-community/netinfo';

const Dashboard = ({navigation}) => {
  const [produtos, setProdutos] = useState([]);
  const [rProdutos, setRProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const netInfo = useNetInfo();

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      refreshList();
    });
  });

  async function save(listaProdutos) {
    const realm = await getRealm();
    produtos.map((produto) => {
      realm.write(() => {
        realm.create('Produto', produto);
      });
    });
  }

  async function loadPage() {
    if (loading) return;

    try {
      setLoading(true);
      const {data} = await api.get('/produto');
      setLoading(false);
      setProdutos(data);
      await save(data);
    } catch (err) {
      console.log('Error: GET OU SAVE');
    }
  }

  async function refreshList() {
    setRefreshing(true);
    await loadPage();
    setRefreshing(false);
  }

  useEffect(() => {
    loadPage();
    async function loadRealmItems() {
      const realm = await getRealm();
      const rdata = realm.objects('Produto');
      setRProdutos(rdata);
    }
    loadRealmItems();
  }, []);

  return (
    <FlatList
      ListHeaderComponent={<Header navigation={navigation} />}
      data={produtos}
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
