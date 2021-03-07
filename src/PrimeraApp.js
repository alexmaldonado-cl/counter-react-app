import React from 'react';

const PrimeraApp = ({saludo = 'Hola Mundo'}) => {

    return (
        <>
            <h1>{saludo}</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>Mi primera app</p>
        </>
    );
}

export default PrimeraApp;