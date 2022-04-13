import {generarAleatorios, ejecutar} from '../scripts_cp/Main';


describe('Comunicación de procesos',() => {
    // Test para verificar que se genera 1 aleatorio para cada hilo (5)
    test('generarAleatorios', () => {
        // Obtiene arreglo de hilos aleatorios generados
        let aleatorios = generarAleatorios();
        
        expect(aleatorios.length).toEqual(5);
    });

    // Valida funcion de ejecutar algoritmo
    test('ejecutar', () => {

        let entrada = {
            Hilo_1:'G\nZ\nH2.send(p)\nF\nW\nX\nT\nQ\nD\nU\nU\nX\nS',
            Hilo_2:'D\nV\nH1.receive()\nM\nL\nU\nU\nM\nF\nY\nG\nD\nC',
            Hilo_3:'R\nS\nH4.send(w)\nO\nH\nL\nP\nP\nX\nL\nZ\nQ\nT',
            Hilo_4:'K\nW\nG\nH3.receive()\nM\nT\nT\nI\nT\nE\nN\nI\nH',
            Hilo_5:'W\nP\nZ\nK\nK\nH\nC\nM\nE\nJ\nO\nX\nF'
        };

        let salida = [
            '\n' +
              'H1: [  G  ,  Z  ,  F  ,  W  ,  X  ,  T  ,  Q  ,  D  ,  U  ,  U  ,  X  ,  S   ]\n' +
              '\n' +
              ' H2 : [  D  ,  V  ,  p  ,  M  ,  L  ,  U  ,  U  ,  M  ,  F  ,  Y  ,  G  ,  D  ,  C   ]\n' +
              '\n' +
              ' H3 : [  R  ,  S  ,  O  ,  H  ,  L  ,  P  ,  P  ,  X  ,  L  ,  Z  ,  Q  ,  T   ]\n' +
              '\n' +
              ' H4 : [  K  ,  W  ,  G  ,  w  ,  M  ,  T  ,  T  ,  I  ,  T  ,  E  ,  N  ,  I  ,  H   ]\n' +
              '\n' +
              ' H5 : [  W  ,  P  ,  Z  ,  K  ,  K  ,  H  ,  C  ,  M  ,  E  ,  J  ,  O  ,  X  ,  F   ]',
            '     '
        ];

        expect(ejecutar(entrada)).toEqual(salida);

    });
});