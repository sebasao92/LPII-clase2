//Operador ternario ?:
function cualquiera(cualquierValor) {
    return (cualquierValor > 0) ? 10 : 20; 
}

//console.log(cualquiera(30));

//Encadenamiento opcional ?
let persona = {
    nombre: "Sebastian",
    apellido: "Alarcon",
    hijos: {}
}

//console.log(persona?.hijos?.numeroHijos);


// ?? Operador nullish
//Retorna "Valor por defecto" si la propiedad está nula o undefined
//console.log(persona.hijos ?? "Valor por defecto");

// === y ==
//=== valida valor y tipo.
//== valida únicamente el valor.
console.log(5 == '5');
console.log(5 === '5');
