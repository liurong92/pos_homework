jest.autoMockOff();
jest.dontMock('lodash');

describe('Scanner', function () {
  describe('#addCartItems', function () {
    it('should return one cartItem', function () {
      var Scanner = require('../src/model/scanner.js');
      var scanner = new Scanner();

      var result = scanner.addCartItems([{ 'ITEM000000' : 20 }]);
      expect(result[0].item.brand).toEqual('可口可乐');
    });
  });
});
