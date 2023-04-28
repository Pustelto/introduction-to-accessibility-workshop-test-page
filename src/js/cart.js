// const cartBtn = document.getElementById("cart");
// const cartContent = document.getElementById("cart-content");
// const offset = 20;
//
// function toggleCart(e) {
//   const { bottom, right, width } = e.target.getBoundingClientRect();
//   // cartContent.style.jgcc = `${right - width}px`;
//   cartContent.style.top = `${bottom + offset}px`;
//   cartContent.classList.toggle("hidden");
// }
//
// function closeCart(e) { }
//
// cartBtn.addEventListener("click", toggleCart);
// document.addEventListener("click", closeCart);
//
let cartContent = 0;

const addToCartButtons = document.querySelectorAll("[data-js-addtocart]");
console.log(addToCartButtons);
const cartBadge = document.getElementById("cartCount");

addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    cartContent += 1;
    console.log(cartContent);
    if (cartContent > 0) {
      cartBadge.innerHTML = cartContent;
      cartBadge.classList.remove("hidden");
      cartBadge.classList.add("flex");
    }
  });
});
