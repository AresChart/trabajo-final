import { cambiarPrioridad, FCFS, SJF, SRTF, externoExpulsivo, externoNoExpulsivo, HRN, HRN_PRIMA, algortimoRR } from '../scripts_ap/Main';

/**
 * Pruebas unitarias para los algoritmos de planifación
 */
describe('Algoritmos de planificacion',() => {
    // Test para verificar la prioridad
    test('validarPrioridad', () => {
        // Datos de entrada
        let tablaEntrada = [
            {pid: 1, t_llegada: 1, t_ejecucion: 2, prioridad: 5, rafaga_es: 1},
            {pid: 2, t_llegada: 2, t_ejecucion: 1, prioridad: 3, rafaga_es: 1},
            {pid: 3, t_llegada: 3, t_ejecucion: 2, prioridad: 2, rafaga_es: 1}
        ];
        // Cambio de prioridad
        let tabla = cambiarPrioridad(tablaEntrada);
        
        expect(obtenerCantidadPrioridad(tabla)).toBe(3);
    });

    // Prueba de verificacion para el algoritmo FCFS
    test('FCFC', () => {
        // Datos de entrada
        let tablaEntrada = [
            {pid: 1, t_llegada: '1', t_ejecucion: '2', prioridad: '', rafaga_es: '1'},
            {pid: 2, t_llegada: '2', t_ejecucion: '1', prioridad: '', rafaga_es: '1'},
            {pid: 3, t_llegada: '3', t_ejecucion: '2', prioridad: '', rafaga_es: '1'}
        ];
    
        // llama al metodo para ejecutar el algoritmo
        let tabla = FCFS(tablaEntrada,1);
        tabla.splice(3,1);

        // Resultados esperados
        let tablaFinal = [
            [1, 4, 3, 0, 0.66],
            [2, 5, 3, 1, 0.33],
            [3, 7, 4, 1, 0.5]
        ];

        expect(tabla).toEqual(tablaFinal);
    });

    // Prueba de verificacion para el algoritmo SJF 
    test('SJF', () => {
        // Datos de entrada
        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: 1, prioridad: 2, rafaga_es: 1},
            {pid: 3, t_llegada: 2, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: 1, prioridad: 1, rafaga_es: 1},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}
        ];

        // llama al metodo para ejecutar el algoritmo
        let tabla = SJF(tablaEntrada,1);
        tabla.splice(5,1);

        // Resultados esperados
        let tablaFinal = [
            [1, 3, 3, 0, 0.66],
            [2, 4, 3, 1, 0.33],
            [3, 8, 6, 3, 0.33],
            [4, 5, 2, 0, 0.5],
            [5, 6, 2, 0, 0.5]
        ];

        expect(tabla).toEqual(tablaFinal);
    });

    // Prueba de verificacion para el algoritmo SJF 
    test('SRTF', () => {
        // Datos de entrada
        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: 1, prioridad: 2, rafaga_es: 2},
            {pid: 3, t_llegada: 2, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: 1, prioridad: 1, rafaga_es: 2},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}
        ];

        // llama al metodo para ejecutar el algoritmo
        let tabla = SRTF(tablaEntrada,1);
        tabla.splice(5,1);

        // Resultados esperados
        let tablaFinal =  [
            [1, 3, 3, 0, 0.66],
            [2, 5, 4, 1, 0.25],
            [3, 8, 6, 3, 0.33],
            [4, 6, 3, 0, 0.33],
            [5, 6, 2, 0, 0.5]
        ];

        expect(tabla).toEqual(tablaFinal);
    });

    // Prueba de verificacion para el algoritmo SJF 
    test('Prioridad externa expulsiva', () => {
        // Datos de entrada
        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: 1, prioridad: 2, rafaga_es: 2},
            {pid: 3, t_llegada: 2, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: 1, prioridad: 1, rafaga_es: 2},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}
        ];

        // llama al metodo para ejecutar el algoritmo
        let tabla = externoExpulsivo(tablaEntrada,1);
        tabla.splice(5,1);

        // Resultados esperados
        let tablaFinal =  [
            [1, 4, 4, 1, 0.5],
            [2, 4, 3, 0, 0.33],
            [3, 7, 5, 2, 0.4],
            [4, 9, 6, 3, 0.16],
            [5, 6, 2, 0, 0.5]
        ];

        expect(tabla).toEqual(tablaFinal);
    });

    // Prueba de verificacion para el algoritmo SJF 
    test('Prioridad externa no expulsiva', () => {
        // Datos de entrada
        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: 1, prioridad: 2, rafaga_es: 2},
            {pid: 3, t_llegada: 2, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: 1, prioridad: 1, rafaga_es: 2},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}
        ];

        // llama al metodo para ejecutar el algoritmo
        let tabla = externoNoExpulsivo(tablaEntrada,2,2);
        tabla.splice(5,1);

        // Resultados esperados
        let tablaFinal =  [
            [1, 3, 3, 0, 0.66],
            [2, 4, 3, 0, 0.33],
            [3, 5, 3, 0, 0.66],
            [4, 6, 3, 0, 0.33],
            [5, 6, 2, 0, 0.5]
        ];

        expect(tabla).toEqual(tablaFinal);
    });

    // Prueba de verificacion para el algoritmo SJF
    test('Prioridad interna no expulsiva (HRN)', () => {
        // Datos de entrada
        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: 1, prioridad: 2, rafaga_es: 2},
            {pid: 3, t_llegada: 2, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: 1, prioridad: 1, rafaga_es: 2},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}
        ];
   
        // llama al metodo para ejecutar el algoritmo
        let tabla = HRN(tablaEntrada,3);
        tabla.splice(5,1);

        // Resultados esperados
        let tablaFinal =  [
            [1, 3, 3, 0, 0.66],
            [2, 4, 3, 0, 0.33],
            [3, 5, 3, 0, 0.66],
            [4, 6, 3, 0, 0.33],
            [5, 6, 2, 0, 0.5]
        ];

        expect(tabla).toEqual(tablaFinal);
    });

    // Prueba de verificacion para el algoritmo SJF 
    test('Prioridad interna expulsiva (HRN_PRIMA)', () => {
        // Datos de entrada
        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: '3', prioridad: 1, rafaga_es: '2'},
            {pid: 3, t_llegada: '1', t_ejecucion: 2, prioridad: 1.5, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: '1', prioridad: 2, rafaga_es: '2'},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}
        ];

        // llama al metodo para ejecutar el algoritmo
        let tabla = HRN_PRIMA(tablaEntrada,2);
        tabla.splice(5,1);

        // Resultados esperados
        let tablaFinal =  [
            [1, 3, 3, 0, 0.66],
            [2, 7, 6, 0, 0.66],
            [3, 5, 4, 1, 0.5],
            [4, 8, 5, 1, 0.4],
            [5, 8, 4, 1, 0.5]
        ];

        expect(tabla).toEqual(tablaFinal);
    });

    // Prueba de verificacion para el algoritmo SJF 
    test('RR', () => {
        // Datos de entrada
        let tablaEntrada = [
            {pid: 1, t_llegada: 0, t_ejecucion: 2, prioridad: 1, rafaga_es: 1},
            {pid: 2, t_llegada: 1, t_ejecucion: '3', prioridad: 1, rafaga_es: '2'},
            {pid: 3, t_llegada: '1', t_ejecucion: 2, prioridad: 1.5, rafaga_es: 1},
            {pid: 4, t_llegada: 3, t_ejecucion: '1', prioridad: 2, rafaga_es: '2'},
            {pid: 5, t_llegada: 4, t_ejecucion: 1, prioridad: 2, rafaga_es: 1}
        ];

        // llama al metodo para ejecutar el algoritmo
        let tabla = algortimoRR(tablaEntrada,2,2);
        tabla[0].splice(5,1);

        // Resultados esperados
        let tablaFinal =  [
            [1, 3, 3, 0, 0.66],
            [2, 7, 6, 1, 0.5],
            [3, 5, 4, 1, 0.5],
            [4, 6, 3, 0, 0.33],
            [5, 6, 2, 0, 0.5]
        ];

        expect(tabla[0]).toEqual(tablaFinal);
    });

});

/**
 * Funcion auxiliar para obtener la prioridad
 *
 * @param {*} tabla Tabla de entrada de datos
 *
 * @returns Prioridad
 */
function obtenerCantidadPrioridad(tabla){
    let cantidaEnPrioridad = 0;
    for (let index = 0; index < tabla.length; index++) {
       if(tabla[index].prioridad ===1){
        cantidaEnPrioridad++;
       }
    }
    return cantidaEnPrioridad;
}