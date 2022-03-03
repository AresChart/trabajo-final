import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen from './Screen';
import IndexSp from './components_sp/IndexSp';
import IndexSm from './components_sm/IndexSm';

function semaforoScreen() {
    return (<IndexSp/>);
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Semaforos" component={IndexSp} />
        <Drawer.Screen name="Segmentación" component={IndexSm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

