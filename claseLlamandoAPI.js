//asignando a las URL de las API una variable(constante)
const API_URL = `https://swapi.dev/api/`
const People_URL=`people/:id`

//Asignando parametros para $.get()

const opts = {crossDomain:true}

//funcion que pedira en name de la API
function onpeopleresponse(personaje){
    console.log(`hola , yo soy ${personaje.name}`)
}
function obtainPerson (id ){
    const url = `${API_URL}${People_URL.replace(`:id`,id)}`
    $.get(url,opts,onpeopleresponse)
}

obtainPerson(1)
obtainPerson(2)
obtainPerson(3)