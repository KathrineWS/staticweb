const url = "https://kea-alt-del.dk/t7/api/products/1164";

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".productname").textContent =
    product.productdisplayname;

  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;

  document.querySelector(".sectioninfo .brandbio").textContent =
    product.brandbio;
  document.querySelector(".sectioninfo .color").textContent =
    product.basecolour;
  document.querySelector(".price").textContent = product.price;
  document.querySelector(".sectioninfo .season").textContent = product.season;
}
