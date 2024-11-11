


import { expect } from 'chai';
import { getYear } from '../controllers/helpers.js';

describe('Helpers', () => {
    //testea el método getYear
    describe('Test getYear function', () => {
        it('Devulve un número', async () => {
            const year = getYear();
            expect(year).to.be.a('number');
        })
        it('Devulve el año actual', async () => {
            const myYear = new Date().getFullYear();
            const year = getYear();
            expect(year).to.be.equal(myYear);
        })
    })
})