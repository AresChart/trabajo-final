//const Main = require('../scripts_ap/Main');
import {cambiarPrioridad} from '../scripts_ap/Main';


describe('prueba',() => {
    test('prueba', () => {

        let tablaEntrada = [
         {pid: 1, t_llegada: 1, t_ejecucion: 2, prioridad: 5, rafaga_es: 1},
         {pid: 2, t_llegada: 2, t_ejecucion: 1, prioridad: 3, rafaga_es: 1},
         {pid: 3, t_llegada: 3, t_ejecucion: 2, prioridad: 2, rafaga_es: 1}];
    
        let tabla = cambiarPrioridad(tablaEntrada);
        
        expect(obtenerCantidadPrioridad(tabla)).toBe(3);
    });
});

function obtenerCantidadPrioridad(tabla){
    let cantidaEnPrioridad = 0;
    for (let index = 0; index < tabla.length; index++) {
       if(tabla[index].prioridad ===1){
        cantidaEnPrioridad++;
       }
    }
    return cantidaEnPrioridad;
}