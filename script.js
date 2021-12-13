const criarButton = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const todasClasses = ['newspaper',
'magazine1',
'magazine2',
'medium',
'big',
'reallybig',
'rotateleft',
'rotateright',
'skewleft',
'skewright'];
// const classeEstilo = [' newspaper ', ' magazine1 ', ' magazine2 ', '', ' magazine3 ', ' magazine4 ', ' magazine5 '];
// const classeTamanho = [' medium ', ' big ', ' reallybig ', ''];
// const classeRotacao = [' rotateleft ', ' rotateright ', ''];
// const classeInclinacao = [' skewleft ', ' skewright ', ''];

function classeAlea(classe, tamanho) {
  const numero = Math.floor(Math.random() * tamanho);
  return classe[numero];
}

function numeroAleatorio() {
  const numero = Math.floor(Math.random() * 10);
  return numero;
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
      span.appendChild(document.createTextNode(array[i]));
    //   span.innerText = array[i];
      const teste = Math.floor(Math.random() * todasClasses.length);
      const novaClasse = todasClasses[teste]
      span.classList.add(novaClasse)
      cartaGerada.appendChild(span);
    //   const listaDeClasses = [classeAlea(classeEstilo, 7), classeAlea(classeTamanho, 4), classeAlea(classeRotacao, 3), classeAlea(classeInclinacao, 3)];
    //   span.classList += listaDeClasses;
    }
  }
  document.querySelector('#carta-contador').innerText = cartaGerada.childElementCount;
});

const cartaTexto = document.querySelector('#carta-texto');
cartaTexto.addEventListener('click', () => {
  document.querySelector('#carta-texto').value = '';
});
// const teste2 =  + " " + classeAlea(todasClasses, 9)
// const teste3 = 

cartaGerada.addEventListener('click', (event) => {
  event.target.classList = '';
  event.target.classList += classeAlea(todasClasses, 9)
});
