import { crearArchivoContigua, archivosCreadosContigua, tamañoCaracteresContigua, inicioContigua } from '../scripts_am/Main';

/**
 * Pruebas unitarias para los algoritmos de Asignacion de Disco
 */
describe('Asignacion de Disco',() => {

    // Valida que se almacene el archivo en el array correspondiente
    test('CrearArchivo', () => {
        // Llama al metodo de crear procesos
        crearArchivoContigua('colombia', 8);

        expect(archivosCreadosContigua[0]).toBe('colombia');
    });

    // Valida que se almacene el archivo en el array correspondiente
    test('tamañoArchivo', () => {
        // Llama al metodo de crear procesos
        crearArchivoContigua('colombia', 8);

        expect(tamañoCaracteresContigua[0]).toBe(8);
    });

    // Valida que se almacene el inidice de donde se inicia a guardar el archivo
    test('inicioArchivo', () => {
        // Llama al metodo de crear procesos
        crearArchivoContigua('colombia', 8);

        expect(inicioContigua[0]).toBe(0);
    });
});
