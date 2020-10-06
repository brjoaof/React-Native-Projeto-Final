import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import api from '../../services/api';
import Card from '../../components/Card';
import Header from '../../components/Header';

const Dashboard = ({navigation}) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      refreshList();
      console.log('EU AQUII');
    });
  });

  async function loadPage() {
    if (loading) return;

    setLoading(true);
    console.log('FIZ UM GET');
    const {data} = await api.get('/produto');
    setLoading(false);
    setProdutos(data);
  }

  async function refreshList() {
    setRefreshing(true);
    await loadPage();
    setRefreshing(false);
  }

  useEffect(() => {
    loadPage();
    console.log('Use Effect');
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
