let person = {name: 'Athavullah', age:35, address: '7/3c new street Ist', map:{country:'india', city:'tiruvannamalai'}}

const {name,age, address:personDetails, map:{country, city: c}} = person;

console.log(name, age, personDetails, country, c) //Athavullah, 42, 7/3c new street Ist', india, tiruvannamalai

