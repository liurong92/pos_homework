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
});
