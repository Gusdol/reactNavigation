import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

function Nosotros({navigation, route}) {
  const {clienteId} = route.params;

  const volver = () => {
    navigation.navigate('Inicio');
    //navigation.goBack();  vuelve a la pantalla anterior
    //navigation.push('Inicio');  otra forma de volver pero con diferente transicion
  };

  return (
    <View style={styles.contenedor}>
      <Text>{clienteId}</Text>
      <Button title="Volver" onPress={() => volver()} />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Nosotros;
