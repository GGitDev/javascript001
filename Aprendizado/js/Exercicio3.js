//Primeira interação com HTML

var btn = document.querySelector('.btn')

btn.addEventListener('click', function(){

  console.log('voce clicou no botao')
})

//Exercicios

//nomeie 3 propriedades ou metodos de string
var nome = "Gilberto";

console.log(nome.fontsize(20))
console.log(nome.bold())
console.log(nome.length)

//nomeie 5 pripreidades ou metodos de elementos do DOM

console.log(btn.after("Esse texto está sendo adicionado por intermedio de javascript utilizando o metodo AFTER."))

console.log(btn.classList) // Lista as classes que há dentro de btn.

console.log(btn.innerHTML) // Mostra o valor contido dentro de btn.

console.log(btn.outerHTML) // mostra a linha completa dentro do HTML respectivo ao btn.

console.log(btn.ownerDocument) // Mostra o documento HTML completo no console.


//busque na web um objeto (metodo) capaz de interagir com o clipboard
//clipboad é a parte do seu computador que lida com o ctrl + c
//https://www.delftstack.com/pt/howto/javascript/javascript-copy-to-clipboard/

