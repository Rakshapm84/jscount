let array =[1,6,2,5,8,3]

//Normal function
function demo(n)
{
return n*2;
}
array.map(demo)
     .filter(n => n%2==0)// array is applicable for fun also
     .forEach(n=> console.log(n))

// Function Expression

//let demo1=function demo(n)
//{
//return n*2;
//}
//array.map(demo1)
//     .filter(n => n%2==0)// array is applicable for fun also
//     .forEach(n=> console.log(n))


// Arrow function

//let demo1=n=> n*2;
//array.map(demo1)
//     .filter(n => n%2==0)// array is applicable for fun also
//     .forEach(n=> console.log(n))

//map() Method
array.map(n=> n*2)
     .filter(n => n%2==0)// array is applicable for fun also
     .forEach(n=> console.log(n))




