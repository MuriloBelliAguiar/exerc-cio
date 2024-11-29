// 1 fácil
let ex1f = 6;
let divs = ex1f %2 === 0;
console.log(divs);

// 2 fácil
let ex2f = 2007;
let zxc = 2024 - ex2f >= 18;
console.log(zxc);

// 3 fácil
let ex3f = 10;
let ex3f1 = 3.9;
let conta3 = (ex3f + ex3f1) /2
if(conta3 >= 7){
    console.log("Aprovado");
} else{
    console.log("Reprovado");
};

// 4 fácil
let idadi = 21;
if (idadi >= 16){
    console.log("Pode votar!");
} else {
    console.log("Não pode votar!");
};

// 5 fácil
let numeor = 1;
let numeor2= 1;
if(numeor > numeor2){
    console.log ("O primeiro é o maior dos dois!");
}else if( numeor < numeor2){
    console.log("O segundo é o maior dos dois!");
}else{console.log("os dois são iguais")};

// 6 fácil
let horas = 45;
let extra = horas > 40;
console.log(extra);

// 7 fácil
let entre105 = 21;
let entre1050 = entre105 >= 10 && entre105 <= 50;
console.log(entre1050);

//8 fácil
let letra = "a";
if ('aeiouAEIOU'.includes(letra)){
    console.log("É uma vogal");
}else{
    console.log("É uma consoante");
};

// 9 fácil
let mês = "Dezembro";
if ('Janeiro Julho Dezembro'.includes(mês)){
    console.log("Férias");
}else{
    console.log("Vai trabaia");
};

// 10 fácil
let notaAluno = 3;
if(notaAluno >= 6){
    console.log("Nota A.")
}else {
    console.log("Nota B.")
}

// 1 médio
let nu1 = 692
let nu2 = 512
let nu3 = 213
if(nu1 > nu2 && nu1 > nu3){
    console.log ("O Primeiro número é o maior dos três!");
}else if( nu1 < nu2 && nu3 < nu2){
    console.log("O Segundo número é o maior dos três!");
}else if( nu1 < nu3 && nu2 < nu3){
    console.log("O Terceiro número é o maior dos três!");
}else{console.log("os três são iguais");

}

// 2 médio
let str = "Exemplo";

if (str.charAt(0) >= 'A' && str.charAt(0) <= 'Z') {
    console.log("O primeiro caractere é uma letra maiúscula.");
} else {
    console.log("O primeiro caractere é uma letra minúscula.");
}

// 3 médio
let temp = "°21C"
if (temp <"15°C"){
    console.log ("Ta frio");
}else if(temp >= "15°C" && temp <="30°C"){
    console.log("Ta suave");
}else{
    console.log("Ta mt quente")
}

// 4 médio
let ano = 2100
if( ano %4 === 0 && ano %100 !== 0){
    console.log("É bissexto!");
} else{console.log("Não é bissexto!")};

// 5 médio
let jsa = 30;
let asf = 20;
if(jsa %5 === 0 && asf %5 === 0){
    console.log("Geral da por 5");
}else if(jsa %5 === 0 && asf %5 !== 0){
    console.log("Só o primeiro da por 5");
}else if (jsa %5 !== 0 && asf %5 === 0){
    console.log("Só o segundo da por 5");
}else{
    console.log("Ninguém da por 5 :(")
}

// 6 médio
let corSemaforo = "amarelo"
if (corSemaforo === 'verde') {
    console.log("Vai");
} else if (corSemaforo === 'amarelo') {
    console.log("Cuidado")
} else if (corSemaforo === 'vermelho') {
    console.log("Pare");
} else {    
    console.log("Quebrado")
}
// 7 médio
let numero = 29;
let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

if (primos.includes(numero)) {
    console.log("O número está na lista de primos.");
} else {
    console.log("O número não está na lista de primos.");
}

