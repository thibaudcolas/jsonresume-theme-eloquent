import { describe, it } from 'mocha';
import { expect } from 'chai';
import helpers from '../lib/helpers';

describe('Helpers', () => {
    it('should be an object', () => {
        expect(helpers).to.exist;
        expect(helpers).to.be.an('object');
    });

    describe('format', () => {
        it('should expose a "MMMMYYYY" format', () => {
            expect(helpers.formatMMMMYYYY).to.exist;
            expect(helpers.formatMMMMYYYY).to.be.a('function');
        });

        it('should expose a "MMMDDYYYY" format', () => {
            expect(helpers.formatMMMDDYYYY).to.exist;
            expect(helpers.formatMMMDDYYYY).to.be.a('function');
        });

        it('should expose a "YYYY" format', () => {
            expect(helpers.formatYYYY).to.exist;
            expect(helpers.formatYYYY).to.be.a('function');
        });
    });
});
