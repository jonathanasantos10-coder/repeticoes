// ESTRUTURA DE REPETIÇÕES
// toda estrutura de repetição obrigatoriamente necessita de uma condição de parada.

// pegando elemetnos do DOM
const divFor = document.querySelector('#div-for')


// neste caso i sendo a variável

for (i = 0; i < 10; i++){
    console.log (i)
    divFor.innerHTML += `${i} <br>`
 }

 //contador e acumulador
 const inputNum = document.querySelector('#num1')
 const btnNum1= document.querySelector('#btn-num1')
 const divResult = document.querySelector('#resul-cont-acum')

 let cont = 0, contPar = 0 , contImpar = 0 // é necessário iniciar com 0 para que o número do input seja somado com  próximo 
 let acum = 0.0 // acumula o input e soma 

 btnNum1.addEventListener('click', (evt) =>{
    let numDigitado = Number(inputNum.value)

    // declaração de contador
    cont++
    // declaração de acumulador 
    acum += numDigitado

    if(numDigitado % 2 == 0){
        contPar++
    } else{
        contImpar++
    }

    divResult.innerHTML = `Total de números digitados ${cont} <br> A soma dos números digitados é ${acum} <br> Total de números pares digitados: ${contPar} <br>
    Total de números impares digitados: ${contImpar} <br>`

    inputNum.value = ''
 })

 // REPETIÇÃO COM WHILE
 const inputFrase = document.querySelector('#msg')
 const inputNumRepeticao = document.querySelector('#NumRepeticao')
const btnExibir = document.querySelector('#btn-exibir')
const divResultFrase = document.querySelector('#result-frase')
// variaveis para o algoritmo 
let contFrase = 0
let totalRepeticao = 0

btnExibir.addEventListener('click', (evt) =>{
    totalRepeticao = Number(inputNumRepeticao.value)

while( totalRepeticao > contFrase){ // enquanto o total de repetição de frases for menor que o contfrase, o código vai rodar e imprimir a frae novamente
    divResultFrase.innerHTML += `${inputFrase.value} <br>`;
    contFrase++ 
}    
})

//COLEÇÃO DE DADOS - ARRAY 
transporte = ['Bicicleta', 'Carro', 'Moto', 'Ônibus', 'Avião', 'Barco'] 

// for (i = 0; i < transporte.length; i++){
   // console.log(transporte[i])
//}

// FOR IN
const divForin = document.querySelector('#div-forin')
for(let pos in transporte){
    console.log(transporte[pos])
    divForin.innerHTML += `${transporte[pos]}<br>`
}

//FOR OF
const divForOf = document.querySelector('#div-forof')

for(let elem of transporte){
    divForOf.innerHTML += `${elem} <br>`
}

//coleção de pessoas - array de objeto
const pessoas = [
    {nome: 'Maria', idade: 18, renda: 15000},
    {nome: 'Josefina', idade: 73, renda: 1800},
    {nome: 'Chicó', idade: 32, renda: 1.50},
    {nome: 'João Grilo', idade: 34, renda: 2}
]
 console.log('===========FOR IN===================')
for (let indiceObjPessoa in pessoas){
    console.log(pessoas[indiceObjPessoa].nome, pessoas[indiceObjPessoa].idade, pessoas[indiceObjPessoa].renda)
}
console.log('===========FOR OF===================')
for(let pessoa of pessoas)
    console.log(pessoa.nome, pessoa.idade, pessoa.renda)

// FOR EACH
const divForeach = document.querySelector('#div-foreach')
