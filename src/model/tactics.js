var _ = require('lodash');
var Promotion = require('./promotion.js');
var Discount = require('./discount.js');

function Tactics () {

}

Tactics.getTacticsFirst =  function (cartItems) {
  var promotionList = '';
  promotionList += this.getBrandsPromotionList(cartItems);

  var notPromotionCartItems = this.getNotPromotionCartItems(cartItems);
  var commonCartItems = this.getCommonCartItems(notPromotionCartItems);
  promotionList += this.getAllSuperReduceText(commonCartItems, 100, 3);

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

Tactics.getCommonCartItems = function (notPromotionCartItems) {
  var commonCartItems = [];
  _.forEach(notPromotionCartItems, function (notPromotionCartItem) {
    if(notPromotionCartItem.getName() !== '康师傅方便面') {
      commonCartItems.push(notPromotionCartItem);
    }
  });
  return commonCartItems;
};

Tactics.getAllSuperReduceText = function (commonCartItems, conditions, reduceMoney) {
  var saveMoney = this.calculateSaveMoney(commonCartItems, conditions, reduceMoney);
  return '名称：满' + conditions + '减' + reduceMoney +
         '，金额：' + saveMoney.toFixed(2) + '元\n';
};

Tactics.calculateSaveMoney = function (commonCartItems, conditions, reduceMoney) {
  var saveMoney = 0;
  _.forEach(commonCartItems, function (commonCartItem) {
    commonCartItem.promotion = true;
    saveMoney += commonCartItem.count * commonCartItem.getPrice();
  });
  return Math.floor(saveMoney/conditions) * reduceMoney;

};




module.exports = Tactics;
