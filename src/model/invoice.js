var _ = require('lodash');
var moment = require('moment');
var Tactics = require('./tactics.js');

function Invoice () {

}

Invoice.prototype.getCartItemsList = function (cartItems) {
  var cartItemsList = '';
  _.forEach(cartItems, function(cartItem) {
    cartItemsList += cartItem.getCartItemText();
  });

  return cartItemsList;
};

Invoice.prototype.getPromotionList = function (cartItems, tacticsType) {
  var promotionList = '';
  switch (tacticsType) {
    case 1 :
      promotionList += Tactics.getTacticsFirst(cartItems);
      break;

    case 2 :
      promotionList += Tactics.getTacticsFirst(cartItems);
      break;

    case 3 :
      promotionList += Tactics.getTacticsFirst(cartItems);
      break;

    case 4 :
      promotionList += Tactics.getTacticsFirst(cartItems);
      break;

    default :
    promotionList += '没有优惠商品。';
  }
  return promotionList;
};

Invoice.prototype.getSaveMoney = function (cartItems) {
  var saveMoney = 0;
  _.forEach(cartItems, function (cartItem) {
    saveMoney += cartItem.saveMoney;
  });
  return saveMoney;
};

Invoice.prototype.getSaveMoneyText = function (cartItems) {
  return '节省：' + this.getSaveMoney(cartItems).toFixed(2) + '(元)\n';
};

Invoice.prototype.printInventory = function (cartItems, tacticsType) {
  var print ='***<没钱赚商店>购物清单***\n' + '打印时间：' +
           moment().format('YYYY年MM月DD日 HH:mm:ss') +
           '\n\n----------------------\n' +
           this.getCartItemsList(cartItems) +
           '\n----------------------\n' + '优惠信息：\n' +
           this.getPromotionList(cartItems, tacticsType) +
           '\n----------------------\n' +
           this.getSaveMoneyText(cartItems) +
           '**********************\n';
           console.log(cartItems);
           return print;
};

module.exports = Invoice;
