import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants  from 'expo-constants';

import Exemplo1 from './src/exemplos/ex_01';
import Atividade1 from './src/atividades/atv_01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade1/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2d8fc',
    padding:16,
    paddingTop:Constants.statusBarHeight|| 16,
   // alignItems: 'center',
    //justifyContent: 'center',
  },
});
