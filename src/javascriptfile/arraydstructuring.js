//let array=[1,4,8,9,6,4,6]
let array=["Raksha","Vandana gowda","Deepika","Chetana","Priya","Bhoomi","Anki"]
let [a,...b]=array
console.log("a is "+a,"b is "+b)

//covert this to array dstructuring (.split(''))
let a1="Banglore is silicon city".split(' ')
console.log(a1)
let [c,...d]=a1
console.log(c,d)