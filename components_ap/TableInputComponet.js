import { View,TextInput,Text} from 'react-native';
import {DataTable} from 'react-native-paper';
import {styles} from '../styles/styles';
import React from 'react';
import NumberFormat from 'react-number-format';

const TableInputComponent = (props) => {

  const tablaEntrada = props.tablaEntrada;


  function updateListaPrioridad (index,property,value){
    let nuevaLista = [...tablaEntrada];
    nuevaLista[index][property]=value;
    props.setTablaEntrada(nuevaLista);
  }

  function updateLista (index,property,value){
    if (/^\d+$/.test(value) || value==="" && !value.includes("-")) {
    let nuevaLista = [...tablaEntrada];
    nuevaLista[index][property]=value;
    props.setTablaEntrada(nuevaLista);
    }
  }

      return(
        <View style={{width:'95%',height:props.height, top:70}}>
          <Text style={{fontSize: 15, justifyContent:'center',margin:10 ,fontWeight:'bold',fontStyle: 'italic'}}>Tabla de entrada</Text>
          <DataTable id="tabla">
            <DataTable.Header>
              <DataTable.Title style={{ flex: 0.4}}><Text style={{fontSize: 13}}>Pid</Text></DataTable.Title>
              <DataTable.Title style={{ justifyContent:'center', flex: 0.7}}><Text style={{fontSize: 13,textAlign: 'center'}}>T-Llegada</Text></DataTable.Title>
              <DataTable.Title style={{ justifyContent:'center'}}><Text style={{fontSize: 13,textAlign: 'center'}}>Rafaga CPU</Text></DataTable.Title>
              <DataTable.Title style={{ justifyContent:'center'}}><Text style={{fontSize: 13,textAlign: 'center'}}>Rafaga E/S</Text></DataTable.Title>
              <DataTable.Title style={{ justifyContent:'center',display: props.isPrioridad,flex: 0.7}} ><Text style={{fontSize: 13,textAlign: 'center'}}>Prioridad</Text></DataTable.Title>
            </DataTable.Header>
        
           {tablaEntrada.map((row,index) => (
            <DataTable.Row >
              <DataTable.Cell style={{flex: 0.4}}><Text style={{fontSize: 15, width:'10%'}}>{row.pid}</Text></DataTable.Cell>
              <DataTable.Cell style={{justifyContent:'center',flex: 0.7}}>
                <View>
                    <TextInput value={""+row.t_llegada} onChangeText={(data)=>updateLista(index,"t_llegada",data)} style={styles.inputTableAp} keyboardType="numeric"/>
                </View>
              </DataTable.Cell>

              <DataTable.Cell style={{justifyContent:'center'}}>
                <View >
                  <TextInput value={""+row.t_ejecucion} onChangeText={(data)=>updateLista(index,"t_ejecucion",data)} style={styles.inputTableAp} keyboardType="numeric"/>
                </View>
              </DataTable.Cell>

              <DataTable.Cell style={{justifyContent:'center'}}>
                <View >
                  <TextInput value={""+row.rafaga_es} onChangeText={(data)=>updateLista(index,"rafaga_es",data)} style={styles.inputTableAp} keyboardType="numeric"/>
                </View>
              </DataTable.Cell>

              <DataTable.Cell style={{display: props.isPrioridad ,justifyContent:'center',flex: 0.7}} >
                 <View >
                <TextInput value={""+row.prioridad} onChangeText={(data)=>updateListaPrioridad(index,"prioridad",data)} style={{textAlign:'center',width: 30,height:25,display: props.isPrioridad}}/>
                </View>
              </DataTable.Cell>

            </DataTable.Row>
            ))}
          </DataTable > 
        </View>   
      );   
}


export default TableInputComponent;