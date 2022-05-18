const stocker = require('./stocker');

var stockName = "PAYTM";
var q1 = 1;
var p1 = 1331.95;
var l1 = 1331.95;

var q2 = 25;
var p2 = 586;
var l2 = 10000;

var p = 590;
var l = 10000;

const type = 2;
switch(type){
    case 1:
        console.log('\n--------------------------------[ type1 ]---------------------------------\n');
        // i have already bought some stocks 
        // i know the current price 
        // i want to acheive an average
        // tell me how much i need
        stocker.type1(stockName, q1, p1, p2, p);
    break;
    case 2:
        console.log('\n--------------------------------[ type2 ]---------------------------------\n');
        // i have already bought some stocks
        // i have a lumpsum now and i know the current price
        // tell me how much i can buy now and what will be the average
        stocker.type2(stockName, q1, p1, p2, l2);
    break;
    case 3:
        console.log('\n--------------------------------[ type3 ]---------------------------------\n');
        // i have a lumpsum in mind for next session
        // i want to acheive an averge with above lumpsum
        // tell me how much i can invest today
        stocker.type3(stockName, p1, p2, l2, p);
    break;
    case 4:
        console.log('\n--------------------------------[ type4 ]---------------------------------\n');
        // i have already bought some stocks
        // i have a lumpsum now.
        // i want to acheive the average with this lumpsum
        // tell me at what price i can trade
        stocker.type4(stockName, q1, p1, l2, p);
    break;
    case 5:
        console.log('\n--------------------------------[ type5 ]---------------------------------\n');
        // i have already bought some stocks
        // i want to round off to a lumpsum
        // tell me how much i need to invest now
        stocker.type5(stockName, q1, p1, p2, l);
    break;
}
