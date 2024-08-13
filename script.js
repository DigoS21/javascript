/* Função padrão  */ 


// function subtrair(num1,num2) {
//     return num1 - num2; 
// }

// function somar(num1,num2) {
//     return num1 + num2; 
// }

/* Arrow Function com {} */ 

// const subtrair = (num1,num2) => {
//     return num1 - num2; 
// }

// const somar = (num1,num2) => {
//     return num1 + num2; 
// }

/* Arrow Function sem aspas {} */ 

const subtrair = (num1,num2) => num1 - num2; 

const somar = (num1,num2) => num1 + num2; 

const resultado = 'Resultado Final Soma: ' + somar(20,3) + ' Subtração: '+ subtrair(15,6);
console.log(resultado);

