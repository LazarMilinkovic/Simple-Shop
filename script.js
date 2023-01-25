let totalPrice = 0;
const totalElement = document.querySelector(".total-price");
const cartElement = document.querySelector(".cart-items");
let itemTotalPrice = 0;

const addToCart = (btn) =>{
  const item = btn.closest(".single-item");
  const itemName = item.querySelector("h3").innerText;
  const stringPrice = item.querySelector(".price").innerText;
  const price = parseInt(stringPrice.substring(1));
  const quantity = parseInt(item.querySelector("input").value);
  const inputElement = item.querySelector("input");

  if(quantity > 0){

    itemTotalPrice = quantity * price;
    totalPrice = totalPrice + itemTotalPrice;
    totalElement.innerHTML = `Total: $${totalPrice}`;
    cartElement.innerHTML += `<div class = "cart-single-item">
                                <h3>${itemName}</h3>
                                <p>${stringPrice} * ${quantity} = $<span>${itemTotalPrice}</span></p>
                                <button onClick="removeFromCart(this)">Remove</button>
                              </div>`
    item.querySelector("input").setAttribute("disabled","true")
    item.querySelector("input").value = quantity;
    item.querySelector("button").setAttribute("disabled","true");
    item.querySelector("button").innerText = "Added";
    
  }
  else{
    console.error(`You can not add 0 ${itemName}s.`);
  }
}

const removeFromCart = (btn) => {
  const item = btn.closest(".cart-single-item");
  const itemName = item.querySelector("h3").innerText;
  const price = parseInt(item.querySelector("span").innerText);
  const products = document.querySelectorAll(".single-item");
  itemTotalPrice -= price;
  totalElement.innerText = `Total: $${itemTotalPrice}`;
  item.remove();
  products.forEach((product) => {
    const name = product.querySelector("h3").innerText;
    if(name === itemName){
      product.querySelector("input").value = 0;
      product.querySelector("input").removeAttribute("disabled");
      product.querySelector("button").innerText = "Add";
      product.querySelector("button").removeAttribute("disabled");
    }
  });
}