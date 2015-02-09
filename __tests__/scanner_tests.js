jest.autoMockOff();
jest.dontMock('lodash');

describe('Scanner', function () {
  describe('#addCartItems', function () {
    var Scanner, scanner;
    beforeEach(function () {
      Scanner = require('../src/model/scanner.js');
      scanner = new Scanner();
    });

    it('should return one cartItem is brand', function () {
      var result = scanner.addCartItems([{ 'ITEM000000' : 20 }]);
      expect(result[0].item.brand).toEqual('可口可乐');
    });

    it('should return two cartItems', function () {
      var result = scanner.addCartItems([{ 'ITEM000000' : 20 },
                                         { 'ITEM000010' : 20 }]);
      expect(result.length).toBe(2);
    });

    it('should return two cartItems_brand', function () {
      var result = scanner.addCartItems([{ 'ITEM000000' : 20 },
                                         { 'ITEM000010' : 20 }]);
      expect(result[0].item.brand).toEqual('可口可乐');
      expect(result[1].item.brand).toEqual('可口可乐');
    });

  });
});
