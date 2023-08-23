const menu = document.querySelector(".menu");
const menuItem = menu.querySelector(".items");

menu.addEventListener("click", (event) => {
  menuItem.classList.toggle("hidden");
});
