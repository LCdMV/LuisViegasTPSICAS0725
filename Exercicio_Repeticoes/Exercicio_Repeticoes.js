/**
 * 
 * Autor: Luis Viegas
 * Turma: CET.TPSI.CAS.0725
 * Ficha: Exercícios_Repetição
 * 
 */

// Para leituras da consola
import * as readline from 'node:readline/promises';

const read = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

async function lerIN(mensagem) {
	const IN = await read.question(mensagem);
	return IN;
}
// Para leituras da consola fim

console.log("<<======== Ficha Exercícios_Repetição ========>>");
console.log("\n===> Exercicio 1 <===");
function exercicio_1() {
	let pares = "";
	let impares = "";

	for(let i = 1; i <= 30; i++)
	{
		if (i % 2 == 0)
			pares = pares + i + "  ";
		else
			impares = impares + i + "  ";
	}

	console.log(`Pares: ${pares}`);
	console.log(`Impares: ${impares}`);
}

exercicio_1();

console.log("\n===> Exercicio 2 <===");
function exercicio_2(nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 === 0)
			console.log("Par");
		else
			console.log("Ímpar");
	}
}

let nums = [1, 32, 43, 94, 25, 78256, 17, 68, 9999999, 1010];
exercicio_2(nums);

console.log("\n===> Exercicio 3 <===");
function exercicio_3(notas) {
	let media = 0;
	for (let i = 0; i < notas.length; i++) {
		media += notas[i];
	}

	media = media / notas.length;

	console.log(`Média: ${media}`);
}

let notas = [6, 17, 12, 8, 9, 1, 18, 11, 10, 20];
exercicio_3(notas);

console.log("\n===> Exercicio 4 <===");
function exercicio_4(num) {
	if (num < 2)
	{
		console.log(`${num} não é primo`)
		return;
	}

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0)
		{
			console.log(`${num} não é primo`);
			return;
		}
	}

	console.log(`${num} é primo`);
}

exercicio_4(11);

console.log("\n===> Exercicio 5 <===");
function exercicio_5() {
	let out = "";

	for(let i = 1; i <= 10000; i++)
		out = out + i + "  ";

	console.log(out);
}

exercicio_5();

console.log("\n===> Exercicio 6 <===");
function exercicio_6() {
	let out = "";
	let count = 0;
	let num = 2;

	while (count < 10) {
		let primo = true

		for (let i = 2; i <= Math.sqrt(num); i++) {
			if (num % i === 0) {
				primo = false;
			}
		}

		if (primo)
		{
			out = out + num + "  ";
			count++;
		}
		
		num++;
	}

	console.log(out);
}

exercicio_6();

console.log("\n===> Exercicio 7 <===");
function exercicio_7() {
	let out = "";

	for(let i = 1; i <= 1000; i++)
	{
		if (i % 10 == 0)
			out = out + i + "  ";
	}

	console.log(out);
}

exercicio_7();

console.log("\n===> Exercicio 8 <===");
function exercicio_8() {
	let out10 = "";
	let out15 = "";

	for(let i = 1; i <= 1000; i++)
	{
		if (i % 10 == 0)
			out10 = out10 + i + "  ";
	}

	for(let i = 1; (i + 5) <= 1000; i++)
	{
		if (i % 10 == 0)
			out15 = out15 + (i + 5) + "  ";
	}

	console.log(out10);
	console.log(out15);
}

exercicio_8();

console.log("\n===> Exercicio 9 <===");
async function exercicio_9() {
	let n;

	do
	{
		n = Number(await lerIN("Introduza um numero: "));
	} while (n < 1 || n > 100);

	return;
}

await exercicio_9();

console.log("\n===> Exercicio 10 <===");
async function exercicio_10() {
	const num = Number(await lerIN("Introduza um numero: "));
	let out = `Divisores de ${num}:  `;

	for (let i = 1; i <= num; i++) {
		if (num % i === 0)
			out = out + i + "  ";
	}
	console.log(out);
}

await exercicio_10();

console.log("\n===> Exercicio 11 <===");
function exercicio_11() {
	for (let i = 1; i < 6; i++)
	{
		let out = "";
		for (let j = 1; j <= i; j++)
		{
			out = out + i;
		}

		console.log(out);
	}
}

exercicio_11();

console.log("\n===> Exercicio 12 <===");
async function exercicio_12() {
	const valor = Number(await lerIN("Introduza um numero: "));
	let contador = 0;

	for (let i = 1; i < valor; i++) {
		console.log(`${valor} + ${i} = ${valor + i}`);
		console.log(`${valor} - ${i} = ${valor - i}`);
		console.log(`${valor} * ${i} = ${valor * i}`);
		console.log(`${valor} / ${i} = ${valor / i}`);
		contador += 4;
	}

	console.log(`Operações efetuadas: ${contador}`);
}

await exercicio_12();

console.log("\n===> Exercicio 13 <===");
async function exercicio_13() {
	const valor = Number(await lerIN("Introduza um numero: "));

	for (let i = 1; i <= 10; i++) {
		console.log(`${valor} * ${i} = ${valor * i}`);
	}
}

await exercicio_13(nums);

console.log("\n===> Exercicio 14 <===");
function exercicio_14() {
	for (let i = 1; i <= 100; i++) {
		console.log(`Tabuada dos ${i} - Inicio`)
		for (let j = 1; j <= 10; j++) {
			console.log(`${j} * ${i} = ${j * i}`);
		}
		console.log(`Tabuada dos ${i} - Fim`)
	}
}

exercicio_14();

console.log("\n===> Exercicio 15 <===");
function exercicio_15() {
	for (let i = 0; i <= 255; i++) {
		console.log(`Código: ${i} com caracter ${JSON.stringify(String.fromCharCode(i))}`);
	}
}

exercicio_15();

console.log("\n===> Exercicio 16 <===");
async function exercicio_16() {
	let soma = 0;
	let count = 0;

	do {
		const num = Number(await lerIN("Introduza um numero (entre 1 e 50): "))
		if (num >= 1 && num <= 50 && num % 2 === 0) {
			soma += num;
			count++;
		}
	} while (count <= 30)

	console.log(`Média dos numero inseridos: ${soma / 30}`);
}

await exercicio_16();

console.log("\n===> Exercicio 17 <===");
function exercicio_17() {
	let out = "";

	for (let i = 1; i <= 1000; i++) {
		if (i % 5 === 0 && i % 3 !== 0)
			out = out + i + "  ";
	}

	console.log(out);
}

exercicio_17();

console.log("\n===> Exercicio 18 <===");
function isPerfeito(num) {
	let soma = 0;

	for (let i = 1; i < num; i++) {
		if (num % i === 0)
			soma += i;
	}

	return (soma === num);
}

async function exercicio_18() {
	const num = Number(await lerIN("Introduza um numero: "));
	let total = 0;

	for (let i = 1; i <= num; i++) {
		if (isPerfeito(i))
			total++;
	}
}

await exercicio_18(nums);

console.log("\n===> Exercicio 19 <===");
function exercicio_19() {
	let count = 2;
	let num1 = 1;
	let num2 = 1;
	let out = "Sequência de Fibonacci: " + num1;

	while (count <= 60)
	{
		let temp = num1 + num2;
		num1 = num2;
		out = out + num2 + "  ";
		num2 = temp;
		count++;
	}

	console.log(out);
}

exercicio_19();

read.close();

console.log("\n<<====== Fim Ficha Exercícios_Repetição ======>>");