let price=[10000,25000,55000,48050,60000,75000]
let max= price.reduce((a,b)=>a>b ? a:b);
console.log(max)

let r= price.reduce((a,b)=>a+b)
console.log("Sum of price is :"+r)

