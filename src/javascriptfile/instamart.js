let product=[
{
id:1,name:"cake",price:45
},
{
id:2,name:"ice cream",price:120
},
{
id:3,name:"bread",price:200
},
{
id:4,name:"apple",price:150
}
]
let sum=0;
for(let i=0;i<product.length;i++)
{
sum=sum+product[i].price;
avg=sum/product.length;
}

console.log ("sum of products"  +sum)
console.log("Avg of products"  +avg)

