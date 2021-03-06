import React, { Component,useState } from 'react';
import { View,TextInput, Text} from 'react-native';
import {DataTable} from 'react-native-paper';
import {styles} from '../styles/styles';
import ReactDOM from 'react-dom';


const TableInputThreadsComponent = (props) => {

  const tablaEntrada = props.tablaEntrada;

  function updateLista (property,value){
    let nuevaLista = {...tablaEntrada};
    nuevaLista[property]=value;
    props.setTablaEntrada(nuevaLista);
  }

      return(
        <View style={{top:30,margin:10, width:'100%',height:props.height}}>
          <DataTable id="tabla">
            <DataTable.Header>
              <DataTable.Title style={{justifyContent:'center'}}><Text style={{color:'black', fontSize: 12}}>Hilo 1</Text></DataTable.Title>
              <DataTable.Title style={{justifyContent:'center'}}><Text style={{color:'black', fontSize: 12}}>Hilo 2</Text></DataTable.Title>
              <DataTable.Title style={{justifyContent:'center'}}><Text style={{color:'black', fontSize: 12}}>Hilo 3</Text></DataTable.Title>
              <DataTable.Title style={{justifyContent:'center'}}><Text style={{color:'black', fontSize: 12}}>Hilo 4</Text></DataTable.Title>
              <DataTable.Title style={{justifyContent:'center'}}><Text style={{color:'black', fontSize: 12}}>Hilo 5</Text></DataTable.Title>
            </DataTable.Header>
           
            <DataTable.Row style={{height: props.height}}>
              <DataTable.Cell style={{justifyContent:'center'}}>
                <View>
                <TextInput  multiline={true} numberOfLines={13} value={tablaEntrada.Hilo_1} onChangeText={(data)=>updateLista("Hilo_1",data)} style={styles.textInput_table_cp}/>
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={{justifyContent:'center'}}>
                <View>
                <TextInput  multiline={true} numberOfLines={13} value={tablaEntrada.Hilo_2} onChangeText={(data)=>updateLista("Hilo_2",data)} style={styles.textInput_table_cp}/>
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={{justifyContent:'center'}}>
                <View>
                <TextInput  multiline={true} numberOfLines={13} value={tablaEntrada.Hilo_3} onChangeText={(data)=>updateLista("Hilo_3",data)} style={styles.textInput_table_cp}/>
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={{justifyContent:'center'}}>
                <View>
                <TextInput  multiline={true} numberOfLines={13} value={tablaEntrada.Hilo_4} onChangeText={(data)=>updateLista("Hilo_4",data)} style={styles.textInput_table_cp}/>
                </View>
              </DataTable.Cell>
              <DataTable.Cell style={{justifyContent:'center'}}>
                <View>
                <TextInput  multiline={true} numberOfLines={13} value={tablaEntrada.Hilo_5} onChangeText={(data)=>updateLista("Hilo_5",data)} style={styles.textInput_table_cp}/>
                </View>
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable > 
        </View>   
      );   
}


export default TableInputThreadsComponent;