# Javascript
- Estado do JS (https://2022.stateofjs.com/en-US/)
- Onde é executado
- Omnipresente na web
- Apps híbridos
- Aplicaçõa de ponta-a-ponta: banco de dados, back-end / front-end
- Interagir com DOM (api-web)
- Requisições dinâmicas
- IoT (Internet das coisas): o JS está presente em tudo
- ECMAScript

## Fundamentos JS
- Fundamentos do Javascript são essenciais para avançar no desenvolvimento de aplicações modernas, é a base de diversos frameworks
- Neste curso evoluímos da base para o topo
- É melhor que começar na frente e precisar retornar a base

## Metodologia
- Método progressivo e integrado
- Todo arranha céu só é erguido depois de ter uma fundação robusta e segura
- Neste curso apresentamos conceitos de modo progressivo, seguindo uma linha de evolução
- Começamos simples e vamos aumentando a complexidade
- Além da especialização, aprendemos a integrar com diversas possibilidades

## Lógica de Programação
| - Computador:
|   -- Máquina que extrai dados
|   -- Processar: realizar operações nos dados de entrada
| - Dado: é o que pode ser processado
| - Informação: resultado do processamento
| - Processamento de dados: Entrada (dados) > Processamento > Saída (informação)
|
| E a lógica?
| Lógica é aquilo que faz sentido
|
| Como escrever um programa?
| - Aplicar a lógica para descrever os passos para resolver um problema em ordem de execução
|
| A lógica de programação
| - É a técnica de sequenciar pensamentos, passos, fluxo de dados para atingir um objetivo: a informação
| - A sequencia de passos, instruções que o computador deve seguir é conhecida como *algoritmo*
| 
| Algoritmo
| - Sequência lógica e finita de instruções que resolvem um problema
| - Exemplo: receita de bolo, manual de instrução
| - Nem todo algoritmo é um programa de computador, mas todo programa de computador é algoritmo
| - Quem viabiliza o funcionamento dos algoritmos nos computadores: linguagens de programação

### Algoritmo para calcular a média de 3 números
1. Inicio;
2. Receber o primeiro número: 1;
3. Receber o segundo número: 2;
4. Receber o terceiro número: 3;
5. Processamento: Somar os 3 números recebidos e dividir por três: (entrada 1 + entrada 2 + entrada 3) / 3;
6. Exibir o resultado: print, echo, console.log;
7. Fim;

### Torre de Hanoi
- Mover todos os discos para a direita, com o menor número de movimentos possíveis, sem colocar um disco em cima de um disco menor: https://www.somatematica.com.br/jogos/hanoi
- Jogos: https://www.somatematica.com.br/jogos.php

## Funcionalidades Gerais
- Criar algoritmos e programas para executar no navegador: Client side
- Manipular o DOM: elementos HTML, eventos (clique, submit, scroll...), estilos CSS
- Node.js: framework JS para back-end / runtime em JS
- Mongo.db / GraphQL: banco de dados em JS
- React / Vue.js / Angular: framework JS para desenvolvimento web / mobile
- React Native: framework JS para desenvolvimento mobile

- Recebe e manipula dados
- Toma decisões baseadas na lógica computacional
- Loop e interações
- Condições de saída (Não ter uma condição de saída poderá acarretar em um crash, pois o computador irá chegar ao limite de sua memória ram e armazenamento)

### Executar o JS
- Console browsers
- Editores: Sublime, Visual Studio Code
- JS Fiddle https://jsfiddle.net/

### Instalação do Node.js
- Para a gente conseguir executar scripts JS no terminal de comando, precisamos utilizar o Node.js
- Instalação: https://nodejs.org/en/download

* Windows: Primeiro instalar o Chocolatey
- Precisa executar o PowerShell como administrador
- Se tudo der certo na instalação do Chocolatey, rodar: choco install nvs
- nvs use lts
- $ nvs use lts
PATH -= %LOCALAPPDATA%\nvs\default
PATH += %LOCALAPPDATA%\nvs\node\14.17.0\x64

*MacOS: Primeiro instalar o Homebrew
- Após isso, rodar: brew install node

#### Após concluir a instalação
Rodar em um novo terminal: node -v

## Variáveis
São utilizadas para referenciar espaços na memória

- var (outdated pelo let)
- const (fica com valor imutável)
- let
- string (tipo de variável para conjunto de caracteres)
- tipagem: número ou string
- array (conjunto de valores)

## Operadores
- Soma +
- Subtração -
- Multiplicar *
- Dividir /
- Módulo (resto de divisão) %
- Math: random(), round(), sqrt().

* Atribuição
a = b ('a' recebe o valor da variável 'b')
a += b ('a' soma seu valor com o valor de 'b' e apresenta o resultado)
a -= b (abaixo seguem as variantes desse calculo)
a *= b
a /= b
a %= b

Adiciona 1 unidade: ++
Subtrai 1 unidade: --

* Operadores de Comparação / Lógicos
- Igual: == ou ===
- Diferente: !=
- Maior que >
- Maior ou igual >=
- Menor que <
- Menor ou igual <=

Para consultar: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators