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

 let cont = 0 // é necessário iniciar com 0 para que o número do input seja somado com  próximo 
 let acum = 0.0 // acumula o input e soma 

 btnNum1.addEventListener('click', (evt) =>{
    let numDigitado = Number(inputNum.value)

    // declaração de contador
    cont++
    // declaração de acumulador 
    acum += numDigitado

    divResult.innerHTML = `Total de números digitados ${cont} <br> A soma dos números digitados é ${acum}`
 })