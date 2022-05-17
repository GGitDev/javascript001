// Operador ternario
var idade = 18;

var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';

//                 condição   ?    true      :      false.
// depois da virgula é o retorno dos dados. string, numero...

console.log(podeBeber)

// É basicamente uma abreviação de coindicionais com if e else.




//Exercicios

//some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll.
var scroll = 1000;
scroll += 500;
console.log(scroll)

//Atribua true para a variavel darCredito, caso o cliente possua carro e casa. E falso caso contrario.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);

console.log(darCredito)


//Escopo de função
//var -- let -- const
//var não é mais utilizado porque vaza o escopo.
//no lugar de var, utilizaremos let e const. 

//let: Utilizaremos para todas as variareais seguintes.
//Const: será utilizando para constantes, Valores que não mudam como Nome, Cpf, RG....O Const não permite qua mudemos o valor depois de definir a 1º vez.

//Exercicio
//Por qual motivo o codigo abaixo retorna com erro?
{
  let cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;

  console.log(cor, marca, portas);
}



//Como corrigir o erro abaixo?
const dois = 2;

function somarDois(x){
  return x + dois;
}

function dividirDois(x){
  return x + dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

//O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++){
  console.log(numero);
}

const total = 10 * numero;
console.log(total);