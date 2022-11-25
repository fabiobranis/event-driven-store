import { isLoweringPrice } from './is-lowering-price.ds.js';

describe('isLoweringPrice domain service', () => {
  describe('when the price is lowering', () => {
    describe('when the difference is higher than threshold', () => {
      it('should return false', () => {
        expect(isLoweringPrice({ newPrice: 10, oldPrice: 12 })).toBeFalsy();
      });
    });

    describe('when the difference is lower than threshold', () => {
      it('should return true', () => {
        expect(isLoweringPrice({ newPrice: 10, oldPrice: 21 })).toBeTruthy();
      });
    });

    describe('when the difference is equal than threshold', () => {
      it('should return true', () => {
        expect(isLoweringPrice({ newPrice: 10, oldPrice: 20 })).toBeTruthy();
      });
    });
  });

  describe('when the price is not lowering', () => {
    it('should return false', () => {
      expect(isLoweringPrice({ newPrice: 10, oldPrice: 8 })).toBeFalsy();
    });
  });
});
