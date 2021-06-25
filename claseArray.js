//accediendo a los atributos de cada uno de los elementos 
//haciendo iterar el array con un loop 

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
const personas =[pamela,esteban,juan]
for(var i = 0 ; i < personas.length ; i++){
   var personass = personas[i]
   console.log(`${personass.namee} mide ${personass.height}`);
};
