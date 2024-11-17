// const myObj = {};

// console.log(myObj);

// const Person = {
//     name: "Adam",
//     age: 42 
// }


function Person(_first, _last, _age, _eyecolor) {
    this.firstName = _first;
    this.lastName = _last;
    this.age = _age;
    this.eyeColor = _eyecolor;
  }
  
  Person.prototype.display = function() {
    console.log(this.firstName, this.lastName, this.age, this.eyeColor);
}

  let myFather = new Person("John", "Doe", 50, "blue");
  let myMother = new Person("Sally", "Rally", 48, "green");

  console.log(myFather.display());
  console.log(myMother);
