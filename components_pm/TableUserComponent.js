
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

  // Array de datos a mostrar en la tabla
  let array = props.procesos;
        
  return(

    <View style={{width:'100%',top: 40, flexDirection: 'row',alignContent: "center",justifyContent: "center",padding: 1 }}>

        <DataTable id="tabla_salida" style={{flexDirection: 'column',width:'100%'}}>
          <DataTable.Header >
            <DataTable.Title style={{justifyContent: 'center'}}>Pagina</DataTable.Title>
            <DataTable.Title style={{justifyContent: 'center'}}>Memoria</DataTable.Title>
          </DataTable.Header>
          {Object.values(array).map((row, index) => (
            <DataTable.Row > 
              <DataTable.Cell style={{width:75, height: 100,justifyContent: 'center'}}>{index}</DataTable.Cell>
              <DataTable.Cell style={{width:100,height: 100 , flexDirection: 'column',justifyContent: 'center'}}>
                <View style={{flexDirection: 'column', margin: 0}}>
                  {Object.values(array[index].data).map((row, index1) => (
                    <Text style={styles.item}>{array[index].data[index1]}</Text>
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