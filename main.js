const numeroSenha = document.querySelector('.parametro-senha_texto');
const botoes = document.querySelectorAll('.parametro-senha_botao');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

function diminuiTamanho () {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;}
        numeroSenha.textContent = tamanhoSenha;
        geraSenha ()
}

function aumentaTamanho () {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;}
        numeroSenha.textContent = tamanhoSenha;
        geraSenha ()
}

botoes [0].onclick = diminuiTamanho;
botoes [1].onclick = aumentaTamanho;

const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
for (i=0; i < checkbox.length; i++){
    checkbox [i].onclick = geraSenha;
}

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?&$';

function geraSenha () {
let alfabeto = '';
if (checkbox[0].checked) {
    alfabeto = alfabeto + letrasMaiusculas;
}
if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
}
console.log(alfabeto);
let senha = '';
for (let i=0; i < tamanhoSenha; i++) {
   let numeroAleatorio = Math.random()*alfabeto.length;
   numeroAleatorio = Math.floor(numeroAleatorio);
   senha = senha + alfabeto[numeroAleatorio];
}
campoSenha.value = senha;
}

