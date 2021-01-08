// Hero
document.addEventListener("DOMContentLoaded", function (event) {
  let strong = document.querySelectorAll(".hero strong");
  strong.forEach((item) => {
    item.classList.add("text-shifter-purple-primary");
  });
});

// Features
document.addEventListener("DOMContentLoaded", function (event) {
  let link = document.querySelectorAll(".features .elementor-post__card a");
  link.forEach((item) => {
    item.removeAttribute("href");
  });
});

// Showcase
document.addEventListener("DOMContentLoaded", function (event) {
  let link = document.querySelectorAll(".showcase .elementor-post a");
  link.forEach((item) => {
    item.removeAttribute("href");

    var e = item;
    var d = document.createElement(null);
    d.innerHTML = e.innerHTML;
    e.parentNode.replaceChild(d, e);
  });
});
