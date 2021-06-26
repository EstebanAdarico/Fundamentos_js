const signo = prompt(`
¿Cuál es tu signo?`)
if(signo === Number){
   signo = String(signo)
}
switch (signo) {
   case 'acuario':
   case '1' :
      console.log('eres de la fecha de tal dasdasd')
      break;
   case 'aries':
      console.log('eres de aries de tal blablablabla...')
      break;
   //si dinguna condición  se cumple entrará al default
   default:
      console.log(' no es valido')
      break;
}