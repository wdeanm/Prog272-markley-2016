// W. Dean Markley
divider("person");
var person = {};
person.firstName = 'Dean';
person.lastName = 'Markley';
console.log(person.firstName);
console.log(person.lastName);
fullName();
divider("calculator");
var calculator = {
    'operator01': -1,
    'operator02': -1,
    'add': 'operator01' + 'operator02',
    'subtract': 'operator01' - 'operator02'
};
calculator.operator01 = person.firstName.length;
calculator.operator02 = person.lastName.length;
console.log(calculator.operator01, calculator.operator02);
add();
subtract();
multiply();
//****************************************************************
//* FUNCTIONS 
//****************************************************************
function fullName() {
    console.log(person.firstName, person.lastName);
};

function add() {
    console.log(calculator.operator01 + calculator.operator02);
};

function subtract() {
    console.log(calculator.operator01 - calculator.operator02);
};

function multiply() {
    console.log(calculator.operator01 * calculator.operator02);
};

function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
};