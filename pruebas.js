var Jugador = function(nom, pos) {
    this.nombre = nom;
    this.posicion = pos;
    this.fatiga = 0;
    this.correr = function(segs) {

    }
    console.log(this);
};

var Arquero = function(nom) {
    Jugador.call(this, nom, "Arquero");
    this.atajar = function() {

    }
};

var Juan = new Arquero("Juan");

var Animal= function(nombre){
    this.nombre=nombre;
  };
   
  
  var Perro = function(nombre){
    //completar el constructor de Perro
   
    this.ladrar= function(){
      console.log("¡Guau Guau!");
    }
  }
  
  //implementar la herencia de Perro con Animal 
   
   
  var Gato = function(nombre){
     //completar el constructor de Gato
     this.maullar=function(){
       console.log("¡Miau Miau!");
     }
  }

  var pichichus = new Perro("Pichichus");
var michi = new Gato("Michi");
 
//Michi iviene a maullar
 michi.maullar()
console.log("Soy "+ michi.nombre );
 
//pichichus viene a ladrar
pichichus.ladrar() 
console.log("Soy "+ pichichus.nombre);
