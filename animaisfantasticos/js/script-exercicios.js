//retorne no console todas as imagens do site
const todasImgs = document.getElementsByTagName('img');
console.log(todasImgs)

//retorne no console apenas as imagens que começaram coma palavra imagem
const quaseTodasImgs = document.querySelectorAll('[src^="img/imagem"]')

console.log(quaseTodasImgs)

const arrayImgs = Array.from(todasImgs);

arrayImgs.forEach(function(item, index){
   if(index != 6)
   console.log(item);
})

//selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')

linksInternos.forEach(function(itens){
  console.log(itens.innerHTML)
})

//seleciona o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao');

const firstH2 = animaisDescricao.querySelector('h2');

console.log(firstH2)

//seleciona o ultimo p do site
const paragrafos = document.getElementsByTagName('p')

const paragrafosArray = Array.from(paragrafos)

const ultimoP = paragrafosArray.pop();

paragrafosArray.push(ultimoP)

console.log(paragrafosArray)
console.log(ultimoP)


