


$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  }
});




// bootstrap carousel code
$('.carousel').carousel()



// top slider code


$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    rtl: true,
    loop: true,
    margin: 10,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 2
      },
      576: {
        items: 2

      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  })
});



$(document).ready(function () {
  $("#btn-toggle").click(function () {
    $("#panel").slideToggle("slow");
  });
});


// mobile navigation code

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


