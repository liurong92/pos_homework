function CartItem (item, count) {
  this.item = item;
  this.count = count;
}

CartItem.prototype.getPrice = function() {
  return this.item.price;
};

CartItem.prototype.getBrand = function() {
  return this.item.brand;
};

CartItem.prototype.getName = function() {
  return this.item.name;
};

CartItem.prototype.getUnit = function() {
  return this.item.unit;
};

CartItem.prototype.getSubTotal = function() {
  return this.getPrice() * this.count;
};

CartItem.prototype.getCartItemText = function() {
  return '名称：' + this.getName() + '，数量：' + this.count + this.getUnit() +
         '，单价：' + this.getPrice().toFixed(2) + '(元)，小计：'+
         this.getSubTotal().toFixed(2) +'(元)\n';
};

module.exports = CartItem;
