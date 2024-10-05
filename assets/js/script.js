// Ketika hamburger menu diklik menu list nongol
const menuToggle = document.getElementById("menu-toggle");
const menuList = document.getElementById("menu-list");
menuToggle.addEventListener("click", () => {
    menuList.classList.toggle("active")
});