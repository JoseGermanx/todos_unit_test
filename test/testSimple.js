


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
        it('Es un número de 4 dígitos', async () => {
            const year = getYear();
            expect(year.toString().length).to.be.equal(4);
        })

        it('Se encuentre dentro de un número inferior y superior', ()=> {
            const myYear = new Date().getFullYear();
            const year = getYear();
            expect(year).to.be.at.most(year + 1)
            expect(year).to.be.at.least(year - 1)
        })
    })
})