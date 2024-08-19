const solution = (num_list) => {
    const length = num_list.length;
    const [last, beforeLast] = [num_list[length - 1], num_list[length - 2]];
    const target = (last > beforeLast) ? (last - beforeLast) : (last * 2);
    return [...num_list, target];
};