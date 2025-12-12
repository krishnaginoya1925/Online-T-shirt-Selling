document.addEventListener("DOMContentLoaded", () => {
  const wishBtns = document.querySelectorAll(".wishlist-btn");

  wishBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const name = btn.dataset.name;
      const img = btn.dataset.img;
      const price = btn.dataset.price;

      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      // Check duplicate using ID
      const exists = wishlist.some(item => item.id === id);

      if (!exists) {
        wishlist.push({ id, name, img, price });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        const icon = btn.querySelector("i");
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");

        alert("Added to Wishlist ❤️");
      } else {
        alert("Already Added to Wishlist!");
      }
    });
  });
});
