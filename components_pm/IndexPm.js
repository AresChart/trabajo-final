/**
 * View de los algoritmos de Paginacion y Memoria virtual
 * @author Kevin David Sanchez Solis
 * @author Anderson Ramirez Vasquez
 */

import React from 'react';
import { View , ScrollView, Button, TextInput,TouchableOpacity, Text} from 'react-native';
import * as funciones from '../scripts_pm/Main';
import ProcessList from './ProcessListComponent';
import TableData from './TableDataComponent';
import TableUser from './TableUserComponent';
import { styles } from './styles';
import NumberFormat from 'react-number-format';
import { Speaker, Pause } from '../components_drawer/Speaker';

/**
 * Genera la vista para los algoritmos de paginación de memoria
 *
 * @returns Vista de páginacion de memoria
 */
function paginacion() {

    //Variable que almacena el indice de la pagina a eliminar
    const [eliminarItem,   setEliminarItem]             = React.useState("");
    //Variable que almacena la palabra que corresponde al proceso creado
    const [palabra,   setPalabra]                       = React.useState("");
    //Variable que almacena la el numero de pagina que se solicita
    const [paginaSolicitada,   setPaginaSolicitada]     = React.useState("");
    //Variable que almacena la posicion del item solicitado
    const [posicionSolicitada,   setPosicionSolicitada] = React.useState("");
    //Variable que acciona el refresco de la tabla
    const [refreshing, setRefreshing]                   = React.useState(false);

    /**
     * Metodo que realiza las operaciones para el refresco de la tabla
     */
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    /**
     * Metodo que realiza la espera mientras se ejecuta una accion
     * @param {*} timeout Tiempo de espera que se quiere
     * @returns El tiempo de espera
     */
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    /**
     * Crear un Proceso representado por una palabra ingresada
     */
    function crearProceso() {
        // Variable auxiliar 
        let palabraClone = palabra.trim();  
        
        // Valida que la palabra no este vacia
        if (palabraClone == "") {          
            return alert("No se admiten Palabras vacias");
        }
        // Valida que la palabra sea maximo del tamaño del bloque
        if (palabra.length <= funciones.TamañoBloque) {
            // Invoca al metodo crear proceso
            funciones.crearProceso(palabra);

            // Limpia campo de texto
            setPalabra("");

            //Refresco de la tabla del algortimo de asignacion
            return onRefresh();
        }
        return alert("El tamaño del proceso es de máximo 3 caracteres.");
    }

    /**
     * Permite traer de la memoria fisica el dato solicitado
     */
    function solictarItem() {
        // Variable auxiliar 
        let palabraClone = paginaSolicitada.trim();  

        // Valida que la palabra no este vacia
        if (palabraClone == "" || parseInt(palabraClone)<0) {          
            return alert("Ingrese índice válido de página a solicitar.");
        }

        // Variable auxiliar 
        palabraClone = posicionSolicitada.trim();  

        // Valida que la palabra no este vacia
        if (palabraClone == "" || parseInt(palabraClone)<0) {          
            return alert("Ingrese índice válido de la posición a solicitar.");
        }
        // Valida que la palabra no este vacia
        if (palabraClone > 2) {          
            return alert("El bloque de memoria solo tiene de la posición 0 a la 2.");
        }

        // Invoca el metodo que trae el item solicitado
        funciones.solicitarItem(paginaSolicitada, posicionSolicitada);

        //Limpia campos de texto
        setPaginaSolicitada("");
        setPosicionSolicitada("");

        return onRefresh();
    }

    /**
     * Permite eliminar o vaciar el bloque que contiene una palabra que se especifica por un indice
     */
    function eliminarPalabra() {

        // Variable auxiliar 
        let palabraClone = eliminarItem.trim();  

        // Valida que la palabra no este vacia
        if (palabraClone == "" || parseInt(palabraClone)<0) {          
            return alert("Indique índice válido de palabra a eliminar.");
        }
        // Valida que el indice digitado exista
        if (funciones.TablaProcesos.length-1 < eliminarItem) {
            return alert("No existe índice de palabra.");
        }

        // Invoca el metodo que elimina de los array la palabra indicada
        funciones.eliminarPalabra(eliminarItem);
        
        // Limpia campo de texto
        setEliminarItem("");

        return onRefresh();
    }
      

    /**
     * Retorna la vista con los componentes
     */
    return(

        // View Global
    <ScrollView style={{paddingVertical: 0}}>
    <View style={{width: `100%` ,height: `100%`,backgroundColor: '#fff',alignItems: 'center',flexDirection: 'column'}}>


        <View style={{top:50 ,flex: 2,alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
            <View style={{alignItems: 'center',justifyContent: 'center',flexDirection: 'row'}}>
                <TextInput onChangeText={(val) => setPalabra(val)} value={palabra} style={styles.input} placeholder="Palabra" keyboardType='default' />
                <TouchableOpacity style={{marginTop:0, width: 140, height: 40, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=>crearProceso()} >
                    <Text style={{color:'white', fontSize: 15}}>Crear Proceso</Text>
                </TouchableOpacity>
            </View>

            <View style={{top:10 ,alignItems: 'center',justifyContent: 'center',flexDirection: 'row'}}>
                <NumberFormat value={paginaSolicitada} displayType={'text'} renderText={ (paginaSolicitada) => (
                        <TextInput underlineColorAndroid="transparent" onChangeText={(val) => setPaginaSolicitada(val)} value={paginaSolicitada} placeholder="Índ de página" style={styles.input_indices} keyboardType="numeric"/>)}/>
                <NumberFormat value={posicionSolicitada} displayType={'text'} renderText={ (posicionSolicitada) => (
                        <TextInput underlineColorAndroid="transparent" onChangeText={(val) => setPosicionSolicitada(val)} value={posicionSolicitada} placeholder="Índ de posición" style={styles.input_indices} keyboardType="numeric"/>)}/>
            </View>

            <TouchableOpacity style={{marginTop:20, width: 190, height: 40, backgroundColor: 'green',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=>solictarItem()} >
                    <Text style={{color:'white', fontSize: 15}}>Realizar Solicitud</Text>
            </TouchableOpacity>

            <View style={{top:20,alignItems: 'center',justifyContent: 'center',flexDirection: 'row'}}>
                <NumberFormat value={eliminarItem} displayType={'text'} renderText={ (eliminarItem) => (
                        <TextInput underlineColorAndroid="transparent" onChangeText={(val) => setEliminarItem(val)} value={eliminarItem} placeholder="Índ eliminar" style={styles.input_eliminiar} keyboardType="numeric"/>)}/>
                <TouchableOpacity style={{marginTop:0, width: 130, height: 40, backgroundColor: 'red',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=>eliminarPalabra()} >
                    <Text style={{color:'white', fontSize: 15}}>Eliminar palabra</Text>
                </TouchableOpacity>
        </View>

        </View>

        <View style={{top:100,flexDirection: 'column',width:'90%'}}>
        <Text style={{fontSize: 15, justifyContent:'center',marginLeft:110,marginTop:10 ,fontWeight:'bold',fontStyle: 'italic'}}>Memoria Lógica</Text>
            <TableUser procesos = {funciones.TablaUsuario}/>
        <Text style={{fontSize: 15, justifyContent:'center',marginLeft:110,marginTop:80 ,fontWeight:'bold',fontStyle: 'italic'}}>Tabla de páginas</Text>
            <TableData procesos = {funciones.TablaPaginas}/>

            <View style={{ flexDirection: 'column', marginTop: 20, alignItems: "center",justifyContent:'center'}}>
                <Text style={{fontSize: 15, justifyContent:'center',marginLeft:25,marginTop:80 ,fontWeight:'bold',fontStyle: 'italic'}}>Memoria Física</Text>
                <ProcessList procesos = {funciones.MemoriaFisica}/>
                <Text style={{fontSize: 15, justifyContent:'center',marginLeft:25,marginTop:80 ,fontWeight:'bold',fontStyle: 'italic'}}>Memoria Virtual</Text>
                <ProcessList procesos = {funciones.MemoriaVirtual}/>
            </View>
        </View>

        <View style={{width: "90%",top: 200, backgroundColor: '#fff',alignItems: 'center',flexDirection: 'column'}}>
            <TextInput multiline={true} style={styles.item_resultado} numberOfLines={8} value={funciones.paginationLog}/>
            <TouchableOpacity style={{marginTop:20, width: 190, height: 45, backgroundColor: 'blue', padding:10, alignItems: 'center', borderRadius: 5}} onPress={ ()=> Speaker(funciones.paginationLog)} >
                <Text style={{color:'white', fontSize: 17}}>Reproducir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:15, width: 190, height: 45, backgroundColor: 'red', padding:10, alignItems: 'center', borderRadius: 5}} onPress= { ()=> Pause()}>
                <Text style={{color:'white', fontSize: 17}}>Parar</Text>
            </TouchableOpacity>
        </View>

        <View style={{top:620,width: "100%",height:250}}>
        </View>


    </View>
    </ScrollView>
    )
    
}
export default paginacion;