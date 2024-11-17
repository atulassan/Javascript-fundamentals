class Person {
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }
    display() {
        console.log(`hi I am ${this.name}, age: ${this.age}`)
    }
}

const Person1 = new Person('Steve', '42');

console.log(Person1.display()); // result 'hi I am Steve age: 42


