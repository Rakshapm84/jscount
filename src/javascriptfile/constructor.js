function Demo(name,age)
{
   this.name=name;
   this.age=age;
   this.java= function()
   {
   console.log("Constructor")
   }
}
   let obj1=new Demo("Ajay",18)
   let obj2=new Demo("Anu",22)
   console.log(obj1)
   console.log(obj2)
   obj1.java()