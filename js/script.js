let hamburger_icon = document.querySelector(".fa-bars");
let close_icon = document.querySelector(".fa-times");
let content = document.querySelector(".responsive_nav");

close_icon.style.display = "none";

hamburger_icon.addEventListener("click", (e) => {
  content.style.display = "block";
  hamburger_icon.style.display = "none";
  close_icon.style.display = "block";
});

close_icon.addEventListener("click", (e) => {
  content.style.display = "none";
  hamburger_icon.style.display = "block";
  close_icon.style.display = "none";
});
