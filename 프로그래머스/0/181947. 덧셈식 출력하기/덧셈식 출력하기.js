const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = "";
let sum = 0;

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const length = input.length;
    
    for (let i = 0; i < length; i++) {
        sum += Number(input[i]);
        if (i === length - 1) answer += input[i] + " = " + sum
        else answer += input[i] + " + ";
    }
    
    console.log(answer);
});