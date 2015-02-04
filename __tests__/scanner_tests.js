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

    it('should return two cartItem', function () {
      var result = scanner.addCartItems([{ 'ITEM000000' : 20 },
                                         { 'ITEM000010' : 20 }]);

      var cartItems = [{'item' :
                              {'barcode' :'ITEM000000',
                               'name' : '可口可乐350ml',
                               'unit' : '瓶',
                               'price' : 3.00,
                               'brand' : '可口可乐'},
                        'count' : 20},

                        {'item' :
                              {'barcode' :'ITEM000010',
                               'name' : '可口可乐550ml',
                               'unit' : '瓶',
                               'price' : 4.00,
                               'brand' : '可口可乐'},
                        'count' : 20}
                        ];
      expect(result).toEqual(cartItems);
    });

  });
});
