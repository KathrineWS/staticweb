const url = "https://kea-alt-del.dk/t7/api/products/2801";

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

  const parent = document.querySelector("main");

  parent.appendChild(copy);
}

/* <article class="smallProduct">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/1000/2801.webp"
            alt="Sahara Team India Fanwear Round Neck Jersey"
          />
          <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
          <p>Price</p>
          <p class="priceItem"><span>Prev.</span>" DKK 895,-"</p>
          <div class="discount">
            <p>Now DKK 860,-</p>
            <p>-34%</p>
          </div>
          <a href="productlist.html">Read more</a>
        </article> */
