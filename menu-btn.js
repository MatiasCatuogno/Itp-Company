// Header Menu Btn
document.getElementById("menu-btn").addEventListener("click", menubtn);

function menubtn() {
 var layers = document.querySelectorAll(".menu-btn span");
 var ul = document.querySelector(".nav-bar-ul");
 layers.forEach((layers) => {
  layers.classList.toggle("active");
 });
 if (ul.classList.contains("show")) {
  return ul.classList.remove("show");
 } else {
  return ul.classList.add("show");
 }
};