import React , {useState} from 'react';
import {styles} from '../styles/styles';
import {View, ScrollView,Picker,TextInput, Button,TouchableOpacity,Text} from 'react-native';
import TableInputThreadsComponent from './TableInputThreadsComponent';
import * as main from '../scripts_sp/Main';
import NumberFormat from 'react-number-format';
import {Speaker,Pause} from '../components_drawer/Speaker';


/**
 * @author Kevin David Sanchez Solis
 * @author Anderson Ramirez Vasquez
 */

export default function IndexSp() {

  //Variable que acciona el refresco de la tabla
  const [refreshing, setRefreshing] = React.useState(false);
  const [cantidadSemaforos, setCantidadSemaforos] = useState("");
  const [textSemaforos, setTextSemaforos] = useState(0);
  const [textVariables, setTextVariables] = useState("");
  const [textSalida, setTextSalida] = useState("");
  const [textHilosBloqueados, setTextHilosBloqueados] = useState("");
  const [verTablaEntrada, setVerTablaEntrada] = useState(false);
  const [tablaEntrada, setTablaEntrada] = useState([]);
  const [textoFinal,setTextoFinal] = useState("");
  const [banderaSalida,setBanderaSalida] = useState(false);
  const [isVisible,setIsVisible] = React.useState('none');


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


function tableInputThreadsComponent (){
  if(verTablaEntrada){
    return(<TableInputThreadsComponent  height={170} tablaEntrada={tablaEntrada} setTablaEntrada={setTablaEntrada} />);
  }

  return(<></>);
}

function  crearTablaEntrada (){
    setTablaEntrada({Hilo_1 : "", Hilo_2: "", Hilo_3: "", Hilo_4: "", Hilo_5: ""});
  }

  function init(){
    crearTablaEntrada();
    setVerTablaEntrada(true);
  }

  function establecerSemaforos(){
    if(parseInt(cantidadSemaforos>5)){
     return alert("Por favor no ingrese más de 5 semáforos !")
    }

    if(cantidadSemaforos==="" || parseInt(cantidadSemaforos)<=0 ){
      return alert("Ingrese una cantidad de semáforos válida !")
    }

    let textSemaforos = "";
    for (let index = 0; index < cantidadSemaforos; index++) {
      textSemaforos += "[s"+(index+1)+" valor=1]"
    }
    setIsVisible('flex');
    setTextSemaforos(textSemaforos);
    setTextVariables("c=0,s=0");
    init();
  }
 
  function textInputSemaforosComponent(){
    if(verTablaEntrada){
      return(<TextInput style={styles.textInput_semaforos_sp} onChangeText={(val)=>setTextSemaforos(val)} placeholder="semaforos" value={textSemaforos}/>);
    }
  
    return(<></>);
  }

  function textInputVariablesComponent(){
    if(verTablaEntrada){
      return(<TextInput style={styles.textInput_variables_sp} onChangeText={(val)=>setTextVariables(val)} placeholder="variables" value={textVariables}/>);
    }
  
    return(<></>);
  }

  function generarSemaforosAleatorios(){
   var matrizEntrada= main.generarSemaforosAleatorios(textSemaforos,tablaEntrada);
   setTablaEntrada({Hilo_1:matrizEntrada[0], Hilo_2:matrizEntrada[1], Hilo_3:matrizEntrada[2], Hilo_4:matrizEntrada[3] ,Hilo_5: matrizEntrada[4]});
  }

  

  function ejecutarAlgoritmo(){
    let textSemaforosValido = main.validarTextSemaforos(textSemaforos);
    if(!textSemaforosValido){
      return alert("Por favor valida la sintaxis de los semaforos inicializados");
    }
    
    let textVariablesValido = main.validarVariablesEntrada(textVariables);
    if(!textVariablesValido){
      return alert("Por favor valida la sintaxis de las variables inicializadas");
    }
    
    let tablaEntradaValida = main.validarTextHilos(tablaEntrada);
    if(!tablaEntradaValida){
      return alert("Por favor ingrese un valor en por lo menos 1 hilo");
    }

    let resultado =  main.ejecutarAlgoritmo(textSemaforos,tablaEntrada,textVariables);
    let estaBloqueadoElSistema = resultado[1];
    setTextHilosBloqueados(""+resultado[2]);
    setTextSalida(""+resultado[0]);
    setTextVariables(resultado[3]);
    if(estaBloqueadoElSistema){
      alert("Se bloqueo el sistema !");
    }

    let text = main.editarTextoSalida(""+resultado[0],""+resultado[2],textSemaforos,textVariables)
    setTextoFinal(text);
    setBanderaSalida(true);
    

    onRefresh();
   }

   function limpiarCampos(){
    setTextHilosBloqueados("");
    setTextSalida("");
    setTextSemaforos("");
    setTextVariables("");
    crearTablaEntrada();
   }

  function buttonGenerarSemaforosAleatoriosComponent(){
    if(verTablaEntrada){
      return(
        <TouchableOpacity style={{marginTop:20, width: 300, height: 40, backgroundColor: '#EDAF0A',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=>generarSemaforosAleatorios()} >
          <Text style={{color:'white', fontSize: 15}}>Semaforos Aleatorios</Text>
        </TouchableOpacity>
      );
    }
  
    return(<></>);
  }

  function buttonEjecutarAlgoritmo(){
    if(verTablaEntrada){
      return(
        <TouchableOpacity style={{marginTop:20, width: 300, height: 40, backgroundColor: 'green',padding:10,alignItems: 'center',borderRadius: 5}}onPress={()=>ejecutarAlgoritmo()} >
          <Text style={{color:'white', fontSize: 15}}>Ejecutar</Text>
        </TouchableOpacity>);
    }
  
    return(<></>);
  }

  function buttonClear(){
    if(verTablaEntrada){
      return(
        <TouchableOpacity style={{marginTop:150, width: 300, height: 40, backgroundColor: 'red',padding:10,alignItems: 'center',borderRadius: 5}}onPress={()=>limpiarCampos()} >
          <Text style={{color:'white', fontSize: 15}}>Limpiar</Text>
        </TouchableOpacity>);
    }
  
    return(<></>);
  }

  function textAreaSalidaComponent(){
    if(verTablaEntrada){
      return (
        <TextInput style={styles.textInput_salida_sp} numberOfLines={13} multiline={true}
        onChangeText={(text) => setTextSalida(text)} value={textSalida}/>
      );
    }

    return (<></>)
  }

  function textAreaHilosBloqueadosComponent(){
    if(verTablaEntrada){
      return ( 
        <TextInput style={styles.textInput_hilos_bloqueados_sp} 
        onChangeText={(text) => setTextHilosBloqueados(text)} value={textHilosBloqueados}/>
      );
    }

    return (<></>)
  }

  function resultado(){
    if(banderaSalida){
      return(
        <View style={{marginTop:80,width: '90%', height:320,backgroundColor: '#fff',alignItems: 'center',flexDirection: 'column'}}>
          <TextInput style={styles.item_resultado} multiline={true} numberOfLines={8} value={textoFinal}/>
          <TouchableOpacity  style={{marginTop:15, width: '90%', height: 45, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=> Speaker(textoFinal)}>
            <Text style={{color:'white', fontSize: 17}}>Reproducir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:15, width: '90%', height: 45, backgroundColor: 'red',padding:10,alignItems: 'center',borderRadius: 5}} onPress= { ()=> Pause()}>
                      <Text style={{color:'white', fontSize: 17}}>Parar</Text>
            </TouchableOpacity>
        </View>
        );
    }
  
    return(<></>);
  }

 return (

  <ScrollView style={{paddingVertical: 0, backgroundColor: '#fff',}}>
    <View style={{width:'100%',height:'100%',backgroundColor: '#fff',alignItems: 'center',flexDirection: 'column'}}>
       
        <View style={{top:10 ,alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
          <View style={{alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
              
              <NumberFormat value={cantidadSemaforos} displayType={'text'} renderText={ (cantidadSemaforos) => (
                    <TextInput style={styles.input} onChangeText={(val)=>setCantidadSemaforos(val)} value={cantidadSemaforos} placeholder="Cantidad de Semaforos" keyboardType='numeric'/>)}/>

              <TouchableOpacity style={{marginTop:10,marginBottom:10, width: 300, height: 40, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=>establecerSemaforos()} >
                <Text style={{color:'white', fontSize: 15}}>Establecer Semaforos</Text>
              </TouchableOpacity>
          </View>
            <Text style={{display:isVisible ,fontSize: 15, justifyContent:'center',marginLeft:10,marginTop:10 ,fontStyle: 'italic'}}>Variables</Text>
            {textInputVariablesComponent()}
            <Text style={{display:isVisible ,fontSize: 15, justifyContent:'center',marginLeft:10,marginTop:20 ,fontStyle: 'italic'}}>Semáforos</Text>
            {textInputSemaforosComponent()}
            {buttonGenerarSemaforosAleatoriosComponent()}
            {buttonEjecutarAlgoritmo()}
           
        </View>
        
        {tableInputThreadsComponent()}
        
        <View style={{marginTop:0,height:400,width: '100%',top:60 ,alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
          {buttonClear()}
          <Text style={{display:isVisible ,fontSize: 15, justifyContent:'center',marginLeft:10,marginTop:20 ,fontStyle: 'italic'}}>Texto de salida</Text>
          {textAreaSalidaComponent()}
          <Text style={{display:isVisible ,fontSize: 15, justifyContent:'center',marginLeft:10,marginTop:10 ,fontStyle: 'italic'}}>Hilos Bloqueados</Text>
          {textAreaHilosBloqueadosComponent()}
        </View>

        {resultado()}
              
        <View style={{width:'70%',height:80,end:100}}>
        </View> 
      
    </View>
  </ScrollView>
    );
}