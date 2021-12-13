const criarButton = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const classeEstilo = [' newspaper', ' magazine1', ' magazine2'];
const classeTamanho = [' medium', ' big', ' reallybig'];
const classeRotacao = [' rotateleft', 'rotateright'];
const classeInclinacao = [' skewleft', ' skewright'];

function numeroAleatorio() {
    const numero = Math.floor(Math.random() * 4)
    return numero
}


criarButton.addEventListener('click', () => {
  cartaGerada.innerHTML = '';
  const texto = document.querySelector('#carta-texto').value;
  if (texto.trim() === '') {
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const array = texto.split(' ');
    for (let i = 0; i < array.length; i += 1) {
      const span = document.createElement('span');
      cartaGerada.appendChild(span);
      span.innerText = array[i];
      span.classList += ' ' + classeEstilo[numeroAleatorio()]
      span.classList += ' ' + classeTamanho[numeroAleatorio()]
      span.classList += ' ' + classeRotacao[numeroAleatorio()]
      span.classList += ' ' + classeInclinacao[numeroAleatorio()]
    }
  }
  
});

const cartaTexto = document.querySelector('#carta-texto');
cartaTexto.addEventListener('click', () => {
    document.querySelector('#carta-texto').value = '';
})