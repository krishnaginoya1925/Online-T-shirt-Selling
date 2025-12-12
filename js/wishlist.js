// Load wishlist from localStorage
let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || [];

let container = document.getElementById("wishlistBox");

// Display items on page
function loadWishlist() {
    container.innerHTML = "";

    if (wishlistData.length === 0) {
        container.innerHTML = "<h2 style='grid-column: 1/-1; text-align:center;'>No items in wishlist</h2>";
        return;
    }

    wishlistData.forEach(item => {
        container.innerHTML += `
            <div class="wishlist-item" id="item-${item.id}">
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>₹ ${item.price}</p>
                <button class="remove-btn" onclick="removeItem('${item.id}')">Remove</button>
            </div>
        `;
    });
}

// Remove only selected item
function removeItem(id) {
    wishlistData = wishlistData.filter(item => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(wishlistData));

    // Remove item from UI
    document.getElementById("item-" + id).remove();

    // If no items left → show message
    if (wishlistData.length === 0) {
        container.innerHTML = "<h2 style='grid-column: 1/-1; text-align:center;'>No items in wishlist</h2>";
    }
}

// Initial Load
loadWishlist();
