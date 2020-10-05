import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import api from '../../services/api';
import Card from '../../components/Card';

const Dashboard = ({navigation}) => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadPage() {
    if (loading) return;

    setLoading(true);
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
  });

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => String(item.id)}
      onRefresh={refreshList}
      refreshing={refreshing}
      renderItem={({item}) => <Card item={item} navigation={navigation} />}
    />
  );
};

export default Dashboard;
