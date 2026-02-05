let array=[1,4,2,3,5,6,7]
//for of loop
for(let a of array )
{
console.log(a)
}

//for in loop
for(let a in array )
{
console.log(a)
}

// modify in array it modify based on index

array[2]=30
console.log(array)

//we can insert multiple datatypes along with object


//one objects
let array1=[3,"Raksha",{name:"ajay",age:18},function(){console.log("Hello Raksha")}]
console.log(array1[2])

//multiple objects
let array2=[
{s1:"Anki",age:22,branch:{b1:"ECE",b2:"CE",b3:"IS"}},
{s2:"Raksha",age:22,branch:"CSE"},
{s3:"Bhoomi",age:22,branch:"MCE"},
]
console.log(array2[0].branch.)