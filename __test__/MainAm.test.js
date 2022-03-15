import {crearArchivoContigua, archivosCreadosContigua, tamañoCaracteresContigua, inicioContigua} from '../scripts_am/Main';

// Valida que se almacene el archivo en el array correspondiente
describe('CrearArchivo',() => {
    test('CrearArchivo', () => {
        crearArchivoContigua('colombia', 8);
        expect(archivosCreadosContigua[0]).toBe('colombia');
    });
});
// Valida que se almacene el archivo en el array correspondiente
describe('tamañoArchivo',() => {
    test('tamañoArchivo', () => {
        crearArchivoContigua('colombia', 8);
        expect(tamañoCaracteresContigua[0]).toBe(8);
    });
});
// Valida que se almacene el inidice de donde se inicia a guardar el archivo
describe('inicioArchivo',() => {
    test('inicioArchivo', () => {
        crearArchivoContigua('colombia', 8);
        expect(inicioContigua[0]).toBe(0);
    });
});
