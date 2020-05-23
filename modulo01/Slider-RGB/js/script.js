function changeColor() {
  let red = document.querySelector("#red").value;
  let green = document.querySelector("#green").value;
  let blue = document.querySelector("#blue").value;

  document.querySelector("#input1").value = red;
  document.querySelector("#input2").value = green;
  document.querySelector("#input3").value = blue;

  let color = `rgb(${red}, ${green}, ${blue})`;
  document.querySelector("#cubo").style.background = color;
  document.querySelector(
    "#cubo"
  ).innerHTML = `<span class="tag is-dark">${color}</span>`;
  document.querySelector("span").style.background = color;
}

document.querySelector("#red").addEventListener("input", changeColor);
document.querySelector("#green").addEventListener("input", changeColor);
document.querySelector("#blue").addEventListener("input", changeColor);
