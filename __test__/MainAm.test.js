import {crearArchivoContigua, archivosCreadosContigua, tamañoCaracteresContigua, inicioContigua} from '../scripts_am/Main';


describe('Asignacion de Disco',() => {
    // Valida que se almacene el archivo en el array correspondiente
    test('CrearArchivo', () => {
        crearArchivoContigua('colombia', 8);
        expect(archivosCreadosContigua[0]).toBe('colombia');
    });
    // Valida que se almacene el archivo en el array correspondiente
    test('tamañoArchivo', () => {
        crearArchivoContigua('colombia', 8);
        expect(tamañoCaracteresContigua[0]).toBe(8);
    });
    // Valida que se almacene el inidice de donde se inicia a guardar el archivo
    test('inicioArchivo', () => {
        crearArchivoContigua('colombia', 8);
        expect(inicioContigua[0]).toBe(0);
    });
});
