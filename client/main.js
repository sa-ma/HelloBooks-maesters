const navToggle = () => {
  const navs = document.querySelectorAll(".navbar-items");
  navs.forEach(nav => nav.classList.toggle("navbar-toggleshow"));
};

document.querySelector(".navbar-toggle").addEventListener("click", navToggle);
