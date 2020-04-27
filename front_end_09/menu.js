window.onscroll = function() {stickToTop()};
let header = document.getElementById("head");
let sticky = header.offsetTop;
function stickToTop() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}