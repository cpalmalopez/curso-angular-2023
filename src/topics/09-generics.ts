export function whatsMyType<T>(argument: T): T {
    return argument;
}

let myString = whatsMyType<string>('Hola mundo');
let myNumber = whatsMyType<number>(100);
let myArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(myString.split(" "));;
console.log(myNumber.toFixed());
console.log(myArray.join("-"));;