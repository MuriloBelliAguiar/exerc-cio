// 1 Media
let nota1 = 1;
let nota2 = 3;
let nota3 = 6.3;
let divisão = (nota1 + nota2 + nota3) /3;
if( divisão >= 6) {
    console.log("Aprovado");
} else {console.log("Reprovado")};

// 2 Cadastro
let idadi = 21;
if (idadi >= 16){
    console.log("Ola, Dev!");
} else {
    console.log("Kid kkkkk!");
};

// 3 Desconto
let preço = 100;
let desconto = preço *0.10
if (preço>=50){
    console.log(`O desconto será de = ${desconto}R$, o produto custará ${preço - desconto}R$`);
}else{(console.log(`Não terá desconto = ${preço}R$`))};

// 4 Presença
let escola = 75;
if (escola >= 75){
    console.log("Parabéns, você passou!");
} else {
    console.log("Reprovado!");
};

// 5 Turno
let turno = "a";
if(turno === "M"){
    console.log("Matutino");
}
else if(turno === "V"){
    console.log("Vespertino");
}else if (turno === "N"){
    console.log("Noturno");
} else {(console.log("Não registrado"))}

// 6 Nota minima
let nnota = 5;
let noota = 5;
let notta = 5;
let result = (nnota + noota + notta) /3;
if(result >=6){
    console.log("Passou")
}
else if ( result >=4 && result <=5.9){
    console.log("Recuperação")
}
else if (nnota <4 && noota <4 && notta <4){
    console.log("Reprovado")
}else{(console.log("Reprovado"))};



// 7 Estoque
let caderno = 10;
let lapis = 10;
let folha = 10;
if (caderno < 10){
    console.log("Repor Estoque");
}
else if (lapis < 10){
    console.log("Repor Estoque");
}
else if (folha < 10){
    console.log("Repor Estoque");
} else {(console.log("Estoque Suficiente"))};

// 8 Rendimento
let rendimento = 9
if (rendimento >= 8){
    console.log("Excelente");
}
else if (rendimento >= 6 && rendimento <= 7.9){
    console.log("Bom");
} else {(console.log("Precisa Melhorar"))};

// 9 Desconto Curso
let matricula = "Matriculado";
let curso = 1000;
let dessconto = curso * 0.20;
if(matricula === "Matriculado"){
    console.log(`O valor do curso será ${curso - dessconto}R$`);
}else{(console.log(`O valor do curso será ${curso}R$`))};

// 10 Avaliação de Projetos

// Funcionalidade
let funcionalidade = 9;
if (funcionalidade >=8){
    console.log("A funcionalidade está excelente");
}
else if (funcionalidade >= 6 && funcionalidade <= 7.9){
    console.log("A funcionalidade está boa");
} else {(console.log("A funcionalidade precisa melhorar"))};

// Desing
let desing = 6;
if (desing >=8){
    console.log("O desing está excelente");
}
else if (desing >= 6 && desing <= 7.9){
    console.log("O desing está bom");
} else {(console.log("A funcionalidade precisa melhorar"))};

// Documentação
let documentação = 2;
if (documentação >=8){
    console.log("A documentação está excelente");
}
else if (documentação >= 6 && documentação <= 7.9){
    console.log("A documentação está boa");
} else {(console.log("A documentação precisa melhorar"))};

// 11 Frequência e Notas
let presença = 75;
if (presença >= 75){
    console.log("Parabéns, você passou!");
} else {
    console.log("Venha com mais frequência no próximo ano!");
}let notas1 = 1;
let notas2 = 3;
let notas3 = 6.3;
let divissão = (notas1 + notas2 + notas3) /3;
if( divisão >= 6) {
    console.log("Parabéns, boas notas!");
} else {console.log("Estude mais e se dedique da próxima vez")};

// 12 Laboratório informática
let val = "cartão inativo"
console.log("Possui cartão valido?")
if ( val === "cartão ativo"){
    console.log("Entrada liberada")
}else{(console.log("Acesso negado"))}

// 13 Alocação de recursos
let recursos = 100;
if (recursos <100){
    console.log("Recursos insuficientes, reserve uma data!")
} else {(console.log("Retire seus recursos no estoque!"))}

// 14 Obrigatórias/eletivas
console.log("Disciplina obrigatória ou eletiva?");
let inscr = 1500;
let obr = "Eletiva";
if (obr === "Obrigatória"){
    console.log("Cadastro completo!")}
    else if (inscr <=200){
        console.log("Cadastro confirmado!");
    }else{(console.log("Lista de espera"))};

    //15 Desempenho provas
    let desempenho = 3.9
if (desempenho >= 8){
    console.log("Cacetada!");
}
else if (desempenho >= 6){
    console.log("Passou");
}
else if (desempenho >=4 && desempenho <=5.9){
    console.log("Recuperação")
} else {(console.log("Retido"))};

// 16 Carteira de motorista
let cfc = [2 + 4 + 1.3 + 2.3 + 4];
if (cfc >=20){
    console.log("Suspensão")
} else {(console.log(`Continue, ainda tem ${20 - cfc} pontos`))};

// 17 Empréstimo do banco
let emprestimo =  1748;
let parcelas = 13;
let = juros = parcelas * 0.08;
let calculojuros = (emprestimo * juros *parcelas) + emprestimo;
if (parcelas <=12){
    console.log(`Cada parcela custará ${calculojuros / parcelas}`);
}else{(console.log("Não é possível realizar essa quantidade de parcelas"))}

// 18 Desempenho + extra
const prova1 = 6;
const prova2 = 7;
const prova3 = 8;
const atividadesExtras = true;

let media3 = (prova1 + prova2 + prova3) / 3;

if (atividadesExtras) {
    media3 *= 1.05;
}

if (media3 >= 6) {
    console.log("Você passou!");
} else if (media3 >= 4) {
    console.log("Você ficou de recuperação.");
} else {
    console.log("Você foi reprovado.");
};

// 19
let durabilidade = 4;
let qldvenda = 8;
let utilidade = 4;
let preçomercado = 9;
let praticidade = 6;
let somar = (durabilidade + qldvenda + utilidade + preçomercado + praticidade) /5;
if (somar >=8){
    console.log("Ótimo custo benefício");
}
else if (somar >= 6 && somar <= 7.9){
    console.log("Bom")
}
else if(somar >=4 && somar >=5.9){
    console.log("Regular")
}else{(console.log("Ruim"))}

// 20 conta de luz
const consumo = 150;
let valorTotal = 0;

if (consumo <= 100) {
    valorTotal = consumo * 0.50;
} else if (consumo <= 200) {
    valorTotal = 100 * 0.50 + (consumo - 100) * 0.75;
} else {
    valorTotal = 100 * 0.50 + 100 * 0.75 + (consumo - 200) * 1.00;
}

console.log(`O valor total da conta de energia é: R$ ${valorTotal.toFixed(2)}`);