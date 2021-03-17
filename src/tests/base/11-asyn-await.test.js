import { getImagen } from "../../base/11-async-await";


describe('Pruebas con async-await y Fetch', () => {
   
    test('Debe retornar el URL de la imagen', async () => {
       
        const imagen = await getImagen();

        // console.log(imagen);

        expect(imagen.includes('https://')).toBe(true);

    });
    

});
