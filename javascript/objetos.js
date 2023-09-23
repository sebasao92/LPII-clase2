let persona = {
    nombre: "Sebastian",
    id: 1234,
    apellido: "Alarcon",
    esProfesor: true,
    estudiantes: [
        {
            id: 1,
            nombre: "Fabian"    
        },
        {
            id:2,
            nombre: "Juan David"
        }
    ] 
}// JSON Javascript Object Notation

console.log(persona);
console.log(persona.estudiantes[0]);
console.log(persona.estudiantes[1]);
console.log(persona.apellido);
let personaAsString = JSON.stringify(persona);
console.log(personaAsString);
console.log(JSON.parse(personaAsString));