/* Implementing Pop Up Form Functionality */
$(document).ready(function () {
  $("#contactUsButton").click(function () {
    $("#contactFormModal").modal("show");
  });
});

/* Handling Project's Image Functionality */
$(document).ready(function () {
  $(".project-item").on("click", function () {
    var imageSrc = $(this).data("image");
    $("#projectImage img").attr("src", imageSrc);

    $(".project-item").removeClass("active");
    $(this).addClass("active");
  });
});

/* Image Slider Functionality */
var slider = document.querySelector(".slider");
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var currentSlide = 0;
const interval = 3000;

function changeSlide(n) {
  if (n !== undefined) {
    currentSlide = n;
  } else {
    currentSlide = (currentSlide + 1) % slides.length;
  }
  updateSlider();
  resetTimer();
}

function updateSlider() {
  slider.style.transform =
    "translateX(" + (-currentSlide * 100) / slides.length + "%)";
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(changeSlide, interval);
}

var timer = setInterval(changeSlide, interval);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => changeSlide(index));
});
