jest.dontMock('../src/model/invoice.js');
jest.dontMock('../src/model/item.js');
jest.dontMock('../src/model/cartitem.js');
jest.dontMock('../src/model/tactics.js');
jest.dontMock('../src/model/promotion.js');
jest.dontMock('../src/model/discount.js');
jest.dontMock('../src/model/reduce.js');
jest.dontMock('lodash');
jest.dontMock('moment');

describe('Invoice', function() {
  var Item, CartItem, catItems, Invoice, incoice, moment;
  beforeEach(function() {
    Item = require('../src/model/item.js');
    CartItem = require('../src/model/cartitem.js');
    cartItems = [new CartItem(new Item.all()[0], 20),
                 new CartItem(new Item.all()[1], 20),
                 new CartItem(new Item.all()[7], 30),
                 new CartItem(new Item.all()[8], 25),
                 new CartItem(new Item.all()[5], 8),
                 new CartItem(new Item.all()[4], 14)];
    Invoice = require('../src/model/invoice.js');
    invoice = new Invoice();
    moment = require('moment');
  });

  describe('#getCartItemsListText', function() {
    it('should return cartItems Text', function() {
      var result = invoice.getCartItemsList(cartItems);

      expect(result).toEqual('名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
                             '名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n' +
                             '名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n' +
                             '名称：康师傅冰红茶，数量：25瓶，单价：3.00(元)，小计：75.00(元)\n' +
                             '名称：云山荔枝，数量：8斤，单价：15.00(元)，小计：120.00(元)\n' +
                             '名称：云山苹果，数量：14斤，单价：5.50(元)，小计：77.00(元)\n');
    });
  });

  describe('#getPromotionList', function() {
    it('should return promotion Text', function() {
      var result = invoice.getPromotionList(cartItems,2);

      expect(result).toEqual('名称：可口可乐350ml单品打折，金额：3.00元\n' +
                             '名称：康师傅品牌满100减2，金额：4.00元\n' +
                             '名称：云山荔枝满100减5，金额：5.00元\n');
    });
  });

  describe('#getSaveMoney', function() {
    it('should return saveMoney', function() {
      invoice.getPromotionList(cartItems, 2);
      var result = invoice.getSaveMoney(cartItems);

      expect(result).toEqual(12);
    });
  });

  describe('#getSaveMoneyText', function() {
    it('should return saveMoneyText', function() {
      invoice.getPromotionList(cartItems, 2);
      var result = invoice.getSaveMoneyText(cartItems);

      expect(result).toEqual('节省：12.00(元)\n');
    });
  });

  describe('#getTotalMoney', function() {
    it('should return totalMoney', function() {
      invoice.getPromotionList(cartItems, 2);
      var result = invoice.getTotalMoney(cartItems);

      expect(result).toEqual(535);
    });
  });

  describe('#getTotalMoneyText', function() {
    it('should return totalMoneyText', function() {
      invoice.getPromotionList(cartItems, 2);
      var result = invoice.getTotalMoneyText(cartItems);

      expect(result).toEqual('总计：535.00(元)\n');
    });
  });

  describe('#printInventory', function() {
    it('should return asdfadf', function() {
      var tacticsType = 2;
      var result = invoice.printInventory(cartItems, tacticsType);

      expect(result).toBe('***<没钱赚商店>购物清单***\n打印时间：' +
                          moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n\n' +
                          '----------------------\n' +
                          '名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
                          '名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n' +
                          '名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n' +
                          '名称：康师傅冰红茶，数量：25瓶，单价：3.00(元)，小计：75.00(元)\n' +
                          '名称：云山荔枝，数量：8斤，单价：15.00(元)，小计：120.00(元)\n' +
                          '名称：云山苹果，数量：14斤，单价：5.50(元)，小计：77.00(元)\n\n' +
                          '----------------------\n' +
                          '优惠信息：\n' +
                          '名称：可口可乐350ml单品打折，金额：3.00元\n' +
                          '名称：康师傅品牌满100减2，金额：4.00元\n' +
                          '名称：云山荔枝满100减5，金额：5.00元\n\n' +
                          '----------------------\n' +
                          '总计：535.00(元)\n节省：12.00(元)\n' +
                          '**********************\n');
    });
  });
});
