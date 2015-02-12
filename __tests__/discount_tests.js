jest.dontMock('../src/model/discount.js');
jest.dontMock('lodash');

describe('Discount', function () {
  describe(',getBrandText', function() {
    it('should return 名称：可口可乐品牌打折，金额：6.00元', function () {
      var Discount = require('../src/model/discount.js');
      getPrice = jest.genMockFn();
      getPrice.mockReturnValue(3);
      var brandCartItems = [{'item' :
                             {'barcode' :'ITEM000000',
                              'name' : '可口可乐350ml',
                              'unit' : '瓶',
                              'price' : 3.00,
                              'brand' : '可口可乐'},
                            'count' : 20,
                            getPrice : getPrice}];
      var brandName = '可口可乐';
      var rate = 0.9;

      var result = Discount.getBrandText(brandCartItems, brandName, rate);

      expect(result).toEqual('名称：可口可乐品牌打折，金额：6.00元\n');
    });
  });
});
