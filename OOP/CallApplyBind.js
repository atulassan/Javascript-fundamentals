/*Call Function */

function printDetails(position) {
    console.log(this.firstName, this.age, this.address, position);
}

let person1 = {
    personInfo: function(position) {
        console.log(this.firstName, this.age, this.address, position);
    }
}


let person = {
    firstName: 'Athavullah',
    age: '45',
    address:'7/3c, new street Ist'
}

printDetails.call(person, 'Senior Software Engineer');
person1.personInfo.call(person, 'Technical Lead');

/* Apply the same */

function printDetails(position) {
    console.log(this.firstName, this.age, this.address, position);
}

printDetails.apply(person, ['Senior Software Engineer']);
person1.personInfo.apply(person, ['Technical Lead']);


/* Bind same */



