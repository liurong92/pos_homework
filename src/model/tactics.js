var _ = require('lodash');
var Promotion = require('./promotion.js');
var Discount = require('./discount.js');

function Tactics () {

}

Tactics.getTacticsFirst =  function (cartItems) {
  var promotionList = '';
  promotionList += Tactics.getBrandsPromotionList(cartItems);
  return promotionList;
};

Tactics.getBrandsPromotionList = function (cartItems) {
  var brandsPromotionList = '';
  _.forEach(Promotion.brands(), function(brand) {
    var brandCartItems = Tactics.getBrandsCartItems(cartItems, brand);
    brandsPromotionList += Discount.getBrandText(brandCartItems, brand.name, brand.rate);
  });

  return brandsPromotionList;
};

Tactics.getBrandsCartItems = function (cartItems, brand) {
  var brandCartItems = [];
  _.forEach(cartItems, function(cartItem) {
    if (cartItem.getBrand() === brand.name) {
      brandCartItems.push(cartItem);
    }
  });
  return brandCartItems;
};



module.exports = Tactics;
