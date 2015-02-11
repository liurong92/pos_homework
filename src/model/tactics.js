function Tactics () {

}

Tactics.getTacticsFirst =  function () {
  var promotionList = '';
  promotionList += '名称：可口可乐品牌打折，金额：14.00元\n'+
                   '名称：满100减3，金额：3.00元\n';
  return promotionList;
};

module.exports = Tactics;
