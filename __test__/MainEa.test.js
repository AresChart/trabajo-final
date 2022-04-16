import {asignarCantidadCeldasMemoria,ejecutarAlgoritmoAjusteHuecos} from '../scripts_ea/main';

describe('Estrategias de Ajuste',() => {
    //listaSalida[1] = "Se realizó la ejecución de la estrategia de : Ajuste Sobre Huecos por medio del Primer Ajuste, mediante el siguiente proceso:\n\nSe solicitó el proceso S1. Se solicitó el proceso S2 Se solicitó el proceso S3 Se solicitó el proceso S4 Se solicitó el proceso S5.\n\nObteniendose como resultado final los procesos en el siguiente orden: S1 , S1 , S1 , S1 , S1 , S2 , S3 , S3 , S3 , S4 , S4 , S4 , S4 , S4 , S5."

    // Valida que se almacene el archivo en el array correspondiente
    test('Estrategia de ajuste sobre huecos', () => {
        
        asignarCantidadCeldasMemoria(15);

        let tablaEntrada = [ {proceso: 'S1', solicita: 5, libera: '--'},
                             {proceso: 'S2', solicita: 1, libera: '--'},
                             {proceso: 'S3', solicita: 3, libera: '--'},
                             {proceso: 'S4', solicita: 5, libera: '--'},
                             {proceso: 'S5', solicita: 1, libera: '--'}];

        let listaSalida = ejecutarAlgoritmoAjusteHuecos("Primer Ajuste",tablaEntrada,false,15);

        expect(['S1', 'S1', 'S1', 'S1', 'S1', 'S2', 'S3', 'S3', 'S3', 'S4', 'S4', 'S4', 'S4', 'S4', 'S5']).toEqual(listaSalida[0]);
    });
});
