// document.addEventListener("DOMContentLoaded", () => {

//   const container = document.getElementById("cartContainer");
//   const totalPriceEl = document.getElementById("totalPrice");

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   function renderCart() {
//     container.innerHTML = "";
//     let total = 0;

//     if (cart.length === 0) {
//       container.innerHTML = "<p>Your cart is empty 😢</p>";
//       totalPriceEl.textContent = "0";
//       return;
//     }

//     cart.forEach((item, index) => {
//       total += item.price * item.qty;

//       container.innerHTML += `
//         <div class="cart-item">
//           <img src="${item.img}">
//           <div class="cart-info">
//             <h3>${item.name}</h3>
//             <p>Price: $${item.price}</p>
//             <p>Qty: ${item.qty}</p>
//             <button onclick="removeItem(${index})">Remove</button>
//           </div>
//         </div>
//       `;
//     });

//     totalPriceEl.textContent = total;
//   }

//   window.removeItem = index => {
//     cart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     renderCart();
//   };

//   renderCart();
// });

// 2.js


// let qty = 3;
// const price = 78;
// const delivery = 10;

// function changeQty(val) {
//   qty += val;
//   if (qty < 1) qty = 1;
//   document.getElementById("qty").innerText = qty;
//   updateBill();
// }

// function updateBill() {
//   let subtotal = price * qty;
//   let gst = subtotal * 0.18;
//   let total = subtotal + gst + delivery;

//   document.getElementById("subtotal").innerText = subtotal.toFixed(2);
//   document.getElementById("gst").innerText = gst.toFixed(2);
//   document.getElementById("total").innerText = total.toFixed(2);
// }

// updateBill();


// 3.js

let price = 78;
let qty = 1;
const delivery = 10;
const gstRate = 0.18;

function updateCart() {
  document.getElementById("qty").innerText = qty;

  let subtotal = price * qty;
  let gst = subtotal * gstRate;
  let total = subtotal + gst + delivery;

  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("gst").innerText = gst.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}

function increaseQty() {
  qty++;
  updateCart();
}

function decreaseQty() {
  if (qty > 1) {
    qty--;
    updateCart();
  }
}

function removeItem() {
  document.querySelector(".cart-container").innerHTML =
    "<h2 style='text-align:center;'>Your cart is empty</h2>";
  document.querySelector(".summary-box").style.display = "none";
}

updateCart();
