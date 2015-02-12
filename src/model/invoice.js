var _ = require('lodash');
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

module.exports = Invoice;
