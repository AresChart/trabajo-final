import React , {useState} from 'react';
import {styles} from '../styles/styles';
import {View, ScrollView,Picker,Button,TextInput,TouchableOpacity,Text} from 'react-native';
import TableInputProccessesComponent from './TableInputProccessesComponent';
import MemoryCellsComponent from './MemoryCellsComponent';
import * as main from '../scripts_ea/main';
import NumberFormat from 'react-number-format';
import { Speaker, Pause } from '../components_drawer/Speaker';

/**
 * @author Kevin David Sanchez Solis
 * @author Anderson Ramirez Vasquez
 */

export default function IndexEa(props) {

  //Variable que acciona el refresco de la tabla
  const [refreshing, setRefreshing] = React.useState(false);
  const [tablaEntrada, setTablaEntrada] = useState([]);
  const [cantidadCeldas, setCantidadCeldas] = useState("");
  const [cantidadCeldasMemoria, setCantidadCeldasMemoria] = useState("");
  const [banderaEntrada,setBanderaEntrada] = useState(false);
  const [banderaSalida,setBanderaSalida] = useState(false);
  const [celdasMemoria, setCeldasMemoria] = useState([]);
  const [itemAjustes,setItemAjustes] = useState("Primer Ajuste");
  const [itemAlgoritmoAjuste,setItemAlgoritmoAjuste] = useState("Ajuste Sobre Huecos");

  const [listaProcesos, setListaProcesos] = useState("");
  const [listaRequerimientos, setListaRequerimientos] = useState([]);

  const [parrafoActivo, setParrafoActivo] = React.useState(true);
  const [bottonReproducirActivo, setBottonReproducirActivo] = React.useState(true);
  const [resultadoComponentActivo, setResultadoComponentActivo] = React.useState(true);
  const [parrafoResultado, setparrafoResultado] = useState("");

  const [isVisible,setIsVisible] = useState('none');

  /**
      * Metodo que realiza la espera mientras se ejecuta una accion
      * @param {*} timeout Tiempo de espera que se quiere
      * @returns El tiempo de espera
      */
   const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
} 

/**
 * Metodo que realiza las operaciones para el refresco de la tabla
 */
