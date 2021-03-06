// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
 /* class Usuario{

    constructor(opciones){
      this.usuario = opciones.username;
      this.nombre = opciones.name;
      this.email =opciones.email;
      this.password = opciones.password;
    }

    saludar(){
      return "Hola, mi nombre es " + this.nombre;
    }
  }*/
  function Usuario(opciones){
      this.username = opciones.username;
      this.name = opciones.name;
      this.email =opciones.email;
      this.password = opciones.password;
  }

  Usuario.prototype.saludar = function(){
    return "Hola, mi nombre es " + this.nombre;
  }

  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
    Constructor.prototype.sayHi = function(){
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método a la string del Constructor del `prototype` que devuelva una copia invertida de la cadena
  // El método debe llamarse "reverse"
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function(){
    var strArray = this.split("");
    strArray.reverse();
    return strArray.join("");
  }
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida
};
