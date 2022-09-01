const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleCategory(data));

function handleCategory(data) {
  //console.log(data);

  data.forEach(showCategory);
}

function showCategory(category) {
  console.log(category);
  const template = document.querySelector("#categoryTemp").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h1").textContent = category;

  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
