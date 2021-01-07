// Hero
document.addEventListener("DOMContentLoaded", function (event) {
  let strong = document.querySelectorAll(".hero strong");
  strong.forEach((item) => {
    item.classList.add("text-shifter-purple-primary");
  });
});

// Features
document.addEventListener("DOMContentLoaded", function (event) {
  let link = document.querySelectorAll(
    ".features .elementor-post__thumbnail__link, .features .elementor-post__title"
  );
  link.forEach((item) => {
    item.removeAttribute("href");
  });
});

// Showcase
document.addEventListener("DOMContentLoaded", function (event) {
  let link = document.querySelectorAll(
    ".showcase .elementor-post__thumbnail__link, .showcase .elementor-post__title"
  );
  link.forEach((item) => {
    item.removeAttribute("href");
  });
});
