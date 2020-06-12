window.addEventListener('load', start);

const clickArray = [];


function start() {
  const button = document.querySelector('#clickButton');
  const ul = document.querySelector('ul');

  handleButtonClick(button, ul);
}

function handleButtonClick(button, ul) {
  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerHTML = new Date();
    clickArray.push(ul.appendChild(li));
  });
}
