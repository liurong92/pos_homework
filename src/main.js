var Scanner = require('./model/scanner.js');
var Invoice = require('./model/invoice.js');

function main() {
  var tag = [{ 'ITEM000000' : 20 },
             { 'ITEM000010' : 30 },
             { 'ITEM000001' : 30 },
             { 'ITEM000007' : 25 },
             { 'ITEM000003' : 8  },
             { 'ITEM000002' : 14 }];

  var scanner = new Scanner();
  var cartItems = scanner.addCartItems(tag);
  var invoice = new Invoice();
  var tacticsType = 4;
  var print = invoice.printInventory(cartItems, tacticsType);

  console.log(print);
}

main();
