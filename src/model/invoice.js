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

module.exports = Invoice;
