function solution(str_list) {
    var answer = [];
    const len = str_list.length;
    for (let i = 0; i < len; i++) {
        if (str_list[i] == "l") {
            return str_list.slice(0, i);
        }
        if (str_list[i] == "r") {
            return str_list.slice(i+1, len);
        }
    }
    return answer; 
}