import React from 'react';
const { render } = require("@testing-library/react");
import PrimeraApp from '../PrimeraApp';
import {shallow} from 'enzyme';


describe('Pruebas en componente react PrimeraApp', () => {

    // test('Debe mostrar el mensaje "Hola Mundo"', () => {
    //     const saludo = 'Hola Mundo';
    //     const { getByText } = render( <PrimeraApp saludo = {saludo} /> );
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });
    
    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola Mundo';
        const wrapper = shallow(<PrimeraApp saludo = {saludo} />);
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe mostrar subtitulo enviado por props', () => {
        
        const saludo = 'Hola Mundo';
        const subtitulo = 'Soy un subtitulo bonito';
        const wrapper = shallow(
        <PrimeraApp 
            saludo = {saludo} 
            subtitulo = {subtitulo}
        />
        );

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subtitulo);

    });
    
    
});
