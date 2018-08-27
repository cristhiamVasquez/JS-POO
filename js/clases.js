/*============================================
CLASES
las clases, son funciones constructoras y siempre se inicializan con Mayuscula
ejemplo: new String()
==============================================*/
/*============================================
CLASES PRIMITIVAS
==============================================*/
//clase string, number, boolean, etc...
var string = new String("esto es un string");
console.log(`string ${string}`);

//_____
var number = new Number(12);
console.log(`number ${number}`);

/*============================================
CLASES COMPUESTAS
==============================================*/
//clase array
var array = new Array("rojo", "amarillo", "verde");
console.log(`array: ${array}`);

//clase object
var object = new Object({
    nombre: "Pedro",
    apellido: "Rojas",
    edad: 15
});
console.log(`object: ${object}`);


/*============================================
CLASES CREADAS POR EL PROGRAMADOR
==============================================*/
//Funcion prototipo
function Persona() {

    //propiedades globales
    this.nombre;
    this.edad;
};

var yo = new Persona();
yo.nombre = "Cristhiam";
yo.edad = "27 años";
console.log("yo: ", yo);
//console.log(`yo: ${yo}`);

//---------------------------------
function Animales(nombre, raza) {

    this.nombre = nombre;
    this.raza = raza;

};

var mascota = new Animales("perro", "pitbul");
console.log("Mascota: ", mascota);