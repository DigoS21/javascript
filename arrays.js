// Arrays - estudo sobre a utilização 

//const frutas = ["Maça", "Banana", "Perâ", "Manga"];

//console.log(frutas);

// frutas.forEach((value) =>{
//     console.log(frutas[]);
// });

// for(let i = 0; i < 4; i++){
//     console.log(frutas[i]);
// };

//console.log(frutas[1]);
//console.log(typeof(frutas));

const alunos = [
    {
        nome: "Rodrigo",
        idade: 33,
    },

    {
        nome: "Carem",
        idade: 32,
    },

    {
        nome: "Carine",
        idade: 1,
    },

    {
        nome: "Juliana",
        idade: 28,
    },

    {
        nome: "José",
        idade: 45,
    },

    {
        nome: "Roberto",
        idade: 16,
    },
];

//const alunosfiltrados = alunos.filter(aluno => aluno.idade > 18);
//console.table(alunosfiltrados);

const alunosPesquisados = alunos.find(aluno => aluno.nome === 'Roberto');
console.table(alunosPesquisados);