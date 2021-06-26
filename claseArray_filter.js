//1..accediendo a los atributos de cada uno de los elementos 
//haciendo iterar el array con un loop
//2..filtrando arrays con la funcion filter()

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
// arrow function que retorna si la personaes mide mas de 1.71
const filPersALtas = persona => persona.height >= 1.71;

//array que jala cada objeto
const personas =[pamela,esteban,juan];
const personasAltas = personas.filter(filPersALtas)

//loop que recorre cada elemento array hasta que su longitud sea igual al array 
//imprime cada objeto con la misma plantilla
for(var i = 0 ; i < personas.length ; i++){
   var personass = personas[i]
   console.log(`${personass.namee} mide ${personass.height}`);
};
console.log(personasAltas);