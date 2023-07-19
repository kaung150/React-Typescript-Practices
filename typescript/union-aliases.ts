type Combinable = number  | string;
type ConversionDescriptor = "as-number" | "as-text"

const  combine = (input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) => {
    let result: number | string;
    if(typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number"){
        result = +input1 + +input2;
    }else {
        result = input1.toString() + input2.toString()
    }

    // if(resultConversion === "as-number"){
    //     return +result;
    // }else {
    //     return result.toString();
    // }
    
    return result
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine(30, 26, "as-number");
console.log(combinedStringAges);

const combineNames = combine("kaung", "min", "as-text")
console.log(combineNames);