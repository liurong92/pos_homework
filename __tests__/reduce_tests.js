jest.dontMock('../src/model/reduce.js');
jest.dontMock('lodash');

describe('Reduce', function () {
  describe(',calculateSaveMoney', function() {
    it('should return saveMoney_3', function() {
      var Reduce = require('../src/model/reduce.js');
      getPrice = jest.genMockFn();
      getPrice.mockReturnValue(15);
      var commonCartItems = [{'item' :
                               {'barcode' :'ITEM000003',
                                'name' : '斤',
                                'unit' : '瓶',
                                'price' : 15.00,
                                'brand' : '云山'},
                                'count' : 12,
                               'promotion' : true,
                               getPrice : getPrice}];
      var conditions = 100;
      var reduceMoney = 3;

      var result = Reduce.calculateSaveMoney(commonCartItems, conditions, reduceMoney);

      expect(result).toBe(3);
    });
  });
});
