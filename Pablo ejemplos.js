function crearContador() {
    let numero = 0;
    return function() {
        console.log(++numero);
    }
}

let contar = crearContador();

contar();

//--------------------------------------------------

function Auto() {
    let velocidad = 0;
    return {
        acelerar: function() {
            if (velocidad < 40) {
                velocidad += 10;
                console.log("Has acelerado a " + velocidad + " km/h");
            } else {
                console.log("No puedes acelerar a mas de " + velocidad + " km/h");
            }
        },
        desacelerar: function() {
            velocidad -= 10;
            console.log("Has desacelerado a " + velocidad + " km/h");
        },
        obtenerVelocidad: function() {
            console.log(velocidad);
        }
    }
}

let ford = new Auto();
let toyota = new Auto();
let peugeot = new Auto();


//--------------------------------------------------


function Hotel() {
    var habitacionesOcupadas = 0;
    var cantidadHabitaciones = 10;
    return {
        checkin: function(personas) {
            if (habitacionesOcupadas < cantidadHabitaciones) {
                if (habitacionesOcupadas + personas < cantidadHabitaciones) {
                    habitacionesOcupadas += personas;
                } else {
                    habitacionesOcupadas = cantidadHabitaciones;
                }
            }
        },
        checkout: function(personas) {
            if (habitacionesOcupadas > 0) {
                if (habitacionesOcupadas - personas > 0) {
                    habitacionesOcupadas -= personas;
                } else {
                    habitacionesOcupadas = 0;
                }
            }
        },
        hayHabitacionesLibres: function() {
            return habitacionesOcupadas < cantidadHabitaciones;
        }
    };
}

let hotel = new Hotel();

//--------------------------------------------------

function Orden(items) {
    let obtenerTotal = function(items) {
        let sumaTotal = 0;
        for (let i = 0; i < items.length; i++) {
            sumaTotal += items[i].precio;
        }
        return sumaTotal;
    }

    let agregarImpuestoATotal = function(precio) {
        return precio + (precio * 0.2);
    }

    return {
        calcularTotalFinal: function() {
            return agregarImpuestoATotal(obtenerTotal(items)).toFixed(2)
        }
    }
}

const productos = [
    { nombre: 'Juguete', precio: 14.99 },
    { nombre: 'Golosina', precio: 7.99 }
]

const orden = new Orden(productos);
console.log(orden.obtenerTotal()) // undefined
console.log(orden.agregarImpuestoATotal()) // undefined
console.log(orden.calcularTotalFinal()) // 27.58