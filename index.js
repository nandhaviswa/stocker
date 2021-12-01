/**
 * @param stockName - Name of the stock
 * @param q1 - Existing stock quantity
 * @param p1 - Existing stock average price
 * @param q2 - How much stock do we need to buy at current price?
 * @param p2 - Current stock price (LTP) or price we will buy
 * @param p3 - Average stock price we want to acheive
 * @see 
 * @since Wed December 01, 2021 10:10 AM.
 */
function main(stockName, q1, p1, p2, p3){
    q2 = Math.ceil(q1 * ( (p3 - p1) / (p2 - p3) ));
    console.log(`\nName of the stock is ${stockName}`);
    console.log(`Currently you have ${q1} quantity @ ${p1} price average.`);
    console.log(`In order to acheive ${p3} average price, you need to buy is ${q2} quantity @ Rs. ${p2} ( Total Rs. ${q2*p2} )`);
    console.log(`Calculate using plain formula : ${((p1 * q1) + (p2 * q2))/(q1+q2)}\n`);
}
main('NALTIONALUM', 23, 99.09, 87.15, 89);
main('CHALET', 3, 262.33, 226, 230);