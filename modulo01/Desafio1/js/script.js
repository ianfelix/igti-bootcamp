let allPeople = null;
let imagePeople = null;

function start() {
  //api
  getData(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
}

//pegando dados da api
async function getData(url) {
  const response = await fetch(url);
  const dataJson = await response.json();
  // variável com os dados das pessoas
  const data = dataJson.results;
  data.map((user) => {
    const { name, gender, age, picture } = user;

    allPeople = name;
  });
}

console.log(allPeople);

start();
