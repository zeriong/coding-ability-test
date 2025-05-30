function solution(order) {
    
    const menu = [
        { 
            name: "anything",
            cost: 4500
        },
        { 
            name: "americano",
            cost: 4500
        },
        { 
            name: "cafelatte",
            cost: 5000
        },
    ];
    
    return order.reduce((a,c) => {
        const findOne = menu.find(m => c.includes(m.name)); 
        return a += findOne.cost
    }, 0); 
}