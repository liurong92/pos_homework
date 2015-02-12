var _ = require('lodash');
var Promotion = require('./promotion.js');
var Discount = require('./discount.js');
var Reduce = require('./reduce.js');

function Tactics () {

}

Tactics.getTacticsFirst =  function (cartItems) {
  var promotionList = '';
  promotionList += this.getBrandsPromotionList(cartItems);

  var notPromotionCartItems = this.getNotPromotionCartItems(cartItems);

  var commonCartItems = this.getCommonCartItems(notPromotionCartItems, '康师傅方便面');
  promotionList += Reduce.getAllSuperReduceText(commonCartItems, 100, 3);

  console.log(cartItems);
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
      cartItem.promotion = true;
      brandCartItems.push(cartItem);
    }
  });
  return brandCartItems;
};

Tactics.getNotPromotionCartItems = function (cartItems) {
  var notPromotionCartItems = [];
  _.forEach(cartItems, function (cartItem) {
    if(!cartItem.promotion) {
      notPromotionCartItems.push(cartItem);
    }
  });

  return notPromotionCartItems;
};

Tactics.getCommonCartItems = function (notPromotionCartItems, itemName) {
  var commonCartItems = [];
  _.forEach(notPromotionCartItems, function (notPromotionCartItem) {
    if(notPromotionCartItem.getName() !== itemName) {
      commonCartItems.push(notPromotionCartItem);
    }
  });
  return commonCartItems;
};


module.exports = Tactics;
