import {crearProceso, EspaciosDisponibles, TablaProcesos, TablaUsuario, agregarPalabraTablaUsuarios} from '../scripts_pm/Main';

// Valida que se consumo un espacio disponible al ingresar el proceso
describe('EspaciosDisponibles',() => {
    test('EspaciosDisponibles', () => {
        crearProceso('colombia');
        expect(EspaciosDisponibles).toBe(6);
    });
});
// Valida que el proceso quede almacenado en la tabla de proceso
describe('TablaProceso',() => {
    test('TablaProceso', () => {
        crearProceso('colombia');
        expect(TablaProcesos[0]).toEqual('colombia');
    });
});

// Valida que el proceso quede almacenado en la tabla de usuario
describe('TablaUsuario',() => {
    test('TablaUsuario', () => {
        agregarPalabraTablaUsuarios('colombia');
        // array con la palabra almacenada
        let array = ['c', 'o', 'l', 'o', 'm', 'b', 'i', 'a'];
        expect(TablaUsuario[0].data).toEqual(array);
    });
});
