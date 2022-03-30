//const Main = require('../scripts_ap/Main');
import {cambiarPrioridad,FCFS,SJF,SRTF,externoExpulsivo,externoNoExpulsivo,HRN,HRN_PRIMA,algortimoRR} from '../scripts_ap/Main';


describe('Algoritmos de planificacion',() => {
    test('validarPrioridad', () => {

        let tablaEntrada = [
         {pid: 1, t_llegada: 1, t_ejecucion: 2, prioridad: 5, rafaga_es: 1},
         {pid: 2, t_llegada: 2, t_ejecucion: 1, prioridad: 3, rafaga_es: 1},
         {pid: 3, t_llegada: 3, t_ejecucion: 2, prioridad: 2, rafaga_es: 1}];
    
        let tabla = cambiarPrioridad(tablaEntrada);
        
        expect(obtenerCantidadPrioridad(tabla)).toBe(3);
    });


    test('FCFC', () => {

        let tablaEntrada = [
         {pid: 1, t_llegada: '1', t_ejecucion: '2', prioridad: '', rafaga_es: '1'},
         {pid: 2, t_llegada: '2', t_ejecucion: '1', prioridad: '', rafaga_es: '1'},
         {pid: 3, t_llegada: '3', t_ejecucion: '2', prioridad: '', rafaga_es: '1'}];
    
        let tabla = FCFS(tablaEntrada,1);
        tabla.splice(3,1);

        let tablaFinal = [[1, 4, 3, 0, 0.66],
                          [2, 5, 3, 1, 0.33],
                          [3, 7, 4, 1, 0.5]]

        expect(tabla).toEqual(tablaFinal);
    });


    test('SJF', () => {

        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: 1, prioridad: 2, rafaga_es: 1},
            {pid: 3, t_llegada: 2, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: 1, prioridad: 1, rafaga_es: 1},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}];
           
    
        let tabla = SJF(tablaEntrada,1);
        tabla.splice(5,1);

        let tablaFinal = [[1, 3, 3, 0, 0.66],
                          [2, 4, 3, 1, 0.33],
                          [3, 8, 6, 3, 0.33],
                          [4, 5, 2, 0, 0.5],
                          [5, 6, 2, 0, 0.5]]

        expect(tabla).toEqual(tablaFinal);
    });


    test('SRTF', () => {

        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: 1, prioridad: 2, rafaga_es: 2},
            {pid: 3, t_llegada: 2, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: 1, prioridad: 1, rafaga_es: 2},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}];
           
    
        let tabla = SRTF(tablaEntrada,1);
        tabla.splice(5,1);

        let tablaFinal =  [[1, 3, 3, 0, 0.66],
                           [2, 5, 4, 1, 0.25],
                           [3, 8, 6, 3, 0.33],
                           [4, 6, 3, 0, 0.33],
                           [5, 6, 2, 0, 0.5]]

        expect(tabla).toEqual(tablaFinal);
    });

    test('Prioridad externa expulsiva', () => {

        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: 1, prioridad: 2, rafaga_es: 2},
            {pid: 3, t_llegada: 2, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: 1, prioridad: 1, rafaga_es: 2},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}];
           
    
        let tabla = externoExpulsivo(tablaEntrada,1);
        tabla.splice(5,1);

        let tablaFinal =  [[1, 4, 4, 1, 0.5],
                           [2, 4, 3, 0, 0.33],
                           [3, 7, 5, 2, 0.4],
                           [4, 9, 6, 3, 0.16],
                           [5, 6, 2, 0, 0.5]];

        expect(tabla).toEqual(tablaFinal);
    });

    test('Prioridad externa no expulsiva', () => {

        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: 1, prioridad: 2, rafaga_es: 2},
            {pid: 3, t_llegada: 2, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: 1, prioridad: 1, rafaga_es: 2},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}];
           
    
        let tabla = externoNoExpulsivo(tablaEntrada,2,2);
        tabla.splice(5,1);

        let tablaFinal =  [[1, 3, 3, 0, 0.66],
                          [2, 4, 3, 0, 0.33],
                          [3, 5, 3, 0, 0.66],
                          [4, 6, 3, 0, 0.33],
                          [5, 6, 2, 0, 0.5]];

        expect(tabla).toEqual(tablaFinal);
    });


    test('Prioridad interna no expulsiva (HRN)', () => {

        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: 1, prioridad: 2, rafaga_es: 2},
            {pid: 3, t_llegada: 2, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: 1, prioridad: 1, rafaga_es: 2},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}];
           
    
        let tabla = HRN(tablaEntrada,3);
        tabla.splice(5,1);

        let tablaFinal =  [[1, 3, 3, 0, 0.66],
        [2, 4, 3, 0, 0.33],
        [3, 5, 3, 0, 0.66],
        [4, 6, 3, 0, 0.33],
        [5, 6, 2, 0, 0.5]];

        expect(tabla).toEqual(tablaFinal);
    });

    test('Prioridad interna expulsiva (HRN_PRIMA)', () => {

        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: '3', prioridad: 1, rafaga_es: '2'},
            {pid: 3, t_llegada: '1', t_ejecucion: 2, prioridad: 1.5, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: '1', prioridad: 2, rafaga_es: '2'},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}];
           
        let tabla = HRN_PRIMA(tablaEntrada,2);
        tabla.splice(5,1);

        let tablaFinal =  [[1, 3, 3, 0, 0.66],
        [2, 7, 6, 0, 0.66],
        [3, 5, 4, 1, 0.5],
        [4, 8, 5, 1, 0.4],
        [5, 8, 4, 1, 0.5]];

        expect(tabla).toEqual(tablaFinal);
    });

    test('RR', () => {

        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: '3', prioridad: 1, rafaga_es: '2'},
            {pid: 3, t_llegada: '1', t_ejecucion: 2, prioridad: 1.5, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: '1', prioridad: 2, rafaga_es: '2'},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}];
           
        let tabla = algortimoRR(tablaEntrada,2,2);
        tabla[0].splice(5,1);

        let tablaFinal =  [[1, 3, 3, 0, 0.66],
        [2, 7, 6, 1, 0.5],
        [3, 5, 4, 1, 0.5],
        [4, 6, 3, 0, 0.33],
        [5, 6, 2, 0, 0.5]];

        console.log(tabla[0]);
        console.log(tablaFinal);

        expect(tabla[0]).toEqual(tablaFinal);
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