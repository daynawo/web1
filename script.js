document.addEventListener('DOMContentLoaded', function() {
  var icon = document.getElementById("icon");
  var list = document.getElementById("list");
  if (icon) {
    icon.addEventListener("click", () => {
      if(!list.classList.contains("animate"))
        {
            icon.style.transform = "rotate(45deg)";
            list.classList.add("animate");
        }
        else{
            icon.style.transform = "rotate(0deg)";
            list.classList.remove("animate");
        }
    });
  }
});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
if (header) {
  var sticky = header.offsetTop;
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
  } else {
      header.classList.remove("sticky");
  }
}

console.log("poop");