var _ = require('lodash');

function Reduce () {

}

Reduce.getAllSuperReduceText = function (commonCartItems, conditions, reduceMoney) {
  var saveMoney = this.calculateSaveMoney(commonCartItems, conditions, reduceMoney);
  return '名称：满' + conditions + '减' + reduceMoney +
         '，金额：' + saveMoney.toFixed(2) + '元\n';
};

Reduce.calculateSaveMoney = function (commonCartItems, conditions, reduceMoney) {
  var saveMoney = 0;
  _.forEach(commonCartItems, function (commonCartItem) {
    commonCartItem.promotion = true;
    saveMoney += commonCartItem.count * commonCartItem.getPrice();
  });
  return Math.floor(saveMoney/conditions) * reduceMoney;
};

module.exports = Reduce;
