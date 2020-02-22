// El objeto jugador es un objeto literal que se encuentra incompleto.//
//Solo tiene asignadas algunas de sus propiedades y ningun metodo//
// Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
// y todo lo que haga falta para que cumpla con sus responsabilidades


class JugadorModelo {
    constructor(sprite, x, y, ancho, alto, velocidad, vidas) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.velocidad = velocidad;
        this.vidas = vidas;
    }
    mover(tecla) {

        if (tecla == 'izq') {
            this.sprite = 'imagenes/auto_rojo_izquierda.png',
                this.ancho = 30,
                this.alto = 15,
                this.x = this.x - 6;

        }
        if (tecla == 'der') {
            this.sprite = 'imagenes/auto_rojo_derecha.png',
                this.ancho = 30,
                this.alto = 15,
                this.x = this.x + 6;
        }
        if (tecla == 'arriba') {
            this.sprite = 'imagenes/auto_rojo_arriba.png',
                this.ancho = 15,
                this.alto = 30,
                this.y = this.y - 6;
        }
        if (tecla == 'abajo') {
            this.sprite = 'imagenes/auto_rojo_abajo.png',
                this.ancho = 15,
                this.alto = 30,
                this.y = this.y + 6;
        }

    }

    perderVidas(cantVidas) {
        this.vidas -= cantVidas;
    }
}

const Jugador = new JugadorModelo("imagenes/auto_rojo_abajo.png", 130, 30, 15, 30, 10, 5);