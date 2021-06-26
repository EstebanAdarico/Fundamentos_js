//1...persona que A LO LARGO DE UN AÑO o en este caso una seman para probar AUMENTARÁ O DESMINUIRá de peso terminando el año
//2.. el nutricionista le pide que baje 3  kilos , sin saber cuantos dias tomará bajar de peso

var personaje = {
   namee:'esteban',
   age: 27,
   weigh : 80
}
//definir el objetivo de que  la persona tiene que llegar de 3 kilos o adelgasar 
const meta = personaje.weigh - 3 

//mensaje de presentacion 
console.log(`Hola , me llamo ${personaje.namee} tengo ${personaje.age} y peso ${personaje.weigh} kg`)

//Los 2 arrow function siguientes son para que aumente o diminuya en 200 gramos al personaje asignado
//siempre en cuando se active la condicion de porcentaje menor al 3% 
const aumentarDepeso = persona => persona.weigh += 0.2 //es un numero constante asi que deberia ir con una variable con mayuculas
const adelgasar = persona => persona.weigh -= 0.2//el numero es una constante por que es un valor estandar que no se modificará así que puede ir en una varible 

//tres variables en una sola linea como :
//el generador de randon sin variable
//crear la funcion que reciba el random y hacerlo en arrow function
const comeMucho = ()=> Math.random() < 0.3;
const gym = () => Math.random() < 0.4;
// loop que mientras el peso del personaje sea mayor a meta
var dias = 0;
//tienes que mandar una sentencia de verdad para que itere en este caso hasta que el peso del personaje sea menor a  3 kilos
while  (personaje.weigh > meta) {
   if (comeMucho()) {
      aumentarDepeso(personaje)
   }
   if (gym()){
      adelgasar(personaje)
   }dias += 1
}

console.log(`pasó ${dias} y ahora estoy pesando: ${personaje.weigh.toFixed()} kg. con mis ${personaje.age} años`)
//recomendar si al final de la semana el personaje aumenta o baja de peso recomendar dejar de comer mucho o comer mas sano 