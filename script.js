const criarButton = document.querySelector('#criar-carta');
const cartaGerada = document.querySelector('#carta-gerada');

criarButton.addEventListener('click', () => {
    cartaGerada.innerHTML = ''
    const texto = document.querySelector('#carta-texto').value
    if(texto.trim() === '') {
        // let span = document.createElement('span');
        // cartaGerada.appendChild(span)
        // span.innerText = 
        cartaGerada.innerText = "Por favor, digite o conteúdo da carta."
    } else {
    const array = texto.split(" ")
    for(let i = 0; i < array.length; i += 1) {
        let span = document.createElement('span');
        cartaGerada.appendChild(span)
        span.innerText = array[i]
    }
    }
    document.querySelector('#carta-texto').value = ''
})