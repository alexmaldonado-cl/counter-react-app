import { getSaludo } from "../../base/02-template-string";


describe('Pruebas en 02-template-string.js', () => {

    test('Prueba en el método getSaludo', () => {
        const nombre = 'Alex';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });


    test('Retorna Hola Carlos por default, en getSaludo sin parametros', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    });

});