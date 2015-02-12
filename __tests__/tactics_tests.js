jest.dontMock('../src/model/tactics.js');
jest.dontMock('lodash');

describe('Tactics', function () {
  describe(',getBrandText', function() {
    it('should return 名称：可口可乐品牌打折，金额：6.00元', function () {
      var Tactics = require('../src/model/tactics.js');
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

      var result = Tactics.getBrandText(brandCartItems, brandName, rate);

      expect(result).toEqual('名称：可口可乐品牌打折，金额：6.00元\n');
    });
  });
});
