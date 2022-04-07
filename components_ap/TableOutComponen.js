import { View,TextInput,Text} from 'react-native';
import {DataTable} from 'react-native-paper';
import {styles} from '../styles/styles';
import React from 'react';

const TableOutComponent = (props) => {

  const tablaSalida = props.tablaSalida;

  return(
    <View style={{width:'95%',height:props.height, top:props.top}}>
      <Text style={{fontSize: 15, justifyContent:'center',margin:10 ,fontWeight:'bold',fontStyle: 'italic'}}>Tabla de salida</Text>
      <DataTable id="tabla_salida">
        <DataTable.Header>
          <DataTable.Title style={{ flex: 0.7}} ><Text style={{fontSize: 13}}>Pid</Text></DataTable.Title>
          <DataTable.Title><Text style={{fontSize: 13}}>T Salida</Text></DataTable.Title>
          <DataTable.Title><Text style={{fontSize: 13}}>T Servicio</Text></DataTable.Title>
          <DataTable.Title><Text style={{fontSize: 13}}>T Espera</Text></DataTable.Title>
          <DataTable.Title><Text style={{fontSize: 13}}>I Servicio</Text></DataTable.Title>
        </DataTable.Header>
    
       {tablaSalida.map((row) => (
        <DataTable.Row>
          <DataTable.Cell style={{ flex: 0.7}}><Text style={{fontSize: 15}}>{row.pid}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={{fontSize: 15}}>{row.t_salida}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={{fontSize: 15}}>{row.t_servicio}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={{fontSize: 15}}>{row.t_espera}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={{fontSize: 15}}>{row.indice_servicio}</Text></DataTable.Cell>
        </DataTable.Row>
        ))}
      </DataTable > 
    </View>   
  );  
}


export default TableOutComponent;