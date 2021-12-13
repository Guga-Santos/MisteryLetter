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


function classeAlea(classe, tamanho) {
  const numero = Math.floor(Math.random() * tamanho);
  return classe[numero];
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
    for(let index = 0; index < 3; index += 1){ 
      const teste = Math.floor(Math.random() * todasClasses.length);
      const novaClasse = todasClasses[teste]
      span.classList.add(novaClasse)
    }
      cartaGerada.appendChild(span);
    }
  }
  document.querySelector('#carta-contador').innerText = cartaGerada.childElementCount;
});

const cartaTexto = document.querySelector('#carta-texto');
cartaTexto.addEventListener('click', () => {
  document.querySelector('#carta-texto').value = '';
});
const teste = document.querySelector('.teste').classList;
cartaGerada.addEventListener('click', (e) => {
   if(e.target.classList != teste) { 
  e.target.classList = ''
  for(let index = 0; index < 4; index += 1){ 
    const novaClasse = todasClasses[Math.floor(Math.random() * todasClasses.length)]
    e.target.classList.add([novaClasse])
}
}
});

// const local = document.querySelector('.teste').children

// cartaGerada.addEventListener('click', (e) => {
//  for (var i = 0; i < local.length; i += 1) {
//    local[i].classList = ''
//    for(let index = 0; index < 3; index += 1){ 
//         const novaClasse = todasClasses[Math.floor(Math.random() * todasClasses.length)]
//         local[i].classList.add([novaClasse])
//    }
//  }
// })

// cartaGerada.addEventListener('click', (e) => {
//     // e.target.classList = ''
//     e.target.classList.add(todasClasses[Math.floor(Math.random() * todasClasses.length)])
//      })