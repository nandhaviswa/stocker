const stocker = require('./stocker');

stocker.type1('TEST', 10, 100, 50, 75);
stocker.type1('NALTIONALUM', 23, 99.09, 87.15, 90);
stocker.type1('CHALET', 3, 262.33, 226, 240);
console.log('\n--------------------------------[ nandha ]---------------------------------\n');
stocker.type2('TEST', 10, 100, 50, 500);
stocker.type2('NALTIONALUM', 23, 99.09, 87.15, 6449.10);
stocker.type2('CHALET', 3, 262.33, 226, 1130);
console.log('\n--------------------------------[ nandha ]---------------------------------\n');
stocker.type3('TEST', 100, 50, 500, 75);
stocker.type3('NALTIONALUM', 99.09, 87.15, 6449.10, 90);
stocker.type3('CHALET', 262.33, 226, 1130, 240);
