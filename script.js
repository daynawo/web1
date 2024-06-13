document.addEventListener('DOMContentLoaded', function() {
  var icon = document.getElementById("icon");
  var list = document.getElementById("list");
  if (icon) {
      icon.addEventListener("click", () => {
          if (!list.classList.contains("animate")) {
              icon.style.transform = "rotate(45deg)";
              list.classList.add("animate");
          } else {
              icon.style.transform = "rotate(0deg)";
              list.classList.remove("animate");
          }
      });
  }
});

// When the user scrolls the page, execute myFunction
window.addEventListener('scroll', function() {
  var header = document.querySelector('.sticky-header');
  if (window.scrollY > 0) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});
