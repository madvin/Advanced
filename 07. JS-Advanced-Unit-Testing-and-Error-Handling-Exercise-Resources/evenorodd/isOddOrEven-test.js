import { expect } from 'chai';
import { isOddOrEven } from '../isOddOrEven.js';

describe('Test isOddOrEven', function() {
    it('Should return undefined if other than string is parsed', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven(['string'])).to.be.undefined;
        expect(isOddOrEven({name: 'david'})).to.be.undefined;
    });

    it('Should return even if string with even length is passed', () => {
        expect(isOddOrEven('11')).to.equal('even');
        expect(isOddOrEven('10')).to.equal('even');
    });

    it('Should return odd if string with odd length is passed', () => {
        expect(isOddOrEven('123')).to.equal('odd');
        expect(isOddOrEven('cat')).to.equal('odd');
    });

    it('Should work normaly with different strings', () => {
        expect(isOddOrEven('Colaburation')).to.equal('even');
        expect(isOddOrEven('Color')).to.equal('odd');
        expect(isOddOrEven('kingdoms')).to.equal('even');
    })
});
