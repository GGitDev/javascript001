//Arrays e loops

var videoGames = ['PS4', 'XBox', 'PS3', '3DS']
//var ultimoItem = videoGames.pop();
// o .POP mostra no console e remove o ultimo item da array.

for(item = 0; item < videoGames.length; item++){
  console.log(videoGames[item])
  if(videoGames[item] === 'XBox')
  break 
  // esse break faz com que se o item for igual ao que está pedindo, o loop pare.
}

videoGames.forEach(function(item) {
  console.log(item)
  //o forEach é uma sintaxe mais simples para realizar o loop da array.
})



//Exercicio

//Crie uma array com os anos que o brasil ganhou a copa.
//1959, 1962, 1970, 1994, 2002.
var anos = [1959, 1962, 1970, 1994, 2002] 

//interaja com a array utilizando um loop, para mostrar no console a senguinte mensagem, `O Brasil ganhou a copa de ${ano}`.
for(i = 0; i < anos.length; i++){
  console.log(`O Brasil ganhou a copa de ${anos[i]}`)
}

//interaja com um loop nas frutas abaixo e pare ao chegar em pera.
var frutas = ['banana', 'maca', 'pera', 'uva', 'melancia']

for(i = 0; i < frutas.length; i++){
  console.log(frutas[i])
  if(frutas[i] === 'pera')
  break
}

//coloque a ultima fruta da array em uma variavel, sem remover a mesma da array.

var ultimaFruta = frutas.pop() 
//pop para adicionar o ultima item a variavel.

frutas.push(ultimaFruta)
//push para realocar o que havia excluido da lista.

console.log(ultimaFruta)

for(i = 0; i < frutas.length; i++){
  console.log(frutas[i])
}



