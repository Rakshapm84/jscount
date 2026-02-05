let person=
{
name:"Raksha",
age:23,
getConfig:function()
{
console.log(this.age)// it will acess same object
}
}
let person1=
{
name:"Ajay",
age:24,
getConfig:function()
{
console.log(this.age)}// it will acess same object
}
function one (person,person2)
{
if(person.age > person1.age)
{
console.log(person)
}
else {
console.log(person1)
}
}
one(person,person1)

