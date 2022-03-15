import {crearDisco, discosCreados, especificacionesDisco, particiones} from '../scripts_pd/Main';


describe('Particion de disco',() => {
    // Valida que se almacene el archivo en el array correspondiente
    test('crearDisco', () => {
        let object = {"nombre": "Disco2", "tamaño": 1800, "tipo": "MBR"};
        crearDisco('MBR', 'Disco2', 1800);
        expect(discosCreados['Disco2']).toEqual(object);
    });
    // Valida que se almacene el archivo en el array correspondiente
    test('especificacionesDisco', () => {
        let object = {"gptPrimarias": 128, "tipo": "GPT"};
        crearDisco('GPT', 'Disco1', 1800);
        expect(especificacionesDisco['Disco1']).toEqual(object);
    });
    // Valida que se almacene el archivo en el array correspondiente
    test('particiones', () => {
        expect(particiones[1]).toEqual(Array(3));
    });
});
