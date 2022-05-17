//Crie uma função para verificar se o valor é Truthy
function eVerdadeiro(A){
       return !!A
}

console.log(eVerdadeiro(""))

//crie uma função matematica que retorne o perimetro de um quadrado 
//lembrando: perimetro é a soma dos quatro lados do quadrado
function perimetro(lado){
       return console.log(lado * 4) 
}

perimetro(2)


//Crie uma função que retorne o seu nome completo
//ela deve possuir os parametros: nome e sobranome
function nomeCompleto(nome, sobreNome){
       return console.log(`Nome completo: ${nome + sobreNome}`)
}

nomeCompleto('Gilberto ', 'N S Filho')

//crie uma função que verifica se um numero é par
function parImpar(numero){
       if(numero % 2 === 0){
              console.log('o numero ' + numero + ' par')
       }else{
              console.log('o numero ' + numero + ' impar')
       }
}

parImpar(2)

//crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDe(dado){
       return console.log(typeof(dado))
}

tipoDe(true)

//addeventlistener é uma função nativa do javascript. O primeiro parametro é o vento que ocorre e o segundo é a callabck. utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
addEventListener('keydown', function(){
       console.log('a tecla foi pressionada')

       
})


// corrija o erro abaixo
function precisoVisitar(paisesVisitados){
       var totalPaises = 193;
       return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`; 
}

function jaVisitei(paisesVisitados){
       //O total paises não existe nesse escopo, por isso ele esta dando erro. Para resolver, basta declarar a variavel totalPaises.
       
       //var totalPaises = 193;

       return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

precisoVisitar(20);
jaVisitei(20);

