//persona que A LO LARGO DE UN AÑO o en este caso una seman para probar AUMENTARÁ O DESMINUIRA

var personaje = {
   namee:'esteban',
   age: 27,
   weigh : 80
}
console.log(`Hola , me llamo ${personaje.namee} tengo ${personaje.age} y peso ${personaje.weigh} kg`)
//Las 2 funciones siguientes son para que aumente o diminuya en 200 gramos al personaje asignado
//siempre en cuando se active la condicion de mayor a 5 
function aumentarDepeso ( persona) {
   return persona.weigh += 0.2 //es un numero constante asi que deberia ir con una variable con mayuculas
}
function adelgasar (persona){
   return persona.weigh -= 0.2//el numero es una constante por que es un valor estandar que no se modificará así que puede ir en una varible 
}
//Loop que itera dos opciones con el mismo generador de aleatoriedad 
//dentro del mismo loop
for (var i= 0 ; i <= 365 ; i++ ){
   var random = Math.floor((Math.random()*10)+1)
   //console.log(random)comprobar random
   if (random >= 5){
      aumentarDepeso(personaje)
      // console.log(`${personaje.namee} aumento de peso en ${personaje.weigh} kg`)
   }
   else if (random <= 4){
      adelgasar(personaje)
      // console.log(`${personaje.namee} disminuyó de peso en ${personaje.weigh}kg`)
   }

}

console.log(`Pasó una semana y ahora estoy pesando :${personaje.weigh.toFixed()} kg. con mis${personaje.age} años`)
//recomendar si al final de la semana el personaje aumenta o baja de peso recomendar dejar de comer mucho o comer mas sano 
if ( 89 > personaje.weigh > 80){
   console.log(`${personaje.namee} te recomendamos que comas nas sano  `)
}
else if (personaje.weigh > 90){
   console.log(`${personaje.namee} te recomendamos que vayas al gyn `)
} 
else if(personaje.weigh < 80){
   console.log(`${personaje.weigh} te recomendamos que comas a tus horas`)
}