function calcularMedia(notas){

    let soma = 0;
    for(c=0; c<notas.length; c++){
        soma += notas[c];
    }

    media = soma / notas.length;
    return media;
}

let media; //escopo global

function aprovacao(notas){

    let media = calcularMedia(notas); //escopo da função

    let condicao = media >= 8 ? "Aprovado" : "Reprovado";

    return 'Média: ' +media+ ' - Resultado: ' +condicao;
}

//Contagem Regressiva
function contagemRegressiva(numero){

    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}

/*
    Formulário envio de dados para cálculo de média
*/

const formulario1 = document.getElementById('formulario01');

if(formulario1)
    formulario1.addEventListener('submit', function(evento){

    evento.preventDefault();
    evento.stopPropagation();
    
    if(this.getAttribute('class').match(/erro/)){
        return false;
    }

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()){
        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; //é um número

        if(!isNaN(numero)){
            notas.push(numero);
        }
    }

    console.log(notas);
    texto = aprovacao(notas);

    document.getElementById('resultado').innerHTML = texto;
});

function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em destaque';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        } else{
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    });
}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != '' && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else{
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em destaque';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

function validaEmail(elemento){
    
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

        if(this.value.match(emailValido)){
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else{
            document.querySelector('.mensagem').innerHTML = 'verifique o preenchimento dos campos em destaque';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

function validaCep(elemento){

    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        const regexCep = /^\d{5}-\d{3}$/;

        if(this.value.match(regexCep)){
            document.querySelector('.mensagem').innerHTML = '';
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else{
            document.querySelector('.mensagem').innerHTML = 'Cep inválido. O formato deve ser XXXXX-XXX. ';
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    });
}

function formatarCEP() {
    const cepInput = document.getElementById('cepInput');

    // Remove caracteres não numéricos
    const cepFormatado = cepInput.value.replace(/\D/g, '');

    // Adiciona o hífen se necessário
    if (cepFormatado.length >= 5) {
      cepInput.value = cepFormatado.slice(0, 5) + '-' + cepFormatado.slice(5, 8);
    } else {
      cepInput.value = cepFormatado;
    }
}

document.getElementById('cepInput').addEventListener('input', function(event) {
    formatarCEP(); // Chama a função para formatar o CEP enquanto o usuário digita
});

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');
let camposCep = document.querySelectorAll('input.cep')

for(let emFoco of camposObrigatorios){
    validaCampo(emFoco);
}

for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco);
}

for(let emFoco of camposEmail){
    validaEmail(emFoco);
}

for(let emFoco of camposCep){
    validaCep(emFoco);
}