//1..accediendo a los atributos de cada uno de los elementos 
//haciendo iterar el array con un loop
//2..el modoto map() siempre nos devuel un nuevo array y no lo modifica el array original pero si modificamos cada uno de los elementos esa modificacion va perdurar en los elementos del array original
//

const pamela = {
   namee : 'pamela',
   lastname : 'chahuara',
   height : 1.60 
};
const esteban = {
   namee : 'esteban',
   lastname :'puma',
   height : 1.73
};
const juan = {
   namee: 'juan',
   lastname : 'ventoza',
   height : 1.70
};
//array que jala cada objeto
const personas =[pamela,esteban,juan];

// arrow function que retorna si la personaes mide mas de 1.71
const filtPersALtas = persona => persona.height >= 1.71;

// const alturaACm = persona => {
//    return {
//    ...persona,
//    height:persona.height * 100
//    }  
// };



const alturaEnCm_persona = personas.map(function (persona){
   return { 
   ...persona,
   height: persona.height * 100
   }   
});

//recorreremos cada array , convirtiendo a centimetros la altura de cada personaje
for(var i = 0;i < personas.length ; i++){
   console.log(`${personas[i].namee} su medida en centimetros es: ${alturaEnCm_persona[i].height} gramos y en kilogramos es ${personas[i].height} kg. `)

}

// console.log(alturaEnCm_persona)
// console.log(personas)