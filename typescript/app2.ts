type stringNum = number;
type fun = (num: number) => void;


const add = (num1: stringNum, num2: stringNum, ff: fun ) => {
    const result = num1 + num2;
    ff(result)
}


add(20 , 100, (result) => console.log(result) );

