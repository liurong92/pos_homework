var _ = require('lodash');

function Discount () {

}

Discount.getBrandText = function (brandCartItems, brandName, rate) {
  var brandSaveMoney = 0;
  var saveRate = (1 - rate).toFixed(2);
  _.forEach(brandCartItems, function(brandCartItem) {
    brandCartItems.promotion = true;
    brandSaveMoney += brandCartItem.count * brandCartItem.getPrice() * saveRate;
  });
  return '名称：' + brandName + '品牌打折，金额：' + brandSaveMoney.toFixed(2) + '元\n';
};

module.exports = Discount;
