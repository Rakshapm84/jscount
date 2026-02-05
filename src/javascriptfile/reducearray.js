let array =[1,6,2,5,8,3]

//Normal function
//function demo(a,b)
//{
//return a+B ;
//}
//array.reduce(a,b)
//     .map(demo)
//     .filter(n => n%2==0)// array is applicable for fun also
//     .forEach(n=> console.log(n))

// Function Expression

//let demo1=function demo(a,b)
//{
//return a+b;
//}
//array.reduce(a,b)
//     .map(demo1)
//     .filter(n => n%2==0)// array is applicable for fun also
//     .forEach(n=> console.log(n))


// Arrow function
//
//let demo1=(a,b)=> a+b;
//array.reduce(a,b)
//array.map(demo1)
//     .filter(n => n%2==0)// array is applicable for fun also
//     .forEach(n=> console.log(n))

//reduce() Method // instide of foreach we combine and do the task then it will give single value
let r1=array.filter(n => n%2==0).map(n=> n*2).reduce((a,b)=> a+b)
console.log(r1)// it will storing seperate variable it will removing foreach loop




