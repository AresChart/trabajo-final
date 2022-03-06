import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen from './Screen';
import IndexSp from './components_sp/IndexSp';
import IndexSm from './components_sm/IndexSm';
import IndexAp from './components_ap/IndexAp';

function semaforoScreen() {
    return (<IndexSp/>);
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Algoritmos de Planificación" component={IndexAp} />
      
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

