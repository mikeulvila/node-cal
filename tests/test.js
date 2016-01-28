'use strict';

const { expect } = require('chai');
const { execSync } = require('child_process');

describe('cal', () => {

  describe('CLI', () => {

    it('should handle the current month', () => {
      const goal = execSync('cal').toString();
      const output = execSync('./cal.js').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a 6 week month', () => {
      const goal = execSync('cal 8 2015').toString();
      const output = execSync('./cal.js 8 2015').toString();

      expect(output).to.equal(goal);
    });

    it('should handle a 5 week month', () => {
      const goal = execSync('cal 10 2015').toString();
      const output = execSync('./cal.js 10 2015').toString();

      expect(output).to.equal(goal);
    });

    //it('should handle a 4 week month', () => {
      //const goal = execSync('cal 2 2015').toString();
      //const output = execSync('./cal.js 2 2015').toString();

      //expect(output).to.equal(goal);
    //});

    //it('should handle a 30 day month 11/2015', () => {
      //const goal = execSync('cal 11 2015').toString();
      //const output = execSync('./cal.js 11 2015').toString();

      //expect(output).to.equal(goal);
    //});

    //it('should handle a 31 day month 12/2015', () => {
      //const goal = execSync('cal 12 2015').toString();
      //const output = execSync('./cal.js 12 2015').toString();

      //expect(output).to.equal(goal);
    //});

    //it('should handle a leap year 2/2012', () => {
      //const goal = execSync('cal 2 2012').toString();
      //const output = execSync('./cal.js 2 2012').toString();

      //expect(output).to.equal(goal);
    //});

    //it('should handle a non leap year 2/2014', () => {
      //const goal = execSync('cal 2 2014').toString();
      //const output = execSync('./cal.js 2 2014').toString();

      //expect(output).to.equal(goal);
    //});
  });

  describe("Zeller's congruence", () => {
    const zellers = require('../lib/zellers.js');

    describe('.modifiedMonth', () => {
        it('return 13 for January..', () => {
          expect(zellers.modifiedMonth(1)).to.equal(13);
        });
        it('return 14 for Feb..', () => {
          expect(zellers.modifiedMonth(2)).to.equal(14);
        });
        it('return 3 for March..', () => {
          expect(zellers.modifiedMonth(3)).to.equal(3);
        });
    });

    describe('.modifiedYear', () => {
      it('returns 2015 for Jan 2015', () => {
        expect(zellers.modifiedYear(2015, 1)).to.equal(2014);
      });
      it('returns 2015 for Feb 2016', () => {
        expect(zellers.modifiedYear(2016, 2)).to.equal(2015);
      });
      it('returns 2017 for March 2017', () => {
        expect(zellers.modifiedYear(2017, 3)).to.equal(2017);
      });
    });

    describe('.getDay', () => {
      it('returns 2 (Tuesday) for March 1, 2016', () => {
        expect(zellers.getDay(2016, 3, 1)).to.equal(2);
      });
      it('returns 5 (Friday) for Jan. 1, 2016', () => {
        expect(zellers.getDay(2016, 1, 1)).to.equal(5);
      });
      it('returns 3 (Tuesday) for March 1, 2000', () => {
        expect(zellers.getDay(2000, 3, 1)).to.equal(3);
      });
      it('returns 1 (Tuesday) for March 1, 2100', () => {
        expect(zellers.getDay(2100, 3, 1)).to.equal(1);
      });
      it('returns 0 (Tuesday) for March 2, 2200', () => {
        expect(zellers.getDay(2200, 3, 2)).to.equal(0);
      });
      it('returns 6 (Saturday) for August 1, 2015', () => {
        expect(zellers.getDay(2015, 8, 1)).to.equal(6);
      });
    });
  });
});
