# Operadores

## Aritméticos: retornam o resultado de uma operação
+ somar
- subtrair
* multiplicar
/ dividir
% resto da divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true/false)
< menor que
> maior que
<= menor ou igual
>= maior ou igual

## Comparadores lógicos: teste lógico, retorno booleano (true/false):
== igualdade entre sentenças (valor)
!= diferença entre sentenças (valor)
=== igualdade entre sentenças (valor e tipo)
!== diferença entre sentenças (valor e tipo)

* Atribuição
a = b
a = 4

## Operadores de lógica e junção lógica
!   NÃO (NOT)
&&  E (AND)
||  OU (OR)

O sinal de exclamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.

#### Exemplos:
a != b      // o valor de a é diferente de b
x !== y     // o valor e o tipo de x são diferentes de y
!a == b     // o valor de a não é igual ao valor de b

#### As condições lógicas são convertidas em números binários:
true é equivalente a 1
false é equivalente a 0

#### Operador lógico de atribuição
Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica, economiza IFs

Exemplo:

var meuCarro = cor == 'preto'? 'preto' : 'branco';

## If
if (...){
    ...
}


* Exemplo

if (cor == 'branco'){
    meuCarro = 'branco';
    console.log (meuCarro);
}

## Else
else {

}


* Exemplo

if (cor == 'branco'){
    meuCarro = 'branco';
    console.log (meuCarro);
} else{
    meuCarro = 'cinza';
    console.log (meuCarro);
}

## Else if
else if (...) {
         ...
}


* Exemplo

if (cor == 'branco'){
    meuCarro = 'branco';
    console.log (meuCarro);
} else if (cor == 'preto'){
    meuCarro = 'preto';
} else if (cor == 'cinza'){
    meuCarro = 'cinza';
} else {
    meuCarro = 'vermelho';
}

## Switch
* Exemplo

switch (cor){
    case 'branco' :
        meuCarro = 'branco';
        break;
    case 'preto' :
        meuCarro = 'preto';
        break;
    case 'cinza' :
        meuCarro = 'cinza';
        break;
    default :
        console.log('Não temos a cor desejada');
}

## Calcular média
var nota1 = 10;
var nota2 = 8;
var nota3 = 8;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4)/4;

if (media>8){
    console.log('Aluno aprovado');
} else {
    console.log('Aluno reprovado');
}

## Laços de repetição (loops)
### Tipos:

* for([expressaoInicial]; [condicao]; [incremento]){
                [execucao]
}

// Fazer a revisão do carro aos 10km.

var km;
var revisao = 10;

for(km=0; km<revisao; km++){
    console.log('apenas ' +km+ 'kms, entao pode rodar');
}

### Cálculo de média de alunos

var alunos = [
    [6, 7, 8, 6],
    [8, 5, 6, 8],
    [10, 7, 8, 7],
    [8, 8, 8, 8],
    [6, 6, 6, 6, 6]
]

var nota = 0;
for(var i=0; i < alunos.length; i++){

    nota = 0;
    notasAluno = alunos[i];
    console.log('Aluno: '+ parseInt(i+1));
    console.log('Notas: '+ notasAluno);

    for(c=0; c < notasAluno.length; c++){
        nota += notasAluno[c];
    }

    media = nota/4;

    if(media >= 7){
        resultado = 'aprovado';
    } else{
        resultado = 'reprovado';
    }

    console.log('Media: '+media+' - '+resultado);
}

* while ([condicao]){
    [execucao]
}

var contador = 0;
while(contador < 10){
    console.log(contador);
    contador++;
}

var hora = 24;
while(hora > 0){
    console.log(hora);
    hora--;
}
console.log('total de horas: ' +hora);


* do{
    [execucao]
} while([condicao])


## Funções

- Evitar repetição de código
- Realizar chamadas dinâmicas de algoritmos

function calculoMedia(notas){

    let soma=0;
    for(c=0; c < notas.length; c++){
        soma += notas[c];
    }

    media = soma/notas.length;
    
    return media;
}

let media; //escopo global

function aprovacao(notas){

    let media = calculoMedia(notas); //escopo da funcao    
    let condicao = media >= 7 ? 'aprovado' : 'reprovado';

    return condicao;
}

// console.log()*

//console.log('Média: ' +calculoMedia([8,8]))
console.log(aprovacao([8, 8] ) )

//console.log('Média: ' +calculoMedia([7, 5, 5, 9, 10, 3]))
console.log(aprovacao([7, 5, 5, 9, 10, 3] ) )

//console.log('Média: ' +calculoMedia([7, 8, 8, 9, 4, 6, 6]))
console.log(aprovacao([7, 8, 8, 9, 4, 6, 6] ) )
