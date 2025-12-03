// focus the cursor on the email-address input
const emailField = document.getElementById("email-address-input");
emailField.focus({
  preventScroll: true,
});


 
  const hamburger = document.getElementById("hamburgerMenu");
  const dropdown = document.getElementById("dropdownMenu");

  hamburger.addEventListener("click", () => {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  // Click outside to close
  document.addEventListener("click", function(e){
    if (!hamburger.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });

