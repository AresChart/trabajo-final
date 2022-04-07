
import React from "react";
import { Text, View} from 'react-native';
import { styles } from "./styles";
import { DataTable } from 'react-native-paper';

/**
 * Funcion que muestra la  una tabla de datos
 *
 * @param {*} props array con los datos a mostrar
 *
 * @returns Tabla con los datos visualizados
 */
function ProcessList(props) {

  // Array de datos a mostrar en la tabla
  let array = props.procesos;
  // Indice de bloque para los procesos
  let indices = props.indices;
  // Indice de bloque para los procesos
  let tamaños = props.tamaños;

  /**
   * Obtiene tamaño de altura para la celda
   * @param {*} row data de la row
   * @returns tamaño calculado
   */
  function obtenerHeight (row){
    // Valida si el tamaño de la data es nan
    if(isNaN(row.length)){
      return 40;
    }
    return row.length*25;
  }
        
  return(

    <View style={{ top: 30,flexDirection: 'row',alignContent: "center",alignItems: "center",justifyContent: "center",padding: 1,width:'100%' }}>

      <DataTable id="tabla_salida" style={{flexDirection: 'column'}}>
        <DataTable.Header style={{width:'100%'}}>
          <DataTable.Title style={{justifyContent:'center'}}><Text style={styles.item_tabla}>Nombre</Text></DataTable.Title>
          <DataTable.Title style={{justifyContent:'center',flex:0.5}}><Text style={styles.item_tabla}>Inicio</Text></DataTable.Title>
          <DataTable.Title style={{justifyContent:'center',flex:0.5}}><Text style={styles.item_tabla}>Tamaño</Text></DataTable.Title>
        </DataTable.Header>
    
        {array.map((row, index) => (
        <DataTable.Row style={{width:'100%', height: 40}}> 
          <DataTable.Cell style={{width:'80%',height: obtenerHeight(row) , flexDirection: 'column'}}>
            <View style={{margin: 0}}>
              <Text style={styles.item_process_list}>{array[index]}</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell style={{width:75, height: 50, borderBottomWidth: 0,flex:0.5, justifyContent:'center'}}>{parseInt(indices[index])}</DataTable.Cell>
          <DataTable.Cell style={{width:75, height: 50, borderBottomWidth: 0,flex:0.5, justifyContent:'center'}}>{parseInt(tamaños[index])}</DataTable.Cell>
        </DataTable.Row>
        ))}
      </DataTable > 
    </View>

  );
    
}
export default ProcessList;