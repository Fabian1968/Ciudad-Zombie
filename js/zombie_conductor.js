/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */


class ZombieConductor extends Enemigo {
    constructor(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
        super(sprite, x, y, ancho, alto, velocidad, rangoMov);
        this.direccion = direccion;
    }
    mover() {

            if (this.direccion == "h") {
                this.x -= this.velocidad;
                //Se invierte el sentido al llegar a ambos extremos de la vía.
                if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
                    this.velocidad *= -1;
                }
            } else {
                this.y += this.velocidad;
                //Se invierte el sentido al llegar a ambos extremos de la vía.
                if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
                    this.velocidad *= -1;
                }
            }
        }
        //Se sobreescribe el método atacar de Enemigo para que el zombie conductor sea letal.
    atacar(jugador) {
        jugador.perderVidas(5);
    }
}