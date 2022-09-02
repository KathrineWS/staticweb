const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("category");
const url = `https://kea-alt-del.dk/t7/api/products?category=${query}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(data) {
  //console.log(data);

  data.forEach(showProduct);
}

function showProduct(product) {
  const template = document.querySelector("#smallProductTemp").content;
  const copy = template.cloneNode(true);
  // document.querySelector(".whatProduct .thisProduct").textContent =
  //   product.category;
  //soldOut onSale
  copy.querySelector(
    ".item"
  ).textContent = `${product.articletype} | ${product.brandname}`;
  copy.querySelector("h2").textContent = product.productdisplayname;
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");

    copy.querySelector(".discount p").textContent =
      (product.price * product.discount) / 100; //"DISCOUNT";
  }
  const parent = document.querySelector("main");
  parent.appendChild(copy);
}

/* <article class="smallProduct">
         
         
          <p>Price</p>
          <p class="priceItem"><span>Prev.</span>" DKK 895,-"</p>
          <div class="discount">
            <p>Now DKK 860,-</p>
            <p>-34%</p>
          </div>
          <a href="productlist.html">Read more</a>
        </article> */
