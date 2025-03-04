const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = "";

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    input.map(val => answer += val);
    console.log(answer); 
});