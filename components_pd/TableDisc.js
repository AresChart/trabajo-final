import React from 'react';
import { View,Text,ScrollView} from 'react-native';
import {DataTable} from 'react-native-paper';
import {styles} from '../styles/styles';

const TableDisc = (props) => {

  const tablaStyles = props.tablaStyles;
  var posicionFinal = tablaStyles.length;

  function obtenerHeight(index){

    if(index===0){
        return 10;
    }

    if(index%2===0){
        return 10;
    }

    return 40;

  } 

  function obtenerFlexDisco(i,j){
      if(i===0){
          return 1;
      }

      if(i%2===0){
        return 1;
      }

      return tablaStyles[i][j][2];
  }

  function obtenerBackGoundColorParticion(i,j){

    if(i===0){
        return "#DEDEDE";
    }

    if(i%2===0){
      return "#DEDEDE";
    }

    return tablaStyles[i][j][1];
    }

  function obtenerDataParticion(i,j){
    if(i===0){
      return tablaStyles[i][0];
    }

    if(i%2===0){
      return tablaStyles[i][0];
    }

    return tablaStyles[i][j][0];
  }
  

  return(
    <View style={{width:'100%',height:'100%', top: 0}}>
      <ScrollView horizontal={true}  style={{ top: 0 ,width: '100%' ,height: '100%'}}  > 
        <DataTable style={{width:500,height:400}}>
        {tablaStyles.map((row,i) => (
          <DataTable.Row style={{width:500,borderBottomWidth:1}}>
              {row.map((data,j) => (
              <>
              <DataTable.Cell style={{flex: obtenerFlexDisco(i,j), backgroundColor: obtenerBackGoundColorParticion(i,j) ,borderWidth:0.5}}>
                <Text style={{color: 'black',width:'100%'}}>{obtenerDataParticion(i,j)}</Text>
              </DataTable.Cell>
              </>
              ))}
          </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView> 
    </View>   
  );  
}


export default TableDisc;