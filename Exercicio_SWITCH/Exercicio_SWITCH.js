/**
 * 
 * Autor: Luis Viegas
 * Turma: CET.TPSI.CAS.0725
 * Ficha: Exercícios_Switch
 * 
 */

console.log("<<======== Ficha Exercícios_Switch ========>>");
console.log("\n===> Exercicio 1 <===");
function exercicio_1(dia) {
	switch (dia.toLowerCase()) {
		case "segunda":
			console.log("Dia útil");
			break;
		case "terça":
			console.log("Dia útil");
			break;
		case "quarta":
			console.log("Dia útil");
			break;
		case "quinta":
			console.log("Dia útil");
			break;
		case "sexta":
			console.log("Dia útil");
			break;
		case "sábado":
			console.log("Fim de semana");
			break;
		case "domingo":
			console.log("Fim de semana");
			break;
		default:
			console.log("Dia inválido");
			break;
	}
}

exercicio_1("domingo");

console.log("\n===> Exercicio 2 <===");
function exercicio_2(nota) {
	switch (true) {
		case (nota >= 90 && nota <= 100):
			console.log("Excelente");
			break;
		case (nota >= 70 && nota <= 89):
			console.log("Bom");
			break;
		case (nota >= 50 && nota <= 69):
			console.log("Suficiente");
			break;
		case (nota >= 0 && nota < 50):
			console.log("Insuficiente");
			break;
		default:
			console.log("Nota inválida");
			break;
	}
}

exercicio_2(75);

console.log("\n===> Exercicio 3 <===");
function exercicio_3(pedido) {
	switch (pedido.tipo) {
		case "compra":
			console.log(`Compra de ${pedido.valor}€`);
			break;
		case "venda":
			console.log(`Venda de ${pedido.valor}€`);
			break;
		default:
			return "Pedido desconhecido";
	}
}

let pedido = {"tipo": "venda", "valor": 250};
exercicio_3(pedido);

console.log("\n===> Exercicio 4 <===");
function exercicio_4(valor) {
	switch (true) {
		case (typeof valor === "number" && Number.isInteger(valor)):
			console.log("Número inteiro");
			break;
		case (typeof valor === "number" && !Number.isInteger(valor)):
			console.log("Número decimal");
			break;
		case (typeof valor === "string" && !isNaN(Number(valor))):
			console.log("String numérica");
			break;
		case (typeof valor === "string"):
			console.log("String textual");
			break;
		case (Array.isArray(valor)):
			console.log("Lista");
			break;
		default:
			console.log("Tipo desconhecido");
			break;
	}
}

let valor = [10, 20, 30];
exercicio_4(valor);

console.log("\n===> Exercicio 5 <===");
function exercicio_5(mensagem) {
	const texto = mensagem.toLowerCase();

	switch (true) {
		case (texto === "olá" || texto === "bom dia"):
			console.log("Saudação");
			break;
		case (texto.endsWith("?")):
			console.log("Pergunta");
			break;
		case (texto.includes("tchau") || texto.includes("adeus")):
			console.log("Despedida");
			break;
		default:
			console.log("Mensagem genérica");
			break;
	}
}

exercicio_5("Tudo bem?");

console.log("\n===> Exercicio 6 <===");
function exercicio_6(info) {
	switch (info.status) {
		case "ok":
			if (info.tempo_resposta > 200) {
				console.log("Servidor lento");
				break;
			}
			console.log("Servidor ativo");
			break;
		case "erro":
			console.log("Servidor indisponível");
			break;
		default:
			console.log("Estado desconhecido");
			break;
	}
}

let info = {"status": "ok", "tempo_resposta": 350};
exercicio_6(info);

console.log("\n===> Exercicio 7 <===");
function exercicio_7(produto) {
	switch (produto.categoria) {
		case "eletrônico":
			if (produto.preco > 1000) {
				console.log("Produto de luxo");
				break;
			}
			console.log("Produto comum");
			break;
		case "alimento":
			console.log("Produto alimentar");
			break;
		default:
			console.log("Categoria desconhecida");
			break;
	}
}

let produto = {"categoria": "eletrônico", "preco": 1500};
exercicio_7(produto);

console.log("\n===> Exercicio 8 <===");
function exercicio_8(operacao, num1, num2) {
	switch (operacao) {
		case "soma":
			console.log(`${num1 + num2}`);
			break;
		case "subtrai":
			console.log(`${num1 - num2}`);
			break;
		case "multiplica":
			console.log(`${num1 * num2}`);
			break;
		case "divide":
			console.log(`${num1 / num2}`);
			break;
		default:
			console.log("Operação inválida");
			break;
	}
}

exercicio_8("divide", 20, 4);

console.log("\n===> Exercicio 9 <===");
function exercicio_9(requisito) {
	switch (requisito.metodo) {
		case "GET":
			console.log("Requisição GET recebida");
			break;
		case "POST":
			if (requisito.conteudo === "") {
				console.log("Requisição POST sem dados");
				break;
			}
			console.log("Requisição POST com dados válidos");
			break;
		default:
			console.log("Método não suportado");
			break;
	}
}

let requisito = {"metodo": "POST", "conteudo": ""};
exercicio_9(requisito);

console.log("\n===> Exercicio 10 <===");
function exercicio_10(jogador1, jogador2) {
	const j1 = jogador1.toLowerCase();
	const j2 = jogador2.toLowerCase();

	if (j1 === j2)
	{
		console.log("Empate");
		return;
	}

	switch (j1) {
		case "pedra":
			if (j2 === "tesoura") {
				console.log("Jogador 1 venceu");
				break;
			}
			console.log("Jogador 2 venceu");
			break;
		case "papel":
			if (j2 === "pedra") {
				console.log("Jogador 1 venceu");
				break;
			}
			console.log("Jogador 2 venceu");
			break;
		case "tesoura":
			if (j2 === "papel") {
				console.log("Jogador 1 venceu");
				break;
			}
			console.log("Jogador 2 venceu");
			break;
		default:
			console.log("Jogada inválida");
			break;
	}
}

exercicio_10("pedra", "tesoura");

console.log("\n<<====== Fim Ficha Exercícios_Switch ======>>");
