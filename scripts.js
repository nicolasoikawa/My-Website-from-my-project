const botao = document.querySelector('.botao-menu')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const slider = document.querySelector('.slider')
const background = document.querySelector('.background')
const slides = document.querySelector('.slider')
const radios = document.querySelectorAll('input[name="slider"]')


botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    slider.classList.toggle('ativo')
    background.classList.toggle('ativo')
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#fff';
})

background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo')
    botao.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    slider.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = '#fff';
})

let count= 1;
let intervalo;

document.getElementById("radio1").checked = true;

function iniciarSlider() {
  intervalo = setInterval(() => {
    document.getElementById('radio' + count).checked = true;
    count++;
    if (count > 4) {
      count = 1;
    }
  }, 5000);
}

function resetarSlider() {
  clearInterval(intervalo);
  iniciarSlider();
}

iniciarSlider();

document.querySelectorAll('.manual-btn').forEach((botao, index) => {
  botao.addEventListener('click', () => {
    count = index + 1;
    resetarSlider();
  });
});