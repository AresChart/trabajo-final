import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    width :300,
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    color:'black',
    fontSize: 15
  },
  inputTable:{
    textAlign: 'center',
    fontSize: 25,
    width: 60,
    height:40,
    borderWidth: 1,
  },
  inputTableAp:{
    textAlign: 'center',
    width: 30,
    height:25,
  },

  button_style: {
    marginBottom: 10
  },

    textInput_table_ea: {
      textAlignVertical: 'top',
      width: 50,
      height:300,
      textAlign: 'center',
      color:'black',
      fontSize: 17
    },

    textInput_table_sp: {
      width: 60,
      height:220,
      textAlign: 'center',
      color:'black',
      fontSize: 10,
      textAlignVertical: 'top'
    },

    textInput_semaforos_sp: {
      width: 300,
      height: 30,
      borderWidth: 1,
      textAlign: 'center',
      color:'black',
      fontSize: 15,
      marginTop:20
    },

    textInput_variables_sp: {
      width: 300,
      height: 30,
      borderWidth: 1,
      textAlign: 'center',
      color:'black',
      fontSize: 15,
      marginTop:20
    },

    textInput_salida_sp: {
      width: 300,
      height: 30,
      borderWidth: 1,
      textAlign: 'center',
      marginTop: 20,
      color:'black',
      fontSize: 15
    },

    textInput_hilos_bloqueados_sp: {
      width: 300,
      height: 30,
      borderWidth: 1,
      textAlign: 'center',
      marginTop: 20,
      color:'black',
      fontSize: 15
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      
      },
      container_table: {
         width:300,
         height:1100,
      },
      container_buttons: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        width:170,
        height:500,
      }, 
      item_resultado: {
        fontSize: 15,
        height: 200,
        width:900,
        justifyContent: "center",
        borderColor: 'black',
        borderWidth: .25,
        textAlign: 'justify',
      },
      checkbox: {
        alignSelf: "center",
      },
  });

