// Desafios finais
// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
// ______________________________________________________________

console.log("Boas-vindas");

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// ______________________________________________________________

// Pode ser usado colocando a variavel direto com o nome ou perguntando
let nome = "Danilo";
// ou
// let nome = prompt("Digite seu nome");
// console.log(`Olá, ${nome}!`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
// ______________________________________________________________

let nome = "Danilo";
alert(`Olá, ${nome}!`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
// ______________________________________________________________

// let linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`Sua Linguagem favorita é ${linguagem}`);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// ______________________________________________________________
let valor1 = 5;
let valor2 = 7;
let resultado = valor1 + valor2;
console.log(resultado);

// ou

// let valor1 = parseFloat(prompt("Digite primeiro valor"));
// let valor2 = parseFloat(prompt("Digite o segundo valor"));
// let resultado = valor1 + valor2;
// console.log(resultado);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
// ______________________________________________________________

let valor1 = 10;
let valor2 = 7;
let resultado = valor1 - valor2;
console.log(resultado);

// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
// ______________________________________________________________

let idade = prompt("Qual é sua idade?");
if (idade > 17) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
// ______________________________________________________________

let numero = prompt("Insira um numero!");
if (numero > 0) {
  console.log("Seu numero é POSITIVO");
} else if (numero < 0) {
  console.log("Seu numero é NEGATIVO");
} else {
  console.log("Seu numero é ZERO");
}

// Use um loop while para imprimir os números de 1 a 10 no console.
// ______________________________________________________________

let numero = 1;
while (numero <= 10) {
  console.log(`${numero}`);
  numero++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
// ______________________________________________________________

let nota = prompt("Insira sua nota!");
if (nota >= 7) {
  console.log("APROVADO");
} else {
  console.log("REPROVADO");
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
// ______________________________________________________________

let numero_aleatório = Math.random();
console.log(`${numero_aleatório}`);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// ______________________________________________________________

let num_int = parseInt(Math.random() * 10) + 1;
console.log(`${num_int}`);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
// ______________________________________________________________

let num_mil = parseInt(Math.random() * 1000) + 1;
console.log(`${num_mil}`);
