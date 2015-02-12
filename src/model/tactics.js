var _ = require('lodash');
var Promotion = require('./promotion.js');

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
    brandsPromotionList += Tactics.getBrandText(brandCartItems, brand.name, brand.rate);
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

Tactics.getBrandText = function (brandCartItems, brandName, rate) {
  var brandSaveMoney = 0;
  var saveRate = (1 - rate).toFixed(2);
  _.forEach(brandCartItems, function(brandCartItem) {
    brandSaveMoney += brandCartItem.count * brandCartItem.getPrice() * saveRate;
  });
  return '名称：' + brandName + '品牌打折，金额：' + brandSaveMoney.toFixed(2) + '元\n';
};

module.exports = Tactics;
