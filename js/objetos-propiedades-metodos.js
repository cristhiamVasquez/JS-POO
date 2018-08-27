/*============================================
OBJETOS: coleccion de propiedades y metodos
==============================================*/

var object = {
    //una propiedad es una asociacion entre un nombre y un valor
    nombre: "Juan",
    edad: 31,
    //el metodo es una funcion dentro de un objeto.
    descripcion: function() {
        console.log("Su nombre es: " + object.nombre + " y tiene " + object.edad + " años.");
    },
    saludo: function(saludo) {
        console.log(saludo + " " + object.nombre);
    }
};

console.log("nombre: " + object.nombre);
console.log("edad: " + object.edad);
object.descripcion();
object.saludo("Hola Don");

/*============================================
OBJETOS PRIMITIVOS
==============================================*/