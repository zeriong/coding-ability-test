const solution = (num_list) => 
Number((num_list.reduce((ac, v) => ac + v) ** 2) > num_list.reduce((ac, v) => ac * v))