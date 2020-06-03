import fs from 'fs';

const cityFile = 'modulo02/trabalho-pratico-2/Cidades.json';
const stateFile = 'modulo02/trabalho-pratico-2/Estados.json';

function readState() {
  fs.readFile(stateFile, function dataStatef(err, data) {
    const dataState = JSON.parse(data);
    creatFile(dataState);
    console.log(dataState);
    return dataState;
  });
}

function readCity() {
  fs.readFile(cityFile, function dataCityf(err, data) {
    const dataCity = JSON.parse(data);

    return dataCity;
  });
}

async function creatFile(arrayState) {
  for (let i = 0; i < arrayState.length; i++) {
    fs.writeFile(
      `modulo02/trabalho-pratico-2/city/${arrayState[i].Sigla}.json`,
      '',
      (err) => {
        console.log(err);
      }
    );
  }
}

function stateAndCity(cityNumber, id) {
  for (let i = 0; i < cityNumber.length; i++) {
    if (cityNumber[i].Estado === id[i].ID) {
    }
  }
}

readCity();
readState();
stateAndCity(readCity(), readState());
