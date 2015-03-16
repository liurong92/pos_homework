var _ = require('lodash');
var Item = require('./item.js');
var CartItem = require('./cartitem.js');

function Scanner () {

}

Scanner.prototype.addCartItems = function (tag) {
  var cartItems = [];
  for(var i = 0; i < tag.length; i++) {
    for(var key in tag[i]) {
      var item = _.find(Item.all(), {'barcode': key});
      cartItems.push(new CartItem(item, tag[i][key]));
    }
  }

  return cartItems;
};

module.exports = Scanner;
