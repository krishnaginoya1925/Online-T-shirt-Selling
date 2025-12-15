const delivery = 10;
const gstRate = 0.18;

document.addEventListener("click", function (e) {

  // INCREASE QTY
  if (e.target.classList.contains("plus")) {
    const qtySpan = e.target.parentElement.querySelector(".qty");
    qtySpan.innerText = parseInt(qtySpan.innerText) + 1;
    updateCart();
  }

  // DECREASE QTY
  if (e.target.classList.contains("minus")) {
    const qtySpan = e.target.parentElement.querySelector(".qty");
    let qty = parseInt(qtySpan.innerText);
    if (qty > 1) {
      qtySpan.innerText = qty - 1;
      updateCart();
    }
  }

  // REMOVE ITEM
  if (e.target.classList.contains("remove-btn")) {
    e.target.closest(".cart-left").remove();
    updateCart();
  }

});

function updateCart() {
  let subtotal = 0;

  document.querySelectorAll(".cart-item").forEach(item => {
    const price = parseFloat(
      item.querySelector(".price").innerText.replace("$", "")
    );
    const qty = parseInt(item.querySelector(".qty").innerText);

    subtotal += price * qty;
  });

  if (subtotal === 0) {
    document.querySelector(".cart-right").style.display = "none";
    document.querySelector(".cart-layout").innerHTML =
      "<h2 style='text-align:center;'>Your cart is empty</h2>";
    return;
  }

  const gst = subtotal * gstRate;
  const total = subtotal + gst + delivery;

  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  document.getElementById("gst").innerText = gst.toFixed(2);
  document.getElementById("total").innerText = total.toFixed(2);
}

function goToCheckout() {
  window.location.href = "checkout.html";
}

updateCart();
