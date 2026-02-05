//without return type
function demo()
{
console.log("demo1")
}
let result =demo()
console.log(result)

// with returntype
//function demo()
//{
//return "demo1"
//}
//let result =demo()
//console.log(result)


//with parameter

function  demo(b,c=3)//parameter
{
console.log(`a is value ${b},${c}` )

}
b=12;//argb
c=10;
demo (b,c)