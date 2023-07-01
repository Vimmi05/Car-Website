// Show More Button
  function showMore() {
    var moreImages = document.getElementsByClassName("more-images");
    var showMoreBtn = document.getElementById("showMoreBtn");

  
    for (var i = 0; i < moreImages.length; i++) {
      if (moreImages[i].style.display === "none") {
        moreImages[i].style.display = "flex";
        showMoreBtn.textContent = "Show Less";
      } else {
        moreImages[i].style.display = "none";
        showMoreBtn.textContent = "Show More";
      }
    }
  }

// Slides for testimonials 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


