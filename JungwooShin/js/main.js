slideshow.call_js

function call_js() {
    fixheader() 
  };
  
  var header = document.getElementById("header");
  var sticky = header.offsetTop;
  
  function fixheader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }