class Borde {
    constructor(x, y, ancho, altura) {
        let opciones = {isStatic: true };
        this.body = Bodies.rectangle(x, y, ancho, altura, opciones);
        this.ancho = ancho;
        this.altura = altura;
        World.add(mundo, this.body);
    }
    show(){
        push();
        rect(this.body.position.x, this.body.position.y, this.ancho, this.altura);
        pop();
    }
}