alert("JS Loaded");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show success message
    successMsg.classList.add("show");

    // Reset form
    form.reset();

    // Hide message after 3 seconds
    setTimeout(() => {
      successMsg.classList.remove("show");
    }, 3000);
  });
});
