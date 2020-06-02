import fs from 'fs';

let dataCity = [];
let dataState = [];

//Lê o arquivo city
fs.readFile(
  'modulo02/trabalho-pratico-2/Cidades.json',
  'utf-8',
  (err, data) => {
    dataCity = JSON.parse(data);
    amountCity(dataCity);
  }
);

//lê o arquivo Estado.json e transforma em um array
fs.readFile(
  'modulo02/trabalho-pratico-2/Estados.json',
  'utf-8',
  (err, data) => {
    dataState = JSON.parse(data);
    //função recebe como parâmetro o array dos estados
    arrayState(dataState);
    console.log(dataState[i].ID);
  }
);

//cria um arquivo .json para cada estado
function arrayState(estados) {
  for (let i = 0; estados.length; i++) {
    fs.appendFile(
      `modulo02/trabalho-pratico-2/city/${estados[i].Sigla}.json`,
      '',
      (err) => {
        console.log(err);
      }
    );
  }
}

function amountCity(stateId, stateCity) {
  if (stateCity === stateID) {
  }
}
