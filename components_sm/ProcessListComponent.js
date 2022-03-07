
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
    let datos = props.datos;

    function obtenerHeight (row){
      if(isNaN(row.length)){
        return 100;
      }
      return row.length*35;
    }
        
    return(

      <View style={{top: 40, flexDirection: 'row',alignContent: "center",justifyContent: "center",padding: 1 }}>
 
          <DataTable id="tabla_salida" style={{flexDirection: 'column'}}>
            <DataTable.Header style={{width:'100%'}}>
              <DataTable.Title style={{ justifyContent:'center'}} adjustsFontSizeToFit ><Text style={styles.item_tabla_sm}>Segmento</Text></DataTable.Title>
              <DataTable.Title style={{ justifyContent:'center'}} adjustsFontSizeToFit ><Text style={styles.item_tabla_sm}>Memoria</Text></DataTable.Title>
            </DataTable.Header>
        
            {array.map((row, index) => (
            <DataTable.Row > 
              <DataTable.Cell style={{width:75, height: 50, borderBottomWidth: 0,justifyContent:'center'}}>{index}</DataTable.Cell>
              <DataTable.Cell style={{width:100, height: obtenerHeight(row), flexDirection: 'column',justifyContent:'center'}}>
              <View style={{flexDirection: 'column', margin: 0}}>
                {array[index].map((row, index1) =>(
                  <Text style={styles.item_process}>{array[index][index1]}</Text>
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