module.exports = function zeros(expression) {

    let singleFact = [];
    let doubleFact = [];

    let zeroes = 0;

    let numbers = expression.split("*").reduce((acc, cur) => {

        if(/^\d+!$/.test(cur)){
            acc[0].push(cur.match(/^(\d+)!$/)[1]);
            return acc;
        } else {
            acc[1].push(cur.match(/^(\d+)!!$/)[1]);
            return acc;
        }
    }, [singleFact,doubleFact]);

    if(singleFact.length === 0 && doubleFact.every(cur => cur % 2 !== 0)){
        return 0;
    }
    else {

        singleFact = singleFact.reduce((acc, cur) => {
            acc.push(factorialArray(cur));
            return acc;
        }, []);


        doubleFact = doubleFact.reduce((acc, cur) => {
            acc.push(doubleFactorialArray(cur));
            return acc;
        }, []);

        numbers = singleFact.concat(doubleFact).reduce((acc, cur) => acc.concat(cur), []);

        while (numbers.length > 0) {
            numbers = numbers.filter(cur => cur % 5 === 0);
            zeroes += numbers.length;
            numbers = numbers.map(cur => cur / 5);
        }
    }


    return zeroes;

};

function factorialArray(num){
    let array = [];

    for(let i = 1; i <= num; i++){
        array.push(i);
    }

    return array;
}

function doubleFactorialArray(num){

    let array = [];

    if(num % 2 === 0){
        for(let i = 2; i <= num; i=i+2){
            array.push(i);
        }
    } else{
        for(let i = 1; i <= num; i=i+2){
            array.push(i);
        }
    }

    return array;
}

