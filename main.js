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
    var d = document.createElement("span");
    d.innerHTML = e.innerHTML;
    e.parentNode.replaceChild(d, e);
  });
});

// Post Info
document.addEventListener("DOMContentLoaded", function (event) {
  let link = document.querySelectorAll(".elementor-post-info a");
  link.forEach((item) => {
    item.removeAttribute("href");
    var e = item;
    var d = document.createElement("span");
    d.innerHTML = e.innerHTML;
    e.parentNode.replaceChild(d, e);
  });
});

// Team
document.addEventListener("DOMContentLoaded", function (event) {
  let link = document.querySelectorAll(".team .elementor-post a");
  link.forEach((item) => {
    item.removeAttribute("href");
  });
});

// Popup
document.addEventListener("DOMContentLoaded", function (event) {
  const close = document.querySelectorAll(".close-popup");
  jQuery(document).on("click", ".close-popup", function (event) {
    elementorProFrontend.modules.popup.closePopup({}, event);
  });
});

// Post Tags
document.addEventListener("DOMContentLoaded", function (event) {
  const link = document.querySelectorAll(".post-tags a");
  link.forEach((item) => {
    // Remove links
    item.removeAttribute("href");
    var e = item;
    var d = document.createElement("span");
    d.innerHTML = e.innerHTML;
    e.parentNode.replaceChild(d, e);
  });

  // Add classes
  const tag = document.querySelectorAll(".post-tags");
  tag.forEach((item) => {
    item.classList.add(
      "font-weight-strong",
      "font-size-4",
      "text-shifter-gray-500",
      "text-transform-lowercase"
    );
  });
});

// Post Navigation
document.addEventListener("DOMContentLoaded", function (event) {
  let nav = document.querySelectorAll(".elementor-post-navigation");
  nav.forEach((item) => {
    item.classList.add("font-weight-strong", "font-size-6");
  });
});
