const stocker = require('./stocker');

var stockName = "NALTIONALUM";
var q1 = 23;
var p1 = 99.09;
var p2 = 87.15;
var p = 90;
var l2 = 6449.10;

console.log('\n--------------------------------[ type1 ]---------------------------------\n');
// i have already bought some stocks 
// i know the current price 
// i want to acheive an average
// tell me how much i need
stocker.type1(stockName, q1, p1, p2, p);
console.log('\n--------------------------------[ type2 ]---------------------------------\n');
// i have already bought some stocks
// i have a lumpsum now and i know the current price
// tell me how much i can buy now and what will be the average
stocker.type2(stockName, q1, p1, p2, l2);
console.log('\n--------------------------------[ type3 ]---------------------------------\n');
// i have a lumpsum in mind for next session
// i want to acheive an averge with above lumpsum
// tell me how much i can invest today
stocker.type3(stockName, p1, p2, l2, p);
console.log('\n--------------------------------[ type4 ]---------------------------------\n');
// i have already bought some stocks
// i have a lumpsum now.
// i want to acheive the average with this lumpsum
// tell me at what price i can trade
stocker.type4(stockName, q1, p1, l2, p);
