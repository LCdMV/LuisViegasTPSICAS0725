/**
 * 
 * Autor: Luis Viegas
 * Turma: CET.TPSI.CAS.0725
 * Ficha: Exercícios_IF
 * 
 */

console.log("<<======== Ficha Exercicios_IF ========>>");
console.log("\n===> Exercicio 1 <===");
function exercicio_1(segundos) {
	const horas = Math.floor(segundos / 3600);
	const minutos = Math.floor((segundos % 3600) / 60);
	const seg = segundos % 60;

	console.log(`${horas}h ${minutos}m ${seg}s`);
}

exercicio_1(3665);

console.log("\n===> Exercicio 2 <===");
function exercicio_2(num1, num2, num3) {
	let maior = num1;
	let menor = num1;

	if (num2 > maior) maior = num2;
	if (num3 > maior) maior = num3;

	if (num2 < menor) menor = num2;
	if (num3 < menor) menor = num3;

	console.log(`Maior: ${maior}`);
	console.log(`Menor: ${menor}`);
}

exercicio_2(5, 2, 8);

console.log("\n===> Exercicio 3 <===");
async function exercicio_3(num1, num2) {

	let crescente, decrescente;

	if (num1 < num2) {
		crescente = num1 + ", " + num2;
		decrescente = num2 + ", " + num1;
	} else {
		crescente = num2 + ", " + num1;
		decrescente = num1 + ", " + num2;
	}

	console.log(`Crescente: ${crescente}`);
	console.log(`Decrescente: ${decrescente}`);
}

exercicio_3(7, 2);

console.log("\n===> Exercicio 4 <===");
function exercicio_4(saldo, cheque) {
	if (cheque > saldo) {
		console.log("Cheque não pode ser descontado.");
	} else {
		console.log(`Cheque descontado, saldo: ${(saldo - cheque)}`);
	}
}

exercicio_4(500, 300);

console.log("\n===> Exercicio 5 <===");
function exercicio_5(num1, num2, num3) {
	let x, y, z;

	if (num1 <= num2 && num1 <= num3) {
		x = num1;
		if (num2 <= num3) {
			y = num2;
			z = num3;
		}
		else {
			y = num3;
			z = num2;
		}
	}
	else if (num2 <= num1 && num2 <= num3) {
		x = num2;
		if (num1 <= num3) {
			y = num1;
			z = num3;
		}
		else {
			y = num3;
			z = num1;
		}
	}
	else {
		x = num3;
		if (num1 <= num2) {
			y = num1;
			z = num2;
		}
		else {
			y = num2;
			z = num1;
		}
	}

	const crescente = x + ", " + y + ", " + z;
	const decrescente = z + ", " + y + ", " + x;
	console.log(`Crescente: ${crescente}`);
	console.log(`Decrescente: ${decrescente}`);
}

exercicio_5(4, 9, 2);

console.log("\n===> Exercicio 6 <===");
function exercicio_6(nome, compra) {
	let desconto;

	if (compra <= 200) {
		desconto = compra * 0.10;
	} else if (compra <= 500) {
		desconto = compra * 0.15;
	} else {
		desconto = compra * 0.20;
	}

	let total = compra - desconto;

	console.log(`Nome: ${nome}`);
	console.log(`Compra : ${compra}`);
	console.log(`Desconto : ${desconto}`);
	console.log(`Total : ${total}`);
}

exercicio_6("João", 350);

console.log("\n===> Exercicio 7 <===");
function exercicio_7(nota1, nota2, nota3) {
	let media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
	let status;

	if (media >= 6)
		status = "Aprovado";
	else
		status = "Reprovado";

	console.log(`Média: ${media}`);
	console.log(status);
}

exercicio_7(7, 6, 9);

console.log("\n===> Exercicio 8 <===");
function exercicio_8(notas) {
	let soma = 0;

	for (let i = 0; i < notas.length; i++) {
		soma += notas[i];
	}

	let media = soma / notas.length;

	let acima = 0;
	for (let i = 0; i < notas.length; i++) {
		if (notas[i] >= media) {
			acima++;
		}
	}

	console.log(`Média: ${media}`);
	console.log(`Alunos com nota igual ou acima da média: ${acima}`);
}

let notas = [6, 17, 12, 8, 9, 1, 18, 11, 10, 20];
exercicio_8(notas);

console.log("\n===> Exercicio SWITCH <===");
function exercicio_SWITCH(num) {
	if (num === 1)
		console.log("Janeiro");
	else if (num === 2)
		console.log("Fevereiro");
	else if (num === 3)
		console.log("Março");
	else if (num === 4)
		console.log("Abril");
	else if (num === 5)
		console.log("Maio");
	else if (num === 6)
		console.log("Junho");
	else if (num === 7)
		console.log("Julho");
	else if (num === 8)
		console.log("Agosto");
	else if (num === 9)
		console.log("Setembro");
	else if (num === 10)
		console.log("Outubro");
	else if (num === 11)
		console.log("Novembro");
	else if (num === 12)
		console.log("Dezembro");
	else
		console.log("Número Inválido");
}

exercicio_SWITCH(5);

console.log("\n===> Exercicio LOOP <===");
function exercicio_LOOP(numeros) {
	let pares = 0;
	let impares = 0;

	for (let i = 0; i < numeros.length; i++) {
		if (numeros[i] % 2 === 0) {
			pares++;
		} else {
			impares++;
		}
	}

	console.log(`Pares: ${pares}`);
	console.log(`Impares: ${impares}`);
}

let numeros = [2, 3, 5, 6, 8, 9, 10, 12, 14, 15];
exercicio_LOOP(numeros);

console.log("\n<<====== Fim Ficha Exercicios_IF ======>>");
