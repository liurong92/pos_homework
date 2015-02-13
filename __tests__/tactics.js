jest.dontMock('lodash');
jest.dontMock('../src/model/tactics.js');

describe('Tactics', function() {
  describe(',getNotPromotionCartItems', function() {
    it('should return cartItem_length_is_zero', function() {
      var Tactics = require('../src/model/tactics.js');
      var cartItems = [{'item' :
                       {'barcode' :'ITEM000000',
                        'name' : '可口可乐350ml',
                        'unit' : '瓶',
                        'price' : 3.00,
                        'brand' : '可口可乐'},
                       'count' : 20,
                       'promotion' : true}];

      var result = Tactics.getNotPromotionCartItems(cartItems);

      expect(result.length).toEqual(0);
    });
  });

  describe(',getCommonCartItems', function() {
    it('should return cartItem_length_is_zero', function() {
      var Tactics = require('../src/model/tactics.js');
      getName = jest.genMockFn();
      getName.mockReturnValue('可口可乐350ml');

      var cartItems = [{'item' :
                       {'barcode' :'ITEM000000',
                        'name' : '可口可乐350ml',
                        'unit' : '瓶',
                        'price' : 3.00,
                        'brand' : '可口可乐'},
                       'count' : 20,
                       'promotion' : true,
                       getName : getName}];
      var itemName = '雪碧';
      var result = Tactics.getCommonCartItems(cartItems, itemName);

      expect(result[0].item.name).toEqual('可口可乐350ml');
      expect(result[0].item.barcode).toEqual('ITEM000000');
      expect(result[0].item.price).toEqual(3);

    });
  });
});
