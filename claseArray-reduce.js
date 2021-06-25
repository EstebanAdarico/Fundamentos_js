//1..dar un total de los libros que tiene 
const pamela = {
   namee : 'pamela',
   lastname : 'chahuara',
   height : 1.60 ,
   numOfBook : 30
};
const esteban = {
   namee : 'esteban',
   lastname :'puma',
   height : 1.73 ,
   numOfBook : 40
};
const juan = {
   namee: 'juan',
   lastname : 'ventoza',
   height : 1.70,
   numOfBook : 45
};
//array que jala cada objeto
const personas =[pamela,esteban,juan];

// arrow function que retorna si la personaes mide mas de 1.71
const filtPersALtas = persona => persona.height >= 1.71;
//const lanza_numOfBook = persona => persona.numOfBook

//valido hacer un mientras no querramos reutilizar el codigo..
// var reducer = 0;

// for(var i = 0 ; i < personas.length ; i++){
//    reducer = reducer + personas[i].numOfBook

// }
// console.log(reducer);


var inic = 0
//######## utilisaremos el metodo reduce
// const sumOfBooks = (total,persona)=>{
//    return total+persona.numOfBook;
// }
const reducerr = personas.reduce(function (total , persona)
{
   return total + persona.numOfBook

}
,inic);

console.log(reducerr); 