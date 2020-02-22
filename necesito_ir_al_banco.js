class Persona {
    constructor(nombre, billetera) {
        this.nombre = nombre;
        this.billetera = billetera;
        this.usuario = {
            clave: 1212,
            valor: 'xxxx'
        }
    }
    enriquecer(monto) {
        this.billetera += monto;
    }
}

let Juan = new Persona('Juan', 500);

class Banco {
    usuarios = {
        'Jorge': 5000
    };
}


class persona {
    constructor (nombre, billetera) {
        this.nombre = nombre;
        this.billetera = billetera;
    }
    enriquecer(monto) {
        this.billetera =+ monto;
    }
 }
 class banco {
    constructor () {
        this.usuarios = {
        };
    }
    consultarSaldo(nombre){
        this.usuarios[nombre];
        return this.usuarios[nombre];
    }
    extraerSaldo(nombre,saldo){
        this.usuarios[nombre]-=saldo;
    }
    agregarCliente(persona){
        this.usuarios[persona.nombre] = persona.billetera;
    }
    esCliente(nombre){
        if (this.usuarios[nombre] === undefined) {
            return false;
        } else {
            return true;
        }
    }
 }
 class cajero {
    constructor (banco, saldo) {
        this.banco = banco;
        this.saldo = saldo;
    }
    consultarSaldoCajero (monto) {
        if (this.saldo >= monto ) {
            return true;
        } else {
            return false;
        }
    }
    consultarSaldoPersona (nombre, monto) {
        if (this.banco.usuarios[nombre] >= monto ) {
            return true;
        } else {
            return false;
        }
    }
    descontarSaldoCajero (monto) {
        this.saldo =- monto;
    }
    descontarSaldoPersona (persona, monto){
        this.banco.usuario[nombre]
    }
 }
 
 