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
  var Item, CartItem, catItems, Invoice, incoice;
  beforeEach(function() {
    Item = require('../src/model/item.js');
    CartItem = require('../src/model/cartitem.js');
    cartItems = [new CartItem(new Item.all()[0], 20),
                 new CartItem(new Item.all()[1], 20),
                 new CartItem(new Item.all()[7], 30),
                 new CartItem(new Item.all()[5], 12)];
    Invoice = require('../src/model/invoice.js');
    invoice = new Invoice();
  });

  describe('#getCartItemsListText', function() {
    it('should return cartItems Text', function() {
      var result = invoice.getCartItemsList(cartItems);

      expect(result).toEqual('名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
                             '名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n' +
                             '名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n' +
                             '名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)\n');
    });
  });

  describe('#getPromotionListText', function() {
    it('should return promotion Text', function() {
      var result = invoice.getPromotionList(cartItems,1);

      expect(result).toEqual('名称：可口可乐品牌打折，金额：14.00元\n' +
                             '名称：满100减3，金额：3.00元\n');
    });
  });

  describe('#getSaveMoney', function() {
    it('should return promotion saveMoney', function() {
      invoice.getPromotionList(cartItems, 1);
      var result = invoice.getSaveMoney(cartItems);

      expect(result).toEqual(17);
    });
  });

  describe('#getSaveMoneyText', function() {
    it('should return promotion saveMoneyText', function() {
      invoice.getPromotionList(cartItems, 1);
      var result = invoice.getSaveMoneyText(cartItems);

      expect(result).toEqual('节省：17.00(元)\n');
    });
  });

  describe('#getTotalMoney', function() {
    it('should return promotion totalMoney', function() {
      invoice.getPromotionList(cartItems, 1);
      var result = invoice.getTotalMoney(cartItems);

      expect(result).toEqual(438);
    });
  });

  describe('#getTotalMoneyText', function() {
    it('should return promotion totalMoneyText', function() {
      invoice.getPromotionList(cartItems, 1);
      var result = invoice.getTotalMoneyText(cartItems);

      expect(result).toEqual('总计：438.00(元)\n');
    });
  });
});
