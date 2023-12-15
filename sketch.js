const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var motor;
var mundo;
var pelota;

function setup() {
    createCanvas(400, 400);
    motor = Engine.create();
    mundo = motor.world;

    pelota_config = {
        restitution: 0.9,
        frictionAir: 0.01
    }

    pelota = Bodies.circle(190, 40, 20, pelota_config);
    World.add(mundo, pelota);
    ab = new Borde(200, 390, 400, 20);
    ar = new Borde(200, 10, 400, 20);
    de = new Borde(390, 200, 20, 400);
    iz = new Borde(10, 200, 20, 400);
    rectMode(CENTER);
    flecha=createImg("arriba.png");
    // flecha.mouseClicked(FA);
}

function draw() {
    background("black");
    Engine.update(motor);
    ellipse(pelota.position.x, pelota.position.y, 20);
    ab.show();
    ar.show();
    de.show();
    iz.show();

  if(mouseIsPressed){
        FD();
        FA();
    }
}

function preload(){

}
function FD(){
    Body.applyForce(pelota,{x:pelota.position.x,y:pelota.position.y},{x:0.001,y:0});
}
function FA(){
    Body.applyForce(pelota,{x:pelota.position.x,y:pelota.position.y},{x:0,y:-0.005});
}