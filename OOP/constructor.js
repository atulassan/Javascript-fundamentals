// https://www.scaler.com/topics/course/javascript-beginners/video/278/

/* constructor is a template helps to create a multiple object at a time */

function createCar(_name, _company, _color){
    this.name = _name
    this.company = _company
    this.color = _color
    this.drive = () => {
        console.log(`i am driving ${this.name} ${this.company} ${this.color} of this color`)
    }
}

const car1 = new createCar('Hiryder', 'Toyota', 'Blue');

car1.drive(); //result i am driving Hiryder Toyota Blue of this color
