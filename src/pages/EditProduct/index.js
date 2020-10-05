import React from 'react';
import {View, Text} from 'react-native';

const EditProduct = ({route}) => {
  const {item} = route.params;
  return (
    <View>
      <Text>{item.nome}</Text>
    </View>
  );
};

export default EditProduct;
