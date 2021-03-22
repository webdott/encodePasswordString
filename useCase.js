const encodePassword = require('./encode');

// 2b. sample string to be tested
const input = "Errors in strategy cannot be correct through tactical manoeuvres";

// hashed input
const output = encodePassword(input);

console.log(output)