let api = fetch("https://fakestoreapi.com/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let output = "";
    data.map(function (giphy) {
      output += `
                <li> 
                <div class="product">
                <a href="moreInfo.html?${giphy.id}">
                <img src="${giphy.image}">
                <h2 class="title">${giphy.title}</h2>
                <p class= "price">
                <span>${giphy.price}</span>
                <span> \u20B9</span>  
                </p>
                </a>
                </div>
                </li>
            `;
    });
    document.getElementById("results").innerHTML = output;
  })
  .catch((err) => {
    console.log(err);
  });
