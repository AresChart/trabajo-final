import React, { Component,useState } from 'react';
import { View,TextInput,Picker,Text} from 'react-native';
import {DataTable} from 'react-native-paper';
import {styles} from '../styles/styles';
import ReactDOM from 'react-dom';

const TableInputProccessesComponent = (props) => {

  const listaProcesos = props.listaProcesos;
  const listaRequerimientos = props.listaRequerimientos;

  function updateListaProcesos (value){
    let nuevaLista = {...listaProcesos};
    nuevaLista = value;
    props.setListaProcesos(nuevaLista);
  }

  function updateListaRequerimientos (index,value){
    let nuevaLista = [...listaRequerimientos];
    nuevaLista[index]=value;
    props.setListaRequerimientos(nuevaLista);
  }

      return(
        <View style={{ width:320 ,height:650}}>
          <DataTable id="tabla">
            <DataTable.Header>
              <DataTable.Title style={{justifyContent: 'center',flex: 1}}><Text style={{fontSize: 12}}>Proceso</Text></DataTable.Title>
              <DataTable.Title style={{justifyContent: 'center',flex: 2.5}}><Text style={{fontSize: 12}}>Requerimiento</Text></DataTable.Title>
            </DataTable.Header>
        
            <DataTable.Row style={{height: 300}}>
              <DataTable.Cell style={{justifyContent: 'center',flex: 1}}>
                <View>
                   <TextInput multiline={true} numberOfLines={13} value={""+listaProcesos} onChangeText={(data)=>updateListaProcesos(data)} style={styles.textInput_table_sp}/>
                </View>
              </DataTable.Cell>
              
              <DataTable.Cell style={{flexDirection: 'column',flex: 2.5, height:300,width:10}}> 
                <View style={{flexDirection: 'column'}}>
                  {listaRequerimientos.map((row,index) => (
                      <Picker style={{width:140, height: 20, fontSize:12}} value={""+row} selectedValue={""+row} onValueChange={(data)=>updateListaRequerimientos(index,data)}>
                        <Picker.Item label={"Liberar"}  value={"Liberar"}/>
                        <Picker.Item label={"Solicitar 1"}  value={"Solicitar 1"}/>
                        <Picker.Item label={"Solicitar 2"}  value={"Solicitar 2"}/>
                        <Picker.Item label={"Solicitar 3"}  value={"Solicitar 3"}/>
                        <Picker.Item label={"Solicitar 4"}  value={"Solicitar 4"}/>
                      </Picker>
                  ))}
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable > 
        </View>   
      );   
}


export default TableInputProccessesComponent;