
import React from "react";
import { Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { styles } from "./styles";

/**
 * Funcion que muestra la  una tabla de datos
 *
 * @param {*} props array con los datos a mostrar
 *
 * @returns Tabla con los datos visualizados
 */
function PhysicalMemory(props) {

  // Array de datos a mostrar en la tabla
  let array = props.procesos;

  
  return(

    <View
    style={{top: 400,flexDirection: 'row',alignContent: "center",alignItems: "center",justifyContent: "center",padding: 1}}>
      <DataTable id="tabla_salida" style={{flexDirection: 'column'}}>
        <DataTable.Header style={{width:'100%'}}>
          <DataTable.Title style={{ justifyContent:'center'}} adjustsFontSizeToFit ><Text style={styles.item_tabla_sm}>Índice</Text></DataTable.Title>
          <DataTable.Title style={{ justifyContent:'center'}} adjustsFontSizeToFit ><Text style={styles.item_tabla_sm}>Memoria</Text></DataTable.Title>
        </DataTable.Header>
        {array.map((row, index) => (
          <DataTable.Row > 
            <DataTable.Cell style={{ justifyContent:'center'}} >{index}</DataTable.Cell>
            <DataTable.Cell style={{width:100, flexDirection: 'column',justifyContent:'center'}}>
              <View style={{flexDirection: 'column', margin: 0, backgroundColor: array[index][1]}}>
                <Text style={styles.item}>{array[index][0]}</Text>
              </View>
          </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable > 
    </View>
  );
}
export default PhysicalMemory;