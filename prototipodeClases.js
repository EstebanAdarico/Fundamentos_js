//una CLASE en javascript en realidad es un prototipo
//por que asimila a una clase pero no lo es 
function persona(name , lastname,heigt){
   //es la palabra reservada para mandar a llamar al nuevo elemento que se crea en ese objeto
   this.name = name
   this.lastname = lastname
   this.heigt = heigt
   
   
} 
persona.prototype.altura = function(){
   console.log(`My name is ${this.name} ${this.lastname} and weight ${this.heigt}`);
}
persona.prototype.evaluador = function(){
   if (this.heigt > 1.71){
      console.log(`${this.name} tiene la altura de ${this.heigt}`)
}}
// la palabra new hace que se cree un nuevo objeto y a ese objeto se le va asignar como prototipo , el trototipo que le indiquemos después luego se va a ejecutar este constructo que lleva como nombre persona implicitamente lo que se va ha hacer es retornar este objeto que se va a construir
const testdepersona = new persona('esteban','puma',1.70);
const testdepersona2 = new persona('pamela','chahuara',1.73);

testdepersona2.evaluador()