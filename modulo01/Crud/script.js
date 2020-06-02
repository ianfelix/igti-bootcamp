window.addEventListener('load', start);

let globalNames = [];
let inputName = null;

function start() {
  inputName = document.querySelector('#inputName');
  preventFormSubmit();
  activateInput();
}

// previnir o carregamento da página.
function preventFormSubmit() {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => event.preventDefault());
}

function activateInput() {
  // coloca o foco no input text quando a página carrega.
  inputName.focus();
  // ouve a tecla enter e captura o valor do input
  inputName.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const typedName = event.target.value;
      globalNames.push(typedName);
      render();
    }
  });
}

// cria uma lista e coloca os nomes conforme o tamanho do array
function render() {
  let divNames = document.querySelector('#names');
  divNames.innerHTML = '';
  let ul = document.createElement('ul');
  ul.classList.add('ml-4');
  ul.classList.add('list-unstyled');

  for (let i = 0; i < globalNames.length; i++) {
    const currentName = globalNames[i];
    let li = document.createElement('li');
    li.innerHTML = `<button>x</button> ${currentName}`;

    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
  deleteNames();
}

//vai limpar o input text e depois focar ele.
function clearInput() {
  inputName.value = '';
  inputName.focus();
}

//seleciona o botão e exclui
function deleteNames() {
  const button = document.querySelectorAll('button');
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', () => {});
  }
}
