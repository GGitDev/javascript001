//objetos
var quadrado = {
  lados: 4,

  area: function(lado){
    return lado*lado;
  },

  perimetro(lado){
    return this.lados * lado;
  },
}

console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

//Exercicios

//cire um objeto com os seus dados pessoais.
//deve possuir pelo menos duas propriedades nome e sobrenome
var pessoa = {
  nome:'Gilberto',
  sobreNome:'N. S. Filho',
  idade: 21,
  cpf: 47640540860,
//crie um metodo no objeto anterior, que mostre o seu nome completo.
  mostrarNome: function(){
    return this.nome
  }
}

console.log(`Olá. Eu sou ${pessoa.mostrarNome()} ${pessoa.sobreNome}, tenho ${pessoa.idade} anos. Muito prazer!`)
console.log(pessoa.mostrarNome())


//modifique o valor da propriedade preco para 3000
var carro = {
  preco:1000,
  portas: 4,
  marca: 'Audi',
}

console.log(carro.preco)

carro.preco = 3000;

console.log(carro.preco)

//crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem.
var cachorro = {
  raca: 'Labrador',
  cor: 'Preto',
  idade: 10,

  latir(pessoa){
    if(pessoa === 'H'){
      return console.log("AUAU")
    }else{
      return console.log("SÓ LATO PRA HOMEM")
    }
  }
}

cachorro.latir('M')