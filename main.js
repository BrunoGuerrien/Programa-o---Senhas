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
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function geraSenha () {
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * letrasMaiusculas.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha += letrasMaiusculas[numeroAleatorio];
    }
    campoSenha.value = senha;
}
