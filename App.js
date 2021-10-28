import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';

// React Navigation
// siempre tus navegaciones deben estar dentro de un navegacion container
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Inicio from './Views/Inicio';
import Nosotros from './Views/Nosotros';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F4511E',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen
            name="Nosotros"
            component={Nosotros}
            options={({route}) => ({
              title: route.params.clienteId,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
