document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cartContainer");
  const totalPriceEl = document.getElementById("totalPrice");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    container.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty 😢</p>";
      totalPriceEl.textContent = "0";
      return;
    }

    cart.forEach((item, index) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;

      container.innerHTML += `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}">
          
          <div class="cart-info">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>

            <div class="qty-box">
              <button onclick="changeQty(${index}, -1)">−</button>
              <span>${item.qty}</span>
              <button onclick="changeQty(${index}, 1)">+</button>
            </div>

            <p class="item-total">Item Total: $${itemTotal}</p>

            <button class="remove-btn" onclick="removeItem(${index})">
              Remove
            </button>
          </div>
        </div>
      `;
    });

    totalPriceEl.textContent = total;
  }

  window.changeQty = (index, change) => {
    if (cart[index].qty + change < 1) return;

    cart[index].qty += change;
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  window.removeItem = index => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  };

  renderCart();
});
