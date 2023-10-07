// for
/*for(let i = 0; i<10; i++) {
    console.log(i);
}*/

let variable = 0;
//console.log(variable++); //0
//console.log(++variable); //2

//while
//Pregunto desde un inicio
/*variable = 0;
while(variable <= 2) {
    variable++;
    console.log("Estoy en el while");
}*/

//do/while
//Hago y después pergunto
/*do {
    console.log("Estoy en el do/while")
} while(variable == 0);*/

//for of
//Se utiliza para recorrer arreglos
let arreglo = ["Hola", "Chao", "Mundo", "Cualquiera"];

/*for(elemento of arreglo) {
    console.log(elemento);
}*/

//for in
//Se utiliza para recorrer objetos
let persona = {
    nombre: "Sebastian",
    apellido: "Alarcón",
    edad: 15
}

for(key in persona) {
    console.log(key + "->" + persona[key]);
}