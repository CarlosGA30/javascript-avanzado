//importar con notacion de NODE-JS
//const { describe } = require('yargs');
//const { test } = require('picomatch');
//const { expect } = require('@jest/globals');
const { sumar,restar } = require('./calculadora');

describe('Pruebas al componente calculadora',()=>{
    test( 'pruebas en la funcion sumar',()=>{
        expect(sumar(3,5)).toBe(8);
    });
    test( 'pruebas en la funcion restar',()=>{
        expect(restar(3,5)).toBe(-2);
    });
   


    
});