var _ = require('lodash');
var Item = require('./item.js');
var CartItem = require('./cartitem.js');

function Scanner () {
  this.cartItems = [];
}

Scanner.prototype.addCartItems = function (tag) {

  for(var i = 0; i < tag.length; i++) {
    for(var key in tag[i]) {
      var item = _.find(Item.all(), {'barcode': key});
      this.cartItems.push(new CartItem(item, tag[i][key]));
    }
  }

  return this.cartItems;
};

module.exports = Scanner;
