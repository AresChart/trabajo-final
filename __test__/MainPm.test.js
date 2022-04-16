import {crearProceso, EspaciosDisponibles, TablaProcesos, TablaUsuario, agregarPalabraTablaUsuarios} from '../scripts_pm/Main';

/**
 * Pruebas unitarias para los algoritmos de Paginación de memoria
 */
describe('Paginación de memoria',() => {

    // Valida que se consumo un espacio disponible al ingresar el proceso
    test('EspaciosDisponibles', () => {
        // Llama al metodo de crear proceso
        crearProceso('colombia');

        expect(EspaciosDisponibles).toBe(6);
    });

    // Valida que el proceso quede almacenado en la tabla de proceso
    test('TablaProceso', () => {
        // Llama al metodo de crear proceso
        crearProceso('colombia');

        expect(TablaProcesos[0]).toEqual('colombia');
    });

    // Valida que el proceso quede almacenado en la tabla de usuario
    test('TablaUsuario', () => {
        // Llama al metodo de agregar palabra en tabla de usuarios
        agregarPalabraTablaUsuarios('colombia');

        // array con la palabra almacenada - resultado esperado
        let array = ['c', 'o', 'l', 'o', 'm', 'b', 'i', 'a'];

        expect(TablaUsuario[0].data).toEqual(array);
    });
});