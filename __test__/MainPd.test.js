import { crearDisco, discosCreados, especificacionesDisco, particiones } from '../scripts_pd/Main';

/**
 * Pruebas unitarias para los algoritmos de Particion de disco
 */
describe('Particion de disco',() => {

    // Valida que se almacene el archivo en el array correspondiente
    test('crearDisco', () => {

        // Resultado esperado
        let object = {"nombre": "Disco2", "tamaño": 1800, "tipo": "MBR"};

        // Llama al metodo de crear disco
        crearDisco('MBR', 'Disco2', 1800);

        expect(discosCreados[0]).toEqual(object);
    });

    // Valida que se almacene el archivo en el array correspondiente
    test('especificacionesDisco', () => {

        // Resultado esperado
        let object = {"gptPrimarias": 128, "tipo": "GPT"};

        // Llama al metodo de crear disco
        crearDisco('GPT', 'Disco1', 1800);

        expect(especificacionesDisco[1]).toEqual(object);
    });

    // Valida que se almacene el archivo en el array correspondiente
    test('particiones', () => {
        expect(particiones[1]).toEqual(Array(3));
    });
});
