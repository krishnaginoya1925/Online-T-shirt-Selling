// =======================
// GET CART FROM STORAGE
// =======================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =======================
// ADD PRODUCT TO CART
// =======================
document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        let product = {
            id: this.dataset.id,
            name: this.dataset.name,
            price: this.dataset.price
        };

        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));

        // open cart page
        window.location.href = "cart.html";
    });
});

// =======================
// UPDATE CART COUNT
// =======================
const cartCount = document.getElementById("cartCount");
if (cartCount) {
    cartCount.innerText = cart.length;
}

// =======================
// DISPLAY PRODUCTS ON CART PAGE
// =======================
const cartTable = document.getElementById("cartTable");

if (cartTable) {
    let total = 0;

    cart.forEach((item, index) => {
        let row = cartTable.insertRow();

        row.insertCell(0).innerText = item.name;
        row.insertCell(1).innerText = "$" + item.price;

        row.insertCell(2).innerHTML =
            `<button onclick="removeItem(${index})">Remove</button>`;

        total += parseInt(item.price);
    });

    document.getElementById("total").innerText = "Total: $" + total;
}

// =======================
// REMOVE PRODUCT
// =======================
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}
