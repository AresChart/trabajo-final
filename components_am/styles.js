import { StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({

  title: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },

  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color:'black',
    fontSize: 15
  },

  item_input: {
    top: 20,
    fontSize: 20,
    height: 150,
    width:130,
    justifyContent:'center',
    alignContent: "center",
    alignItems: "center",
    borderColor: 'black',
    flexDirection: 'column',
    borderWidth: .25,
    textAlign: 'justify',
    
  },

  input_tamanio_archivo: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color:'black',
    fontSize: 15
  },

  area: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },

  button: {
    backgroundColor: "blue",
    padding: 1,
    marginTop: 1,
    margin: 12,
    borderWidth: 1,
  },

  container_table: {
      width:600,
      height:200,
      
  },

  sectionHeader: {
   
    fontSize: 12,
    width:85,
    height:25,
    marginEnd: 0,
    marginTop: 13
  },

  item: {
    fontSize: 15,
    height: 30,
    width:30,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: 'black',
    flexDirection: 'column',
    borderWidth: .25,
    textAlign: 'center',
  },

  item_process_list: {
    fontSize: 15,
    height: 30,
    width: 150,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: 'black',
    flexDirection: 'column',
    textAlign: 'center',
  },

  item_resultado: {
    fontSize: 15,
    height: 100,
    width:'90%',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: 'black',
    flexDirection: 'column',
    borderWidth: .25,
    textAlign: 'center',
  },

  item_tabla_pagina: {
    flex:0.3,
    fontSize: 13,
    height: 30,
    width:35,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    textAlign: 'center'
  },

  item_tabla: {
    fontSize: 13,
    height: 30,
    width:35,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column',
    textAlign: 'center',
  },

  itemFatList: {
    fontSize: 30,
    height: 50,
    fontWeight: 'bold',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  view: {
    flex: 1,
    flexDirection: 'row',
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  }
});

