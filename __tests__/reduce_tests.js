jest.dontMock('../src/model/reduce.js');
jest.dontMock('lodash');

describe('Reduce', function () {
  var Reduce, commonCartItems, conditions, reduceMoney;
  beforeEach(function() {
    Reduce = require('../src/model/reduce.js');
    getPrice = jest.genMockFn();
    getPrice.mockReturnValue(15);
    commonCartItems = [{'item' :
                             {'barcode' :'ITEM000003',
                              'name' : '斤',
                              'unit' : '瓶',
                              'price' : 15.00,
                              'brand' : '云山'},
                              'count' : 12,
                             'promotion' : true,
                             getPrice : getPrice}];
    conditions = 100;
    reduceMoney = 3;
  });

  describe(',calculateSaveMoney', function() {
    it('should return saveMoney_3', function() {
      var result = Reduce.calculateSaveMoney(commonCartItems, conditions, reduceMoney);

      expect(result).toBe(3);
    });
  });

  describe(',getAllSuperReduceText', function() {
    it('should return 名称：满100减3，金额：3.00元', function() {
      var result = Reduce.getAllSuperReduceText(commonCartItems, conditions, reduceMoney);

      expect(result).toBe('名称：满100减3，金额：3.00元\n');
    });
  });
});
