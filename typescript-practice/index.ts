//String
let gtlm:string = 'testing';
//Number
let gtstr:number= 2;
//Boolean
let getBl:boolean = true;

//Arrays
//single Array
let getArr1:number[] = [1,2,3,4,5];
//2 dimentional Array
let getArr2:number[][]= [[1,2,3], [4,5,6],[7,8,9]];

//Tuples
let getTpls:[string, number, boolean] =  ['string', 2, false];

//Never
function abcd():never { //funciton prints infinite console
    while(true){
        console.log("infinite run");
    }
}
//abcd();

//Void -> for function does not have any return values
function ab():void {
    console.log('Hey')
}

//Enums
enum Direction {
    top='Top',
    bottom='Bottom',
    left = 'left',
    right='right'
}

//Type Inference -> Typescript automatically detected the type of the variable if you assign any values to variable
let a1='string';
let a2=12
let a3=false;

//Union Intersaction Types
let s1: string | number | null | undefined | boolean = 'accepted string';
s1 = 12;

function s3(ac:number|string) {
    console.log(ac)
}

//Intersection types(merge)
type classmates = {
    section:string
}
type students = {
    name:string
}

type classmatesInstudents = classmates & students

let a:classmatesInstudents = {
    section:'development',
    name:'Athavulah'
}

//Type Aliases
type Person = {
    name:string,
    age:number,
    married: boolean
}
let user:Person;
user = {
    name:'Athavllah',
    age: 36,
    married:true
}

type Mixed = number|string;
let n1:Mixed = 'string or number supports'

//Interface

interface Cnm {
    name:string,
    age:number
}

let cc:Cnm = {
    name:'ath',
    age:42
}

//Classes
