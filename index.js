let books = [];

const row = document.querySelector(".row");
      

window.onload = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
          .then((response) => response.json())
          .then((allProducts) => {
            books = allProducts;
            displayProducts(allProducts);
          })
          .catch((err) => {
            console.log(err);
          });
      }

      const displayProducts = (allProducts) => {
        row.innerHTML = allProducts
          .map(
            (books) => `
              <div id="book-wrap" class="col-12 col-sm-6 col-md-3">
                  <div class="card">
                      <img src="${books.img}" class="card-img-top img-fluid w=100 object-fit: cover" alt="...">
                      <div class="card-body">
                      <h5 class="card-title">${books.title}</h5>
                      <p class="card-text">${books.price}</p>
                      <a href="#" class="btn btn-primary" onClick="selected()">Add to Cart</a>
                      <a href="#" class="btn btn-secondary">Skip</a>
                      </div>
                  </div>
              </div>
          `
          )
          .join("");
      }

      const selected = () => {
          document.getElementById("book-wrap").style.border = "1px solid red"
      }