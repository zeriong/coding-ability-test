function solution(num_list) {
    let even = "";
    let odd = "";
    for (let i = 0; i < num_list.length; i++) {
        const num = num_list[i];
        if (num % 2 == 0) even += num;
        else odd += num;
    }
    return Number(odd) + Number(even);
}