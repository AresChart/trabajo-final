import React , {useState} from 'react';
import {styles} from '../styles/styles';
import {View,ScrollView,Picker,Button,TextInput,TouchableOpacity,Text} from 'react-native';
import TableInputComponent from './TableInputComponet';

import * as main from '../scripts_ap/Main';
import TableOutComponent from './TableOutComponen';
import TableProcessComponent from './TableProcessComponent';


export default function IndexAp() {

  const [numeroProcesos, setNumeroProcesos] = useState(0);
  const [numeroCPU, setNumeroCPU] = useState(0);
  const [numeroNucleos, setNumeroNucleos] = useState(0);
  const [quantum, setQuantum] = useState(0);
  const [tablaEntrada, setTablaEntrada] = useState([]);
  const [tablaSalida, setTablaSalida] = useState([]);
  const [banderaEntrada,setBanderaEntrada] = useState(false);
  const [banderaSalida,setBanderaSalida] = useState(false);
  const [isQuamtum,setIsQuantum] = useState(false);
  const [item_algoritmo,setItem_algoritmo] = useState("FCFS");

  const [isPrioridad,setIsPrioridad] = useState('none');
  
  function tableInputComponent (){
    if(banderaEntrada){
      return(<TableInputComponent isPrioridad={isPrioridad} height={160+(40*numeroProcesos)} tablaEntrada={tablaEntrada} setTablaEntrada={setTablaEntrada} />);
    }
    return(<></>);
  }

  function tableOutComponent (){
    if(banderaSalida){
      return( <TableOutComponent top={10+(5*numeroProcesos)} height={40*numeroProcesos} tablaSalida={tablaSalida}/>);
    }

    return(<></>);
  }

  function buttonEjecutarAlgoritmoComponent (){
    if(banderaEntrada){
      return(
        <TouchableOpacity style={{marginTop:20, width: 190, height: 40, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=>iniciarAlgoritmo()} >
          <Text style={{color:'white', fontSize: 17}}>Ejecutar Algoritmo</Text>
        </TouchableOpacity>);
    }

    return(<></>);
  }

function init(){
  crearTablaEntrada();
  setBanderaEntrada(true);
  onRefresh();
}

function crearTablaEntrada(){
  let tablaEntrada = [];
  for (let index = 0; index < numeroProcesos; index++) {
    tablaEntrada.push({pid: index+1, t_llegada: "", t_ejecucion: "", prioridad:"",rafaga_es: ""})
  }
  setTablaEntrada(tablaEntrada);
}

function inicializarTablaSalida(matrizSalida){
  let tablaSalida = [];
  for (let i = 0; i < matrizSalida.length; i++) {
    tablaSalida.push({pid:matrizSalida[i][0], t_salida:matrizSalida[i][1], t_servicio:matrizSalida[i][2], t_espera:matrizSalida[i][3] ,indice_servicio: matrizSalida[i][4]});
  }
  setTablaSalida(tablaSalida);
  setBanderaSalida(true);
  onRefresh();
}

const [tiempoMasLejano, setTiempoMasLejano] = useState(0);

function iniciarAlgoritmo (){
  let nucleosTotal = parseInt(numeroNucleos)*parseInt(numeroCPU);
  let resultado = main.ejecutarAlgoritmo(item_algoritmo,tablaEntrada,nucleosTotal,parseInt(quantum));
   setTiempoMasLejano(resultado[1]);
   setTablaStyles(main.crearTablaDeEstilos());
   inicializarTablaSalida(resultado[0]);
}

//Variable que acciona el refresco de la tabla
const [refreshing, setRefreshing] = React.useState(false);

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

const [tablaStyles, setTablaStyles] = useState(new Array());
function crearStyles(){
  //setTablaStyles();


 //for (let index = 0; index < 10; index++) {
 // tablaStyles.push(new Array('red','#4B53BC','#4B53BC'));
 // tablaStyles[index]=new Array(3);
  //tablaStyles[index][0] ='red';
 // tablaStyles[index][1] ='#4B53BC';
  //tablaStyles[index][2] ='#4B53BC';
 //}
 //tablaStyles.push(new Array('#4B53BC','#4B53BC'));

}

function inicializarTablaEntradaNumerosAleatorios(){
  main.inicializarTablaEntradaNumerosAleatorios(tablaEntrada);
  return onRefresh();
 //setTablaEntrada(tabla);
}

function bottonInicializarTablaeEntrada(){
  if(banderaEntrada){
    return(
    <TouchableOpacity style={{marginTop:20, width: 190, height: 40, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=>inicializarTablaEntradaNumerosAleatorios()} >
      <Text style={{color:'white', fontSize: 17}}>Generar Aleatorios</Text>
    </TouchableOpacity>);
  }

  return(<></>);
}

function tableProcessComponent (){
  if(banderaSalida){
    return(
      <TableProcessComponent width={'90%'} tablaStyles={tablaStyles} />
    );
  }
  return(<></>);
}

function cambiarValorPickerAlgoritmos(itemValue){
  setItem_algoritmo(itemValue);
  if(itemValue==="RR"){
    setIsQuantum(true);
  }else{
    setIsQuantum(false);
  }

  if(itemValue==="Externo Expulsivo" || itemValue==="Externo No Expulsivo"){
    setIsPrioridad('flex');
  }else{
    setIsPrioridad('none');
  }
 
}

function pickerAlgortimos(){
  if(banderaEntrada){
  return (
  <Picker style={{width: 200}} selectedValue={item_algoritmo} onValueChange={(itemValue, itemIndex) => cambiarValorPickerAlgoritmos(itemValue)}>
  <Picker.Item label={"FCFS"}  value={"FCFS"}/>
  <Picker.Item label={"SJF"}  value={"SJF"}/>
  <Picker.Item label={"SRTF"}  value={"SRTF"}/>
  <Picker.Item label={"Externo Expulsivo"}  value={"Externo Expulsivo"}/>
  <Picker.Item label={"Externo No Expulsivo"}  value={"Externo No Expulsivo"}/>
  <Picker.Item label={"HRN"}  value={"HRN"}/>
  <Picker.Item label={"HRN_PRIMA"}  value={"HRN_PRIMA"}/>
  <Picker.Item label={"RR"}  value={"RR"}/>
</Picker>);}
  return(<></>);
}

function quantumComponent(){
  if(isQuamtum){
    return(
      <TextInput style={styles.input} onChangeText={(val)=>setQuantum(val)} placeholder="Quantum"/>);
  }

  return(<></>);
}


 return (

    <ScrollView style={{paddingVertical: 0}}>
    <View style={{width:'100%',height:'100%',borderWidth: 1,backgroundColor: '#fff',alignItems: 'center',flexDirection: 'column'}}>

        <View style={{top:15,alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
          <TextInput style={styles.input} onChangeText={(val)=>setNumeroProcesos(val)} placeholder="número de procesos"/>
          <TextInput style={styles.input} onChangeText={(val)=>setNumeroCPU(val)} placeholder="número de CPU´S"/>
          <TextInput style={styles.input} onChangeText={(val)=>setNumeroNucleos(val)} placeholder="número de núcleos"/>
          {quantumComponent()}
          <TouchableOpacity style={{marginTop:0, width: 190, height: 40, backgroundColor: 'blue',padding:10,alignItems: 'center',borderRadius: 5}} onPress={()=>init()} >
            <Text style={{color:'white', fontSize: 17}}>Crear Tabla</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{top:25 ,alignItems: 'center',justifyContent: 'center',flexDirection: 'column'}}>
          {pickerAlgortimos()}
          {bottonInicializarTablaeEntrada()}
          {buttonEjecutarAlgoritmoComponent()} 
        </View>
          {tableInputComponent()} 
          {tableOutComponent()}

          <View style={{width:'90%',height:400,top:(200+(5*numeroProcesos))}}>
            {tableProcessComponent()} 
          </View>
   
          <View style={{width:'100%',height: 300}}>

          </View>
    </View>
  </ScrollView>

 




  );
}