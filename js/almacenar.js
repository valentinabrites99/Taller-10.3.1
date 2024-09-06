let arrayItems = [];

let contenedor = document.getElementById("contenedor");

function showItems(array) {
  contenedor.innerHTML = "";
  array.forEach((item) => {
    contenedor.innerHTML += `<li>${item}</li>`;
  });
}

function modifyArray(item) {
  if (item) {
    arrayItems.push(item);
    localStorage.setItem("array", JSON.stringify(arrayItems));
  } else {
    arrayItems = [];
    localStorage.removeItem("array");
  }
  showItems(arrayItems);
}

let item = document.getElementById("item");
let buttonAdd = document.getElementById("agregar");
buttonAdd.addEventListener("click", () => {
  modifyArray(item.value);
  item.value = "";
});

let buttonClean = document.getElementById("limpiar");
buttonClean.addEventListener("click", () => {
  modifyArray();
});

let data = localStorage.getItem("array");
if (data != null) {
  arrayItems = JSON.parse(data);
  showItems(arrayItems);
}
