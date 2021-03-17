import { getHeroeByIdAsync } from "../../base/09-promesas";
import {heroes} from "../../data/heroes";

describe('Pruebas con promesas', () => {
    
    test('getHeroeByIdAsync Debe retornar un héroe async', () => {
       
        const id = 1;
        // jest.setTimeout(7000);

        return getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                // done();
            });

    });


    test('Debe retornar un error si heroe por id no existe', () => {

        const id = 10;

        return getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                // done();
            })
        
    });
    
    
    
});
