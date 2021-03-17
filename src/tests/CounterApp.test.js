import { shallow } from "enzyme";
import CounterApp from "../CounterApp";


describe('Pruebas en componente react <CounterApp />', () => {
   
    const value = 20; 
    let wrapper = shallow(<CounterApp value = {value} />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp value = {value} />);
    });

    test('Debe mostrar <CounterApp /> correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar valor por defecto de 10 en <CounterApp />', () => {
        const defaultValue = 10;
        const wrapper = shallow(<CounterApp value = {defaultValue} />);

        const textoContador = parseInt(wrapper.find('h2').text());
        
        expect(textoContador).toBe(defaultValue);
    });

    test('Debe de incrementar con el botón +1', () => {
       
        const btn1 = wrapper.find('button').at(0).simulate('click');
        const textoContador = wrapper.find('h2').text().trim();
        
        expect(textoContador).toBe('21');

    });
    
    test('Debe de disminuir con el botón -1', () => {
       
        const btn1 = wrapper.find('button').at(2).simulate('click');
        const textoContador = wrapper.find('h2').text().trim();
        // console.log(textoContador);
        expect(textoContador).toBe('19');

    });
    
    test('Debe agregar valor por defecto al presionar reset', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        // console.log(btnReset.html());
        const textoContador = wrapper.find('h2').text().trim();
        // console.log(textoContador);
        expect(textoContador).toBe('20');
    });
    

});