const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
}, []);

    function tableInputProcessesComponent (){
        if(banderaEntrada){
          return(
          <ScrollView style={{paddingVertical: 5,marginTop: 60}}>
            <TableInputProccessesComponent  listaProcesos={listaProcesos}  listaRequerimientos={listaRequerimientos} setListaProcesos={setListaProcesos} setListaRequerimientos={setListaRequerimientos}/>
          </ScrollView>
          );
        }
        return(<></>);
    }

    function buttonGenerarAleatorios (){
      if(banderaEntrada){
        return(
        <TouchableOpacity style={{marginTop:20, width: 300, height: 45, backgroundColor: '#EDAF0A',padding:10,alignItems: 'center',borderRadius: 5}}onPress={()=>inicializarTablaEntradaNumerosAleatorios()} >
          <Text style={{color:'white', fontSize: 17}}>Generar Aleatorios</Text>
        </TouchableOpacity>);  
      }
  
      return(<></>);
    }


    function buttonEjecutarAlgoritmo (){
      if(banderaEntrada){
        return(
        <TouchableOpacity style={{marginTop:20, width: 300, height: 47, backgroundColor: 'green',padding:10,alignItems: 'center',borderRadius: 5}}onPress={()=>iniciarAlgoritmo(false)} >
          <Text style={{color:'white', fontSize: 17}}>Ejecutar Algortimo</Text>
        </TouchableOpacity>);
      }
  
      return(<></>);
    }

    function buttonEjecutarAlgoritmoPasoAPaso (){
      if(banderaEntrada){
        return(
        <TouchableOpacity style={{marginTop:20, width: 300, height: 45, backgroundColor: 'green',padding:10,alignItems: 'center',borderRadius: 5}}onPress={()=>iniciarAlgoritmo(true)} >
          <Text style={{color:'white', fontSize: 17}}>Ejecutar x Pasos</Text>
        </TouchableOpacity>);
      }
  
      return(<></>);
    }

    function memoryCellsComponent (){
      if(banderaSalida){
        return( 
        <ScrollView style={{paddingVertical: 20 }}>
          <MemoryCellsComponent celdasMemoria={celdasMemoria}/>
        </ScrollView>
        
        );
      }
  
      return(<></>);
    }

    function parrafoResultadoComponent(){
      if(parrafoActivo){
        return(<TextInput style={styles.item_resultado} multiline={true} numberOfLines={8} value={parrafoResultado}/>);
      } 

    return(<></>);
    }

    function bottonReproducirComponent(){
      if(bottonReproducirActivo){
        return(
        <TouchableOpacity  style={{marginTop:15, width: '90%', height: 45, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=> Speaker(parrafoResultado)}>
          <Text style={{color:'white', fontSize: 17}}>Reproducir</Text>
        </TouchableOpacity>);
      }   

    return(<></>);
    }

    function resultadoComponent(){
        if(resultadoComponentActivo && banderaSalida){
          return( 
          <View style={{top:0,width: '90%',height:350,alignItems: 'center',flexDirection: 'column'}}>
            {parrafoResultadoComponent()}
            {bottonReproducirComponent()}
            <TouchableOpacity style={{marginTop:15, width: '90%', height: 45, backgroundColor: 'red',padding:10,alignItems: 'center',borderRadius: 5}} onPress= { ()=> Pause()}>
              <Text style={{color:'white', fontSize: 17}}>Parar</Text>
           </TouchableOpacity>
          </View>
        );
      }
  
      return(<></>);
    }
    

    function pickerAjustes(){
      if(banderaEntrada){
      return (
      <Picker style={{marginTop:0, height: 40, width:300}} selectedValue={itemAjustes} onValueChange={(itemValue, itemIndex) => setItemAjustes(itemValue)}>
      <Picker.Item label={"Primer Ajuste"}  value={"Primer Ajuste"}/>
      <Picker.Item label={"Mejor Ajuste"}  value={"Mejor Ajuste"}/>
      <Picker.Item label={"Peor Ajuste"}  value={"Peor Ajuste"}/>
    </Picker>);}
      return(<></>);
    }

    function cambiarItemAlgoritmosAjustes(itemValue){
      setItemAlgoritmoAjuste(itemValue);
      main.inicializarVariables();
      setCeldasMemoria([]);
    }

    function pickerAlgoritmoAjuste(){
      if(banderaEntrada){
      return (
      <Picker style={{marginTop:20 , height: 40, width:300}} selectedValue={itemAlgoritmoAjuste} onValueChange={(itemValue, itemIndex) => cambiarItemAlgoritmosAjustes(itemValue)}>
        <Picker.Item label={"Ajuste Sobre Huecos"}  value={"Ajuste Sobre Huecos"}/>
        <Picker.Item label={"Ajuste Sobre Solicitudes"}  value={"Ajuste Sobre Solicitudes"}/>
      </Picker>);}
      return(<></>);
    }

    function inicializarTablaEntradaNumerosAleatorios(){
      let procesos = "";
      main.inicializarTablaEntradaNumerosAleatorios(itemAlgoritmoAjuste,tablaEntrada);
      let resultado = main.inicializarListasAleatorias(listaProcesos,listaRequerimientos,tablaEntrada);
      setListaProcesos(resultado[0]);
      setListaRequerimientos(resultado[1]);
      onRefresh();
    }


    function realizarValidaciones(){
      let textCantidadCeldasValido = main.validarCantidadCeldas(cantidadCeldas);
      if(!textCantidadCeldasValido){
         alert("Por favor ingrese un valor de celdas válido");
         return true;
      }

      if(parseInt(cantidadCeldasMemoria)>20){
        alert("Por favor NO ingreses más de 20 celdas de memoria");
        return true;
      }

      if(parseInt(cantidadCeldasMemoria)<1){
         alert("Por favor ingrese una cantidad de celdas válida");
         return true;
      }

      if(parseInt(cantidadCeldasMemoria) < parseInt(cantidadCeldas)){
         alert("Por favor NO ingreses más de "+cantidadCeldasMemoria+" solicitudes");
         return true;
      }

      if(parseInt(cantidadCeldas)<1){
         alert("Por favor ingrese mínimo 3 solicitudes !");
         return true;
      }
    }

      function inicializarTabla(){

        if(realizarValidaciones()){
          return;
        }

        setIsVisible('flex');
        crearTablaEntrada();
        setBanderaEntrada(true);
      }
      
      function crearTablaEntrada(){
        let listaProcesos ="";
        let listaRequerimientos = [];
        let tablaEntrada = [];
        for (let index = 0; index < cantidadCeldas; index++) {

          if(index==cantidadCeldas-1){
            listaProcesos+=("S"+(index+1));
          }else{
            listaProcesos+=("S"+(index+1)+"\n");
          }
          listaRequerimientos.push("S 1");
          tablaEntrada.push({proceso: "S"+(index+1), solicita: "", libera: ""});
        }
        setListaProcesos(listaProcesos);
        setListaRequerimientos(listaRequerimientos);
        setTablaEntrada(tablaEntrada);
      }

      function inicializarCeldasMemoria(listaSalida){
        let celdasMemoria = [];
        for (let i = 0; i < listaSalida.length; i++) {
          celdasMemoria.push({celdas:listaSalida[i]});
        }
        setCeldasMemoria(celdasMemoria);
        setBanderaSalida(true);
      }

      function iniciarAlgoritmo (isPasoAPaso){
        if(realizarValidaciones()){
          return;
        }
        let listaSalida;
        let resultado = main.inicializarTablaEntrada(listaProcesos,listaRequerimientos,tablaEntrada,cantidadCeldasMemoria);

        if(resultado){
          return alert("Por favor solicite una cantidad inferior a la cantidad de celdas de memoria !");
        }

        if(itemAlgoritmoAjuste === "Ajuste Sobre Solicitudes"){

          let contieneLiberar = main.contieneLiberarTablaEntrada(tablaEntrada);
          if(contieneLiberar){
            return alert("Solo ingrese solicitudes !");
          }

           main.asignarCantidadCeldasMemoria(cantidadCeldasMemoria);
           listaSalida = main.ejecutarAlgoritmoAjusteSolicitudes(itemAjustes,tablaEntrada,isPasoAPaso,cantidadCeldasMemoria);
           
           setparrafoResultado(listaSalida[1]);
        }else{
           main.asignarCantidadCeldasMemoria(cantidadCeldasMemoria);
           listaSalida = main.ejecutarAlgoritmoAjusteHuecos(itemAjustes,tablaEntrada,isPasoAPaso,cantidadCeldasMemoria);
           setparrafoResultado(listaSalida[1]);
        }

        if(listaSalida[1]===""){
          setResultadoComponentActivo(false);
        }else{
          setResultadoComponentActivo(true);
        }

        inicializarCeldasMemoria(listaSalida[0]);
      }
   
 return (

  <ScrollView style={{paddingVertical: 0,backgroundColor: '#fff'}}>
    <View style={{width:'100%',height:'100%',backgroundColor: '#fff',alignItems: 'center',flexDirection: 'column'}}>

          <View style={{height:200,top:10,alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
             <NumberFormat value={cantidadCeldas} displayType={'text'} renderText={ (cantidadCeldas) => (
                     <TextInput style={styles.input} onChangeText={(val)=>setCantidadCeldas(val)} value={cantidadCeldas} placeholder="Cantidad de Celdas" keyboardType='numeric'/>)}/>

             <NumberFormat value={cantidadCeldasMemoria} displayType={'text'} renderText={ (cantidadCeldasMemoria) => (
                     <TextInput style={styles.input} onChangeText={(val)=>setCantidadCeldasMemoria(val)} value={cantidadCeldasMemoria} placeholder="Celdas de Memoria" keyboardType='numeric'/>)}/>

              <TouchableOpacity style={{marginTop:5, width: 300, height: 40, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=>inicializarTabla()} >
                <Text style={{color:'white', fontSize: 15}}>Crear Solicitudes</Text>
              </TouchableOpacity>
          </View>

         <View style={{top:20 ,alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
              {pickerAjustes()}
              {pickerAlgoritmoAjuste()}
              {buttonGenerarAleatorios()}
              {buttonEjecutarAlgoritmo()}
              {buttonEjecutarAlgoritmoPasoAPaso()}
          </View>

          <View style={{width:'90%' , alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
             {tableInputProcessesComponent()}
          </View>
          <Text style={{display:isVisible,fontSize: 15, justifyContent:'center',margin:10 ,fontStyle: 'italic'}}>Proceso (nombre)</Text>
          <Text style={{display:isVisible,fontSize: 15, justifyContent:'center',margin:10 ,fontStyle: 'italic'}}>Requerimiento (S: Solicitar, L: Liberar) </Text>

          {memoryCellsComponent()}

         {resultadoComponent()}
    </View>
      </ScrollView>
    );
}