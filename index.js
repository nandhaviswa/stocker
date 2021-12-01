/**
 * Calculate and print how much quantity we need to buy
 * @param stockName - Name of the stock
 * @param q1 - Existing stock quantity
 * @param p1 - Existing stock average price
 * @param q2 - How much stock do we need to buy at current price?
 * @param p2 - Current stock price (LTP) or price we will buy
 * @param p3 - Average stock price we want to acheive
 * @see 
 * @since Wed December 01, 2021 10:10 AM.
 */
function type1(stockName, q1, p1, p2, p3){
    var q2 = Math.ceil(q1 * ( (p3 - p1) / (p2 - p3) ));
    console.log(`\nName of the stock is ${stockName}`);
    console.log(`Currently you have ${q1} quantity @ ${p1} price average.`);
    console.log(`You will have to buy ${q2} quantity @ Rs. ${p2}  ( Total Rs. ${q2*p2} ) to acheive ${p3} average price`);
    console.log(`You will have a total of ${q1+q2} quantity @ average price Rs. ${((p1 * q1) + (p2 * q2))/(q1+q2)} {computed}.\n`);
}
/**
 * Calculate and print how much quantity we can buy and what will be the resulting average
 * @param stockName - Name of the stock
 * @param q1 - Existing stock quantity
 * @param p1 - Existing stock average price
 * @param q2 - Quantity of stock we will be able to buy
 * @param p2 - Current stock price (LTP) or price we will buy
 * @param p3 - Average stock price we will acheive
 * @param l2 - Lumpsum we want to invest
 * @param l3 - Balance amount
 * @see 
 * @since Wed December 01, 2021 10:10 AM.
 */

function type2(stockName, q1, p1, p2, l2){
    var q2 = Math.floor(l2/p2);
    var l3 = l2 - ( q2 * p2 );
    var p3 = ( (q1 * p1) + (q2 * p2) ) / ( q1 + q2 );
    console.log(`\nName of the stock is ${stockName}`);
    console.log(`You will be able to buy ${q2} quantity @ Rs. ${p2} with lumpsum Rs. ${l2} with balance Rs. ${l3}`);
    console.log(`You will have a total of ${q1+q2} quantity @ average price Rs. ${p3}.\n`);
}

type1('NALTIONALUM', 23, 99.09, 87.15, 87.20);
type1('CHALET', 3, 262.33, 226, 230);
console.log('\n--------------------------------[ nandha ]---------------------------------\n');
type2('NALTIONALUM', 23, 99.09, 87.15, 476711);
type2('CHALET', 3, 262.33, 226, 5650);
