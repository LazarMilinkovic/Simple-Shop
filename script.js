let totalPrice = 0;
const totalElement = document.querySelector(".total-price");
const cartElement = document.querySelector(".cart-items");

const addToCart = (btn) =>{
  const item = btn.closest(".single-item");
  const itemName = item.querySelector("h3").innerText;
  const stringPrice = item.querySelector(".price").innerText;
  const price = parseInt(stringPrice.substring(1));
  const quantity = parseInt(item.querySelector("input").value);
  const inputElement = item.querySelector("input");

  if(quantity > 0){

    let itemTotalPrice = quantity * price;
    totalPrice = totalPrice + itemTotalPrice;
    totalElement.innerHTML = `Total: $${totalPrice}`;
    cartElement.innerHTML += `<div class = "cart-single-item">
                                <h3>${itemName}</h3>
                                <p>${stringPrice} * ${quantity} = $<span>${itemTotalPrice}</span></p>
                                <button onClick="removeFromCart(this)">Remove</button>
                              </div>`
    inputElement.value = quantity;
  }
  else{
    console.error(`You can not add 0 ${itemName}s.`);
  }
}

const removeFromCart = (btn) => {
  const mainElement = btn.closest(".cart-single-item");
  const itemName = mainElement.querySelector("h3");
  const products = document.querySelectorAll(".single-item");
  const price = parseInt(mainElement.querySelector("span").innerText);
  mainElement.remove();

  products.forEach((singeVegeItem) => {
    const name = singeVegeItem.querySelector("h3").innerText;
    if(name === itemName) {
      singeVegeItem.querySelector("input").value = 0;
      singeVegeItem.querySelector("input").removeAttribute("disabled");
      singeVegeItem.querySelector("button").innerText = "Add";
      singeVegeItem.querySelector("button").removeAttribute("disabled");
    }
  });
}