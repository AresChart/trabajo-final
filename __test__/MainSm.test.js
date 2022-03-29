import {crearProceso, aleatorio, generarColor, segmentoIndex} from '../scripts_sm/Main';


describe('aleatorio',() => {
    // Genera numero aleatorio positivo
    test('aleatorio', () => {
        expect(aleatorio(0, 11)).toBeGreaterThan(0);
    });
    // General color
    test('color', () => {
        expect(generarColor()).toEqual('#E07FFF');
    });
    // Crea proceso
    test('crearProceso', () => {
        crearProceso('colombia');
        expect(segmentoIndex).toBe(1);
    });
});
