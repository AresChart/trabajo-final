
import React from "react";
import { Text, View } from 'react-native';
import { styles } from "./styles";
import { DataTable } from 'react-native-paper';

/**
 * Funcion que muestra la  una tabla de datos
 * @param {*} props array con los datos a mostrar
 * @returns Tabla con los datos visualizados
 */
function ProcessList(props) {

  function obtenerHeight (row){
    if(isNaN(row.length)){
      return 100;
    }
    return row.length*35;
  }

  // Array de datos a mostrar en la tabla
  let array = props.procesos;
        
  return(

    <View style={{top: 100,marginTop: 20,flexDirection: 'row',alignContent: "center",alignItems: "center",justifyContent: "center",padding: 1, right: 5 }}>
        <DataTable id="tabla_salida" style={{flexDirection: 'column'}}>
          <DataTable.Header style={{width:220}}>
            <DataTable.Title style={{justifyContent: 'center'}} adjustsFontSizeToFit>Bloque</DataTable.Title>
            <DataTable.Title style={{justifyContent: 'center'}} adjustsFontSizeToFit>Memoria</DataTable.Title>
          </DataTable.Header>
          {array.map((row, index) => (
            <DataTable.Row> 
              <DataTable.Cell style={{width:75, height: 80,justifyContent: 'center'}}>{index}</DataTable.Cell>
              <DataTable.Cell style={{width:100,  height: obtenerHeight(row), flexDirection: 'column',justifyContent: 'center'}}>
                <View style={{flexDirection: 'column', margin: 0}}>
                  {array[0].map((row, index1) =>(
                      <Text style={styles.item}>{array[index][index1]}</Text>
                  ))}
                </View>
            </DataTable.Cell>
          </DataTable.Row>
          ))}
        </DataTable > 
    </View>

  );
    
}
export default ProcessList;