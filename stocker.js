/**
 * Calculate and print how much quantity we need to buy
 * to acheive the aaverage price
 * @param stockName - Name of the stock
 * @param q1 - Existing stock quantity
 * @param p1 - Existing stock average price
 * @param q2 - How much stock do we need to buy at current price?
 * @param p2 - Current stock price (LTP) or price we will buy
 * @param p - Average stock price we want to acheive
 * @see 
 * @since Wed December 01, 2021 10:10 AM.
 */
function type1(stockName, q1, p1, p2, p){
    var q2 = Math.ceil(q1 * ( (p - p1) / (p2 - p) ));
    console.log(`\nName of the stock is ${stockName}`);
    console.log(`Currently you have ${q1} quantity @ ${p1} price average with worth ${q1 * p1}.`);
    console.log(`You will have to buy ${q2} quantity @ Rs. ${p2}  ( Total Rs. ${q2*p2} ) to acheive ${p} average price`);
    console.log(`You will have a total of ${q1+q2} quantity @ average price Rs. ${((p1 * q1) + (p2 * q2))/(q1+q2)} {computed}.\n`);
}

/**
 * Calculate and print how much quantity we can buy and what will be the resulting average
 * @param stockName - Name of the stock
 * @param q1 - Existing stock quantity
 * @param p1 - Existing stock average price
 * @param q2 - Quantity of stock we will be able to buy
 * @param p2 - Current stock price (LTP) or price we will buy
 * @param p - Average stock price we will acheive
 * @param l2 - Lumpsum we want to invest
 * @param b1 - Balance amount
 * @see 
 * @since Wed December 01, 2021 10:10 AM.
 */
function type2(stockName, q1, p1, p2, l2){
    var q2 = Math.floor(l2/p2);
    var b1 = l2 - ( q2 * p2 );
    var p = ( (q1 * p1) + (q2 * p2) ) / ( q1 + q2 );
    console.log(`\nName of the stock is ${stockName}`);
    console.log(`Currently you have ${q1} quantity @ ${p1} price average with worth ${q1 * p1}.`);
    console.log(`You will be able to buy ${q2} quantity @ Rs. ${p2} with lumpsum Rs. ${l2} with balance Rs. ${b1}`);
    console.log(`You will have a total of ${q1+q2} quantity @ average price Rs. ${p}.\n`);
}

/**
 * Calculate how much you need to invest today so that you acheive average tomorrow
 * @param stockName - Name of the stock
 * @param q1 - How much quantity I need to buy today
 * @param p1 - Current stock price (LTP)
 * @param q2 - Quantity of stock I will buy next session
 * @param p2 - Price of the stock in next session
 * @param l1 - Lumpsum I need to invest today
 * @param l2 - Lumpsum I will invest in next session
 * @param p - Average stock price we will acheive
 * @see 
 * @since Wed December 01, 2021 10:10 AM.
 */
function type3(stockName, p1, p2, l2, p){
    var q2 = Math.floor(l2 / p2);
    var b2 = l2 - (q2 * p2);
    var q1 = Math.floor(( q2 * ( p2 - p ) ) / ( p - p1 ));
    var l1 = q1 * p1;
    console.log(`\nName of the stock is ${stockName}`);
    console.log(`You will have to invest Rs. ${l1} with balance ${b2} today to buy ${q1} quantity @ Rs. ${p1}.`);
    console.log(`You can later buy ${q2} quantity @ Rs. ${p2} with lumpsum Rs. ${l2} to acheive average Rs. ${p}.`);
    console.log(`You will have a total of ${q1+q2} quantity @ average price Rs. ${p}.\n`);
}

type1('TEST', 10, 100, 50, 75);
type1('NALTIONALUM', 23, 99.09, 87.15, 90);
type1('CHALET', 3, 262.33, 226, 240);
console.log('\n--------------------------------[ nandha ]---------------------------------\n');
type2('TEST', 10, 100, 50, 500);
type2('NALTIONALUM', 23, 99.09, 87.15, 6449.10);
type2('CHALET', 3, 262.33, 226, 1130);
console.log('\n--------------------------------[ nandha ]---------------------------------\n');
type3('TEST', 100, 50, 500, 75);
type3('NALTIONALUM', 99.09, 87.15, 6449.10, 90);
type3('CHALET', 262.33, 226, 1130, 240);
