const add = (n1: number, n2: number): number => {
    return n1 + n2
}

const printResult = (num: number): undefined => {
    console.log("Result: " + num)
    return ;
}

printResult(add(5, 12))

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8))

let someValue: undefined;
