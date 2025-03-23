const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    cnt = 1;
    word = input[0]; 
    str = word;
    n = Number(input[1]);
    
    while(cnt < n) {
        cnt += 1;
        str += word;
    }
    console.log(str);
});