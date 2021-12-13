const criarButton = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');
const Estilo = ['newspaper', 'magazine1', 'magazine2'];
const Tamanho = ['medium', 'big', 'reallybig'];
const Rotacao = ['rotateleft', 'rotateright'];
const Inclinacao = ['skewleft', 'skewright'];

const A = Math.floor(Math.random() * 3);
const B = Math.floor(Math.random() * 2);

criarButton.addEventListener('click', () => {
  const texto = document.querySelector('#carta-texto').value;
  cartaGerada.innerHTML = '';
  if (texto.trim() === '') {
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/trim
    cartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const array = texto.split(' ');
    for (let i = 0; i < array.length; i += 1) {
      const span = document.createElement('span');
      span.appendChild(document.createTextNode(array[i]));
      const randomA = (`${Rotacao[B]} ${Inclinacao[B]} ${Tamanho[A]} ${Estilo[A]}`);
      span.classList = randomA;
      cartaGerada.appendChild(span);
    }
  }

  
  document.querySelector('#carta-contador').innerText = cartaGerada.childElementCount;
});
/* Copiei o código ///
const randomA = (`${Rotacao[B]} ${Inclinacao[B]} ${Tamanho[A]} ${Estilo[A]}`) ///
do pull request do Gabriel Pondaco e recebi direcionamento do mesmo para a conclusao do requisito 17.
Já havia feito de quatro maneiras diferentes e não havia obtido resultado favorável. */

function change(e) {
  const A = Math.floor(Math.random() * 3);
  const B = Math.floor(Math.random() * 2);
  e.target.className = `${Rotacao[B]} ${Inclinacao[B]} ${Tamanho[A]} ${Estilo[A]}`;
}
cartaGerada.addEventListener('click', change);

const cartaTexto = document.querySelector('#carta-texto');
cartaTexto.addEventListener('click', () => {
  document.querySelector('#carta-texto').value = '';
});
//
// const teste = document.querySelector('.teste').classList;
// cartaGerada.addEventListener('click', (e) => {
//    if(e.target.classList != teste) {
//   e.target.classList = ''
//   for(let index = 0; index < 4; index += 1){
//     const novaClasse = todasClasses[Math.floor(Math.random() * todasClasses.length)]
//     e.target.classList.add([novaClasse])
// }
// }
// });

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
