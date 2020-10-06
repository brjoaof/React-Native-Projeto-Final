import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './pages/Dashboard';
import EditProduct from './pages/EditProduct';
import NewProduct from './pages/NewProduct';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="EditProduct" component={EditProduct} />
        <Stack.Screen name="NewProduct" component={NewProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
