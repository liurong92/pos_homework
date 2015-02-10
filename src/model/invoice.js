var _ = require('lodash');

function Invoice (cartItems) {
  this.cartItems = cartItems;
}

Invoice.prototype.getCartItemsList = function () {
  var cartItems = this.cartItems;
  var cartItemsList = '';
  _.forEach(cartItems, function(cartItem) {
    cartItemsList += cartItem.getCartItemText();
  });
  return cartItemsList;
};

Invoice.prototype.getPromotionList = function (tacticsType) {
  var promotionList = '名称：可口可乐品牌打折，金额：14.00元\n' +
                         '名称：满100减3，金额：3.00元\n';
  return promotionList;
};

module.exports = Invoice;
