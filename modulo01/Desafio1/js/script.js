window.addEventListener("load", () => {
  doFind();
  doEach()
});

function doFind() {
  const findperson = people.results.some((person) => {
    return person.location.city === "São Paulo";
  });
  console.log(findperson);
}

function doEach() {

console.log(people.map((person => person.)))
}