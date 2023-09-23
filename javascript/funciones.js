//Funciones
function sumar(numeroUno, numeroDos) { //normalmente los nombres de las funciones deben empezar por un verbo
    return numeroUno + numeroDos;
}

let sumarVersionDos = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}; // a través de función anonima

let sumarVersionTres = (numeroUno, numeroDos) => {
    console.log("Soy el arrow function");
    return numeroUno + numeroDos;
};//Arrow function / también es función anonima

let funcionUno = function (numeroUno, numeroDos, funcionDos) {
    console.log("Estoy dentro de la función Uno")
    return funcionDos(numeroUno, numeroDos);
}; //recibe una función como parámetro de entrada

let funcionTres = (numeroUno, numeroDos) => {
    console.log("Voy a restar");
    return numeroUno - numeroDos;
};

console.log(sumar(5, 8));
console.log(sumar("hola", " mundo"));
console.log(sumarVersionDos(10, 20));
console.log(sumarVersionTres(40, 56.8));
console.log(funcionUno(10, 40, sumarVersionTres));
console.log(funcionUno(20, 30, funcionTres));