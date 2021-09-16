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
              <div class="col-12 col-sm-6 col-md-3">
                  <div class="card">
                      <img src="${books.img}" class="card-img-top" alt="...">
                      <div class="card-body">
                      <h5 class="card-title">${books.title}</h5>
                      <p class="card-text">${books.price}</p>
                      <a href="#" class="btn btn-primary">Add to Cart</a>
                      <a href="#" class="btn btn-secondary">Skip</a>
                      </div>
                  </div>
              </div>
          `
          )
          .join("");
      }