window.addEventListener("load", () => {
  doFetch();
});

let allPeople = [];

async function doFetch() {
  const responseData = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );

  const jsonData = await responseData.json();
  // variável recebe dados da api
  allPeople = await jsonData.results;
}
