let arr = [
    {name:"A", age:14, gender:"M"},
    {name:"B", age:24, gender:"F"},
    {name:"C", age:34, gender:"M"},
    {name:"D", age:44, gender:"F"},
    {name:"E", age:54, gender:"F"},
    {name:"F", age:64, gender:"M"},
    {name:"G", age:74, gender:"F"},
    {name:"H", age:84, gender:"M"},
]

let getMaleAges = arr.filter((n)=> {
    return n.gender == 'M'
}).map((m)=>m.age);

console.log(getMaleAges); // returns [ 14, 34, 64, 84 ]