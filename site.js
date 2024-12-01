aleatorio= Math.floor(Math.random()*10)+1
tentativas= 3

function verificar(){
  numero= parseInt(document.getElementById("numero").value) //qualquer valor que você for pegar em uma caixinha de texto é assim (parseInt- serve para converter o texto em numero)
  resultado=document.getElementById("resultado")

  if(numero == aleatorio){
    document.getElementById("imagem").src = "verde.svg"
    resultado.textContent="Parabéns, você acertou!"
    resultado.style.color= "green"
  }
  else{
    document.getElementById("imagem").src = "vermelho.svg"
    tentativas = tentativas - 1
    resultado.textContent = "Você errou!"
    resultado.style.color= "red"
  }

}