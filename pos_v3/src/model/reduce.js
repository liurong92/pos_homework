var _ = require('lodash');

function Reduce () {

}

Reduce.getAllSuperReduceText = function (commonCartItems, conditions, reduceMoney) {
  if (commonCartItems.length > 0) {
    var saveMoney = this.calculateSaveMoney(commonCartItems, conditions, reduceMoney);
    return '名称：满' + conditions + '减' + reduceMoney +
           '，金额：' + saveMoney.toFixed(2) + '元\n';
           
  } else {
    return '';
  }
};

Reduce.getBrandReduceText = function (reduceCartItems, conditions, reduceMoney) {
  if (reduceCartItems.length > 0) {
    var saveMoney = this.calculateSaveMoney(reduceCartItems, conditions, reduceMoney);
    return '名称：' + reduceCartItems[0].getBrand() + '品牌满' + conditions +
           '减' + reduceMoney +'，金额：' + saveMoney.toFixed(2) + '元\n';

  } else {
    return '';
  }
};

Reduce.getItemReduceText = function (reduceCartItems, conditions, reduceMoney) {
  if (reduceCartItems.length > 0) {
    var saveMoney = this.calculateSaveMoney(reduceCartItems, conditions, reduceMoney);
    reduceCartItems[0].promotionTotal =
          reduceCartItems[0].count * reduceCartItems[0].getPrice() - saveMoney;

    return '名称：' + reduceCartItems[0].getName() + '满' + conditions +
           '减' + reduceMoney +'，金额：' + saveMoney.toFixed(2) + '元\n';

  } else {
    return '';
  }
};

Reduce.calculateSaveMoney = function (commonCartItems, conditions, reduceMoney) {

  if (commonCartItems.length > 0) {
    var saveMoneys = 0;
    _.forEach(commonCartItems, function (commonCartItem) {
      commonCartItem.promotion = true;
      if (commonCartItem.promotionTotal) {
        saveMoneys += commonCartItem.promotionTotal;
      } else {
        saveMoneys += commonCartItem.count * commonCartItem.getPrice();
      }
    });
    commonCartItems[0].saveMoney += Math.floor(saveMoneys/conditions) * reduceMoney;
    return Math.floor(saveMoneys/conditions) * reduceMoney;

  } else {
    return 0;
  }

};

module.exports = Reduce;
