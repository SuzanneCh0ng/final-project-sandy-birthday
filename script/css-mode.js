document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("btn-mode");
  toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("darkmode");

    let slideshow_btns = document.getElementsByClassName("slideshow_btn");
    for (var i = 0; i < slideshow_btns.length; i++) {
      slideshow_btns[i].classList.toggle("darkmode");
    }
  });
});
