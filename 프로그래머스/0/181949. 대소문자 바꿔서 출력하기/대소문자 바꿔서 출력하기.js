const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    answer = ""; 
    str = input[0];
    
    for (i = 0; i < str.length; i++) {
        const word = str[i];
        const upper = word.toUpperCase();
        const isUpper = word === upper;

        if (isUpper) answer += word.toLowerCase();
        else answer += upper;
    }

    console.log(answer)
});