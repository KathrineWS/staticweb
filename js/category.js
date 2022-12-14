const url = "https://kea-alt-del.dk/t7/api/categories";

fetch(url)
  .then((res) => res.json())
  .then((data) => handleCategory(data));

function handleCategory(data) {
  //console.log(data);

  data.forEach(showCategory);
}

function showCategory(myCategory) {
  //console.log(category);
  const template = document.querySelector("#categoryTemp").content;
  const copy = template.cloneNode(true);
  //document.querySelector("ul .catName").textContent = category;
  //copy.querySelector(".catName").textContent = category;

  copy.querySelector("a").textContent = myCategory.category;
  copy.querySelector("a").href = `product.html?category=${myCategory.category}`;

  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
