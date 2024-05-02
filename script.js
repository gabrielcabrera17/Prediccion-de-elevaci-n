//1
console.log(hello);                                   
var hello = 'world';                                 
// var hello -> hello es una declaración global y se eleva
//console.log(hello) -> se registra como indefinido
// hello = 'world' -> la asignación se mantiene en su lugar original

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//var needle -> needle es una declaración global y se eleva
// function test(){ -> test tambien se eleva
//var needle  -> needle es una declaración local en la función y se eleva
//needle = 'magnet' -> se le asigna un valor a needle manteniendo su lugar
//console.log(needle) -> se registra needle
//}
// needle = haystack -> mantiene su lugar original
//test(); -> se ejecuta test y registra magnet

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//var brendan -> brendan es una declaración global y se eleva
//function print(){ -> print tambien se eleva
//brendan = 'only okay'; -> la asignación se mantiene en su lugar origianl
//console.log(brendan); -> se registra como brendan
//}
//brendan = 'super cool' -> la asignación se mantiene en su lugar original
//console.log(brendan); -> se registral super cool

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food; -> food es una declaración global y se eleva
//function eat(){  -> eat() tambien se eleva
// var food -> food es una declaración local en la función y se eleva
// food = 'half-chicken' -> se le asigna un valor a food en su lugar original
//console.log(food) -> se registra el primer food
// foo = 'gone' > se le asigna un valor al otro food en su lugar original
//}
// food = 'chicken'; -> se le asigna un valor a food global en su lugar original
//console.log(food) ->se registra chicken
// eat(); -> se ejecuta la función eat

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//var mean -> mean es una declaración global y se eleva
//mean() -> se eleva la función pero dara error ya que mean no es una función
// mean = function() {
// var food;
// food = chicken;
// console.log(food);
// food = fish
// console.log(food);
//}
//console.log(food); error 
//console.log(food); error

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre -> genre es una declaración global y se eleva

// function rewind(){ -> se eleva la funcion rewind
// var genre -> se eleva la declarion local genre
// genre = rock; -> se asigna un valor a la variable
// console.log(genre) -> se registra la variable 
//var genre = "r&b";  -> se asigna otro valor a la variable
//console.log(genre); -> registra la variable
//}
// console.log(genre) -> se define como indefinido
// genre = disco -> se le asigna un valor y se mantiene en su lugar original
// rewind(); ->se ejecuta la función y registra rock y r&b
// console.log(genre); -> de registra disco 

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo -> genre es una declaración global y se eleva
// function learn(){ -> la función learn tambien se eleva
// var dojo -> es una declaración local y se eleva
// dojo = seattle -> se le asigna un valor
// console.log(dojo) -> se registra seattle
// dojo = burbank -> se le asigna otro valor a la variable dojo
// console.log(dojo) -> se registra burbank
//}
// dojo = san jose -> se le asigna un valor a la declaración global y se le asigna un valor manteniendose en su lugar origianl
// console.log(dojo) -> se registra un valor san jose
//learn(); // registra seattle y burbank
// console.log(dojo); -> se registra san jose

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// function makeDojo(name, students){ se eleva la función 
// const dojo = {}; -> se declara un objeto cosntante local enla función
// dojo.name = name; -> se asigna un valor name al objeto dojo
// dojo.students = students; -> se asigna un valor studens al objeto dojo
// if(dojo.students > 50){ ->si aplica una doncicional
// dojo.hiring = true; -> se le asigna true a dojo hiring
//}
// else if((dojo.students <= 0)){
// dojo = "closed for now"; -> intenta reasignar una constante por ende imprimira error
//}
// return dojo -> retorna dojo al final
//}
//console.log(makeDojo("Chicago", 65)); -> registra un objeto dojo
//console.log(makeDojo("Berkeley", 0)); -> registra un error al intentar modificar una constante