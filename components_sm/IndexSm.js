/**
 * View de los algoritmos de Segmentacion
 * @author Kevin David Sanchez Solis
 * @author Anderson Ramirez Vasquez
 */

import React from 'react';
import { View , ScrollView, Button, TextInput, TouchableOpacity, Text} from 'react-native';
import * as funciones from '../scripts_sm/Main';
import ProcessList from './ProcessListComponent';
import PhysicalMemory from './PhysicalMemoryComponent';
import SegmentList from './SegmentListComponent';
import { styles } from './styles';
import NumberFormat from 'react-number-format';
import { Speaker, Pause } from '../components_drawer/Speaker';

function segmentation() {

    //Variable que almacena el indice de la pagina a eliminar
    const [eliminarItem,   setEliminarItem]                 = React.useState("");
    //Variable que almacena la palabra que corresponde al proceso creado
    const [palabra,   setPalabra, getPalabra]                           = React.useState("");
    //Variable que almacena el numero de segmento que se solicita
    const [segmentoSolicitado,   setSegmentoSolicitado]     = React.useState("");
    //Variable que almacena la posicion del item solicitado
    const [posicionSolicitada,   setPosicionSolicitada]     = React.useState("");
    //Variable que acciona el refresco de la tabla
    const [refreshing, setRefreshing]                       = React.useState(false);

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
        let palabraClone = ""+palabra;  
        
        // Valida que la palabra no este vacia
        if (palabraClone == "") {          
            return alert("No se admiten Palabras vacÍas");
        }
        // Valida que la palabra no exceda el tamaño disponible
        if (palabra.length <= funciones.EspaciosDisponibles) {
            // Invoca al metodo crear proceso
            funciones.crearProceso(palabra);

            // Limpia campo de texto
            setPalabra("");

            //Refresco de la tabla del algortimo de asignacion
            return onRefresh();
        }
        return alert("No hay espacio suficiente para guardar el proceso");
    }

    /**
     * Permite traer de la memoria fisica el dato solicitado
     */
    function solictarItem() {

        // Variable auxiliar 
        let palabraClone = segmentoSolicitado.trim();  

        // Valida que la palabra no este vacia
        if (palabraClone == "" || parseInt(palabraClone)<0) {          
            return alert("Ingrese un índice válido de segmento.");
        }
        palabraClone = posicionSolicitada.trim();  

        // Valida que la palabra no este vacia
        if (palabraClone == "" || parseInt(palabraClone)<0) {          
            return alert("Ingrese el índice válido de la posición dentro del segmento a solicitar.");
        }

        // Valida si el segmento existe
        if (!funciones.TablaProcesos[segmentoSolicitado]) {
            return alert("No existe el segmento");
        }

        // Valida que la posicion sea mayor a 0
        /*
        if(posicionSolicitada <= 0) {
            return alert("Las posiciones inician en 1.");
        }
        */

        // Valida si el indice solicitado esta en el rango del segmento
        else if (funciones.TablaDatos[segmentoSolicitado].tamaño >= posicionSolicitada) {
            // Invoca el metodo que trae el item solicitado
            funciones.solicitarItem(segmentoSolicitado, posicionSolicitada);

            //Limpia campos de texto
            setSegmentoSolicitado("");
            setPosicionSolicitada("");

            return onRefresh();
        }
        return alert("El índice excede el tamaño del segmento");
    }

    /**
     * Permite eliminar un proceso o segmento
     */
    function eliminarSegmento() {
        // Variable auxiliar 
        let palabraClone = ""+eliminarItem;  

        // Valida que la palabra no este vacia
        if (palabraClone == "" || parseInt(palabraClone)<0) {          
            return alert("Ingrese el índice válido del segmento a eliminar.");
        }

        // Valida si el segmento existe
        if (!funciones.TablaProcesos[parseInt(eliminarItem)]) {
            return alert("No existe el segmento índicado.");
        }

        // Invoca el metodo que elimina de los array la palabra indicada
        funciones.eliminarSegmento(parseInt(eliminarItem));

        // Limpia campos de texto
        setEliminarItem("");

        //Refresco de la tabla del algortimo de asignacion
        return onRefresh();
    }
      

    /**
     * Retorna la vista con los componentes
     */
    return(

        <ScrollView style={{paddingVertical: 0}}>
         
        <View style={{width: `100%` ,height: `100%`,backgroundColor: '#fff',alignItems: 'center',flexDirection: 'column'}}>
            {/**View de los Input proceso - palabra */}

        <View style={{top:10 ,alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
            <View style={{top:10 ,alignItems: 'center',justifyContent: 'center',flexDirection: 'row'}}>
                <TextInput onChangeText={(val) => setPalabra(val)} value={palabra} style={styles.input_sm_palabra} placeholder="Palabra" keyboardType='default' />
                {/**View del boton crear proceso*/}
                <TouchableOpacity style={{width: 160, height: 40, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}} onPress= { ()=>crearProceso() }>
                    <Text style={{color:'white', fontSize: 15}}>Crear Proceso</Text>
                </TouchableOpacity>
            </View>

            <View style={{top:20 ,alignItems: 'center',justifyContent: 'center',flexDirection: 'row'}}>
                {/**View de los Input pagina y posicion solicitada*/}
                <NumberFormat  value={segmentoSolicitado} displayType={'text'} renderText={ (segmentoSolicitado) => (
                    <TextInput underlineColorAndroid="transparent" onChangeText={(val) => setSegmentoSolicitado(val)} value={segmentoSolicitado} placeholder="índ segmento" style={styles.input_sm_id} keyboardType="numeric"/>)}/>
                <NumberFormat value={posicionSolicitada} displayType={'text'} renderText={ (posicionSolicitada) => (
                    <TextInput underlineColorAndroid="transparent" onChangeText={(val) => setPosicionSolicitada(val)} value={posicionSolicitada} placeholder="índ segmento" style={styles.input_sm_id} keyboardType="numeric"/>)}/>
            </View>

            <View style={{top:30 ,alignItems: 'center',justifyContent: 'center',flexDirection: 'row'}}>
                 {/**View del boton realizar solicitud */}
                 <TouchableOpacity style={{width: 160, height: 40, backgroundColor: 'green',padding:10,alignItems: 'center',borderRadius: 5}} onPress= { ()=>solictarItem() }>
                    <Text style={{color:'white', fontSize: 15}}>Realizar Solicitud</Text>
                </TouchableOpacity>
            </View>

            <View style={{top:40 ,alignItems: 'center',justifyContent: 'center',flexDirection: 'row'}}>
                <NumberFormat value={eliminarItem} displayType={'text'} renderText={ (eliminarItem) => (
                    <TextInput underlineColorAndroid="transparent" onChangeText={(val) => setEliminarItem(val)} value={eliminarItem} placeholder="índ segmento" style={styles.input_sm_palabra} keyboardType="numeric" />)}/>
                    <TouchableOpacity style={{ width: 160, height: 40, backgroundColor: 'red',padding:10,alignItems: 'center',borderRadius: 5}} onPress= { ()=>eliminarSegmento() }>
                        <Text style={{color:'white', fontSize: 15}}>Eliminar segmento</Text>
                    </TouchableOpacity>
            </View>
               
        </View>
            {/**View del input eliminar proceso - palabra con el indice*/}
            {/**View tabla de procesos */}
            <View style={{top:110, flexDirection: 'column',width: "90%", alignContent: "center", justifyContent: "center"}}>
            <Text style={{fontSize: 15, justifyContent:'center',marginLeft:110,marginBottom:10 ,fontWeight:'bold',fontStyle: 'italic'}}>Dirección Lógica</Text>
                <ProcessList procesos = {funciones.TablaProcesos}/>
                <Text style={{fontSize: 15, justifyContent:'center',marginLeft:110,marginBottom:10, marginTop:90 ,fontWeight:'bold',fontStyle: 'italic'}}>Tabla de segmentos</Text>
                <SegmentList procesos = {funciones.TablaDatos}/>
                <Text style={{fontSize: 15, justifyContent:'center',marginLeft:110,marginBottom:10, marginTop:90 ,fontWeight:'bold',fontStyle: 'italic'}}>Memoria Física</Text>
                <PhysicalMemory procesos = {funciones.MemoriaFisica}/>

                <View style={{width: "100%",height:200}}>
                </View>
            </View>

            <View style={{width: "90%",top: 0, backgroundColor: '#fff',alignItems: 'center',flexDirection: 'column'}}>
                <TextInput style={styles.item_resultado} multiline={true} numberOfLines={8} value={funciones.logSegmentacion}/>
                <TouchableOpacity style={{marginTop:20,width: 160, height: 45, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}} onPress= { ()=> Speaker(funciones.logSegmentacion)}>
                    <Text style={{color:'white', fontSize: 17}}>Reproducir</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:15, width: 160, height: 45, backgroundColor: 'red', padding:10, alignItems: 'center', borderRadius: 5}} onPress= { ()=> Pause()}>
                    <Text style={{color:'white', fontSize: 17}}>Parar</Text>
                </TouchableOpacity>
            </View>
           
            <View style={{width: "100%",height:50}}>
            </View>

        </View>
        </ScrollView>
    )
    
}
export default segmentation;