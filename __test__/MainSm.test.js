import {crearProceso, aleatorio, generarColor, segmentoIndex} from '../scripts_sm/Main';

// Genera numero aleatorio positivo
describe('aleatorio',() => {
    test('aleatorio', () => {
        expect(aleatorio(0, 11)).toBeGreaterThan(0);
    });
});
// General color
describe('color',() => {
    test('color', () => {
        expect(generarColor()).toEqual('#E07FFF');
    });
});
// Crea proceso
describe('crearProceso',() => {
    test('crearProceso', () => {
        crearProceso('colombia');
        expect(segmentoIndex).toBe(2);
    });
});
