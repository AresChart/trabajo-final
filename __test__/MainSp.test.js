import {generarSemaforosAleatorios, ejecutarAlgoritmo} from '../scripts_sp/Main';

/**
 * Pruebas unitarias para los algoritmos de Sincronización de procesos
 */
describe('Sincronización de procesos',() => {
    // Test para verificar que se genera 1 aleatorio para cada hilo (5)
    test('generarAleatorios', () => {
        // Ingreso de datos de semaforos
        let semaforos = '[s1 valor=1][s2 valor=1][s3 valor=1]';
        // Obtiene arreglo de hilos aleatorios generados
        let aleatorios = generarSemaforosAleatorios(semaforos);
        //prueba
        expect(aleatorios.length).toEqual(5);
    });

    // Test para verificar que al ejecutar el algoritmo, la informacion sea la correcta
    test('ejecutar', () => {
        // Ingreso de datos de semaforos
        let semaforos = '[s1 valor=1][s2 valor=1][s3 valor=1]';
        // Ingreso de datos de los hilos
        let hilos = {
            Hilo_1:'K\nS\ns1.release()\nK\nE\nX\nW\nH\ns2.release()\nG\nR\nD\nT',
            Hilo_2:'X\nV\nQ\nV\nL\nO\ns1.acquire()\nX\nI\nF\nG\nH\nG',
            Hilo_3:'N\nE\nU\nE\nT\nT\nL\nP\nV\nE\nW\nV\nK',
            Hilo_4:'O\nP\nH\nO\nC\nS\nE\nH\nZ\nP\nE\ns3.acquire()\nY',
            Hilo_5:'s2.acquire()\nH\nJ\ns3.release()\nX\nC\nL\nF\nY\nG\nK\nL\nQ'
        };
        // Pone informacion de las variables
        let variables = 'c=0,s=0';
        // Ejecuta el algoritmo
        let ejecutar = ejecutarAlgoritmo(semaforos,hilos,variables);
        //prueba
        expect(ejecutar.length).toEqual(4);
    });

});