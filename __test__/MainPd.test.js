import {crearDisco, discosCreados, especificacionesDisco, particiones} from '../scripts_pd/Main';

// Valida que se almacene el archivo en el array correspondiente
describe('crearDisco',() => {
    test('crearDisco', () => {
        let object = {"nombre": "Disco2", "tamaño": 1800, "tipo": "MBR"};
        crearDisco('MBR', 'Disco2', 1800);
        expect(discosCreados['Disco2']).toEqual(object);
    });
});
// Valida que se almacene el archivo en el array correspondiente
describe('especificacionesDisco',() => {
    test('especificacionesDisco', () => {
        let object = {"gptPrimarias": 128, "tipo": "GPT"};
        crearDisco('GPT', 'Disco1', 1800);
        expect(especificacionesDisco['Disco1']).toEqual(object);
    });
});
// Valida que se almacene el archivo en el array correspondiente
describe('particiones',() => {
    test('particiones', () => {
        expect(particiones[1]).toEqual(Array(3));
    });
});
