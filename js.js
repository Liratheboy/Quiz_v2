const pergunta1 = document.getElementById('container_p1');
const pergunta2 = document.getElementById('container_p2');

let verificar;

document.addEventListener("click", function(e){
   verificar = e.target.className;
});


function mudarPergunta1(){  

  console.log(verificar);

  let altcerta = document.getElementsByClassName('alt4');

  if(verificar.className == altcerta.className)
    alert('alternatica correta!');
  else
    alert('alternativa errada!');

}