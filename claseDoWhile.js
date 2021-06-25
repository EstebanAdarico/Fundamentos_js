let contador = 0 ;
const llueve = () => Math.random() < 0.25;
//hacerlo una vez hasta que se vuelva a ejecutar
do {
   contador++
} while (!llueve);
if (contador <= 1){
   console.log(`fuí a ver si llueve ${contador} vez`)
}else{
   console.log(`fuí a ver si llueve ${contador} veces`)
}

