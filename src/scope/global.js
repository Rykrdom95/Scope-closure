// variables
var a; // declarando
var b = b; // delcaramos y asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion



// global scope
var fruit='Apple';
console.log(fruit);
function bestFruit(){
    console.log(fruit);
}
bestFruit();

function countries(){
    country='Colombia';console.log(country);
}
countries();
console.log(country);