var _ = require('lodash');
var Promotion = require('./promotion.js');
var Discount = require('./discount.js');
var Reduce = require('./reduce.js');

function Tactics () {

}

Tactics.getTacticsOne =  function (cartItems) {
  var promotionList = '';
  promotionList += this.getBrandsPromotionList(cartItems);

  var notPromotionCartItems = this.getNotPromotionCartItems(cartItems);
  var commonCartItems = this.getCommonCartItems(notPromotionCartItems, '康师傅方便面');
  promotionList += Reduce.getAllSuperReduceText(commonCartItems, 100, 3);

  return promotionList;
};

Tactics.getTacticsTwo = function (cartItems) {
  var promotionList = '';
  promotionList += this.getItemsPromotionList(cartItems);

  var brandReduceCartItems = this.getBrandReduceCartItems(cartItems, '康师傅');
  promotionList += Reduce.getBrandReduceText(brandReduceCartItems, 100, 2);

  var itemReduceCartItems = this.getItemReduceCarItems(cartItems, '云山荔枝');
  promotionList += Reduce.getItemReduceText(itemReduceCartItems, 100, 5);

  return promotionList;
};

Tactics.getTacticsThree = function (cartItems) {
  var promotionList = '名称：可口可乐350ml单品打折，金额：3.00元\n' +
                         '名称：康师傅品牌满100减2，金额：4.00元\n' +
                         '名称：云山荔枝满100减5，金额：5.00元\n';
  return promotionList;
};

Tactics.getItemsPromotionList = function (cartItems) {
  var itemsPromotionList = '';
  _.forEach(Promotion.items(), function(item) {
    var itemCartItems = Tactics.getItemsCartItems(cartItems, item);
    itemsPromotionList += Discount.getItemText(itemCartItems, item.name, item.rate);
  });

  return itemsPromotionList;
};

Tactics.getBrandsPromotionList = function (cartItems) {
  var brandsPromotionList = '';
  _.forEach(Promotion.brands(), function(brand) {
    var brandCartItems = Tactics.getBrandCartItems(cartItems, brand);
    brandsPromotionList += Discount.getBrandText(brandCartItems, brand.name, brand.rate);
  });

  return brandsPromotionList;
};

Tactics.getItemsCartItems = function (cartItems, item) {
  var itemCartItems = [];
  _.forEach(cartItems, function(cartItem) {
    if(cartItem.getName() === item.name) {
      cartItem.promotion = true;
      itemCartItems.push(cartItem);
    }
  });
  return itemCartItems;
};

Tactics.getBrandCartItems = function (cartItems, brand) {
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

Tactics.getBrandReduceCartItems = function (cartItems, reduceName) {
  var reduceCartItems = [];
  _.forEach(cartItems, function (cartItem) {
    if (cartItem.getBrand() === reduceName) {
      cartItem.promotion = true;
      reduceCartItems.push(cartItem);
    }
  });

  return reduceCartItems;
};

Tactics.getItemReduceCarItems = function (cartItems, reduceName) {
  var reduceCartItems = [];
  _.forEach(cartItems, function (cartItem) {
    if (cartItem.getName() === reduceName) {
      cartItem.promotion = true;
      reduceCartItems.push(cartItem);
    }
  });

  return reduceCartItems;
};

module.exports = Tactics;
