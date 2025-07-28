function solution(my_string) {
    var answer = '';
    const len = my_string.length;
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const myStr = my_string.split('');
    
    if (len < 1 || len > 1000) return answer;
    
    for (let i=0; i < myStr.length; i++) {
        for (let j=0; j < vowel.length; j++) {
            if (myStr[i] === vowel[j]) {
                myStr.splice(i,1);
                i--;
            }
        }
    }
    
    answer = myStr.join('');
    
    return answer; 
}