//asignando a las URL de las API una variable(constante)
const API_URL = `https://swapi.dev/api/`
const People_URL=`people/:id`

//Asignando parametros para $.get()
const lukeURL = `${API_URL}${People_URL.replace(`:id`,1)}`
const opts = {crossDomain:true}

function onpeopleresponse(luke){
    console.log(`hola , yo soy ${luke.name}`)
}
$.get(lukeURL,opts,onpeopleresponse)
