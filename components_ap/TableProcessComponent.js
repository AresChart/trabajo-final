import React from 'react';
import { View,Text,ScrollView} from 'react-native';
import {DataTable} from 'react-native-paper';
import {styles} from '../styles/styles';

const TableProcessComponent = (props) => {

  const tablaStyles = props.tablaStyles;
  var posicionFinal = tablaStyles.length;

  function obtenerPID(){
      if(posicionFinal!=1){
         posicionFinal--;
         return "pid "+posicionFinal;
      }      

      return "";
  }

  function obtenerDataTablaStyle(i,data){
    return i!==(tablaStyles.length-1) ? data==='#CECECC' : data;
  }

  function obtenerStyleProcess(i){
    return i!==(tablaStyles.length-1) ? '#FFFFFF' : '#000000';
  }


  function obtenerBackGound(data){
    if(isNaN(data)){
      return data;
    }

    return '#FFFFFF';
  }

  function obtenerBorder(data){
    if(isNaN(data)){
       if(data==='#FFFFFF'){
         return 0;
       }
      return 0.5;
    }

    return 0;
  }

  return(
    <View style={{width:'100%',height:'100%', top: props.top}}>
        <DataTable>
        {tablaStyles.map((row,i) => (
          <DataTable.Row >
              <DataTable.Cell style={{ flex: 2}}>{obtenerPID()}</DataTable.Cell>
              {row.map((data) => (
              <>
              <DataTable.Cell style={{ backgroundColor: obtenerBackGound(data)}}>
                <Text style={{color: obtenerStyleProcess(i)}}>{obtenerDataTablaStyle(i,data)}</Text>
              </DataTable.Cell>
              </>
              ))}
          </DataTable.Row>
          ))}
        </DataTable> 
    </View>   
  );  
}


export default TableProcessComponent;