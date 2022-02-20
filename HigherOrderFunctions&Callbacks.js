var doMathSoIdontHaveTo = (n, func) => {
    return func(n);
}
// console.log(doMathSoIdontHaveTo(2, (n)=>n*n)); //multiply
// console.log(doMathSoIdontHaveTo(2, (n)=>++n)); //add

const funclog = (...args) => console.log(args);
const func2 = (a,b,...args) => funclog(...args);
func2(1,2,3,4,5,6,7);
