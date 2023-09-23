//Tipos de dato primitos de JS
//Number (Integers and Floats) 10 10.5 2000
let numero = 10;
let numeroDePuertas = 4;
let numerPi = 3.14;
let valorMatricula = 2_000_000;
let numeroObjeto = new Number(10.25);

//String (cadenas de caracteres) "hola"  'chao'
let saludo = "hola";
let despido = 'chao';
let stringComoObjeto = new String("hola");

//Boolean -> true or false
let esCierto = false;
let esFeo = true;
let booleanComoObjeto = new Boolean(true);

//Object -> { } -> new Object()
let persona = {nombre: "Sebastian", apellido: "Alarcon"};
let empleado = {id: 1, nombre: "Fulano"};

//Array -> []
let arregloObjetos = [persona, empleado];

//BigInt (valores numericos MUY grandes) 100n -> new BigInt(10)
let numeroGrande = 100n;
let numeroGrandeComoObjeto = new BigInt(100);

//undefined -> (valor por defecto que tienen las variables si no son asignadas)
let variableUndefined;
let variableUndefined2 = undefined;

//null -> (se asigna cuando quiero especificar que una varible está vacía)
let variableNula = null;

//Symbol -> (se utiliza para crear valores únicos)
let simbolo = new Symbol("simbolo uno");