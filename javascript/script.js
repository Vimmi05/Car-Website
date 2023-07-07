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
var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 2500); 
  }

//brands-swipe
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Vehicle Search
    const myButton = document.getElementById("myButton");
    const myPopup = document.getElementById("myPopup");
    const closePopup = document.getElementById("closePopup");

    myButton.addEventListener("click", function () {
    myPopup.style.display = "block";
    });
    closePopup.addEventListener("click", function () {
    myPopup.style.display = "none";
    });
    window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
    myPopup.style.display = "none";
    }
    });

//Number plate search
    const numberPlateButton = document.getElementById("numberPlateButton");
    const numberPlatePopup = document.getElementById("numberPlatePopup");
    const closeNoPopup = document.getElementById("closeNoPopup");

    numberPlateButton.addEventListener("click", function () {
    numberPlatePopup.style.display = "block";
    });

    closeNoPopup.addEventListener("click", function () {
    numberPlatePopup.style.display = "none";
    });
          
    window.addEventListener("click",function(event){
    if(event.target == numberPlatePopup){
    numberPlatePopup.style.display = "none";
    }
    });
          

