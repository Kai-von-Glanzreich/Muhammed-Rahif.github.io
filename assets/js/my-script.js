// Fullpage JS
new fullpage("#fullpage", {
  // Options here
  navigation: true,
  onLeave: () => {
    checkAboutSectionVisiblity();
    $(".section [data-aos]").each((key, elm) => {
      $(elm).removeClass("aos-animate");
    });
  },
  onSlideLeave: () => {
    checkAboutSectionVisiblity();
    $(".slide [data-aos]").each((key, elm) => {
      $(elm).removeClass("aos-animate");
    });
  },
  afterSlideLoad: () => {
    checkAboutSectionVisiblity();
    $(".slide [data-aos]").each((key, elm) => {
      $(elm).addClass("aos-animate");
    });
  },
  afterLoad: () => {
    checkAboutSectionVisiblity();
    $(".section [data-aos]").each((key, elm) => {
      $(elm).addClass("aos-animate");
    });
  },
});

// Typed JS
var typed = new Typed("#i-can", {
  strings: ["Web Developer.", "Web Designer.", "Freelancer."],
  typeSpeed: 100,
  backSpeed: 80,
  smartBackspace: true, // this is a default
  loop: true,
});

var typed1 = new Typed("#typed1", {
  strings: ["Hi there,"],
  typeSpeed: 80,
  backSpeed: 60,
  showCursor: false,
  loop: false,
  fadeOut: true,
});

var typed2 = new Typed("#typed2", {
  strings: ["My Name is <b id='myName'>Rahif</b>"],
  typeSpeed: 80,
  backSpeed: 60,
  showCursor: false,
  loop: false,
  fadeOut: true,
  startDelay: 1000,
});

// Jquery
var whiteMode = true;

$(".mode-btn").click(() => {
  changeMode();
});

setTimeout(() => {
  AOS.refresh();
}, 5000);

// This will check visibilty of an element
function checkVisibiltyOnViewPort(element) {
  var top_of_element = $(element).offset().top;
  var bottom_of_element = $(element).offset().top + $(element).outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    // the element is visible, do something
    return true;
  } else {
    // the element is not visible, do something else
    return false;
  }
}

function refreshMode() {
  if (!whiteMode) {
    $(".theme-btn").addClass("theme-btn-dark").removeClass("theme-btn");
    $("#mode-icon").removeClass("fa-sun").addClass("fa-moon");
    $(".theme-input").addClass("theme-input-dark").removeClass("theme-input");
    $(".text-dark").addClass("text-white").removeClass("text-dark");
    $(".text-shadow").addClass("text-shadow-dark").removeClass("text-shadow");
    $(".bg-white").addClass("bg-dark").removeClass("bg-white");
    $(".card-body-white")
      .addClass("card-body-dark")
      .removeClass("card-body-white");
    $(".section-7 .bg-grey").addClass("bg-black").removeClass("bg-grey");
    $(".section-7 .fiverr").attr("src", "./assets/images/fiverr-light.png");
    $(".social-card").addClass("social-card-dark").removeClass("social-card");
    $(".vl").addClass("vl-dark").removeClass("vl");
    $("#fp-nav ul li a span").css("background", "white");
  } else {
    $(".theme-btn-dark").addClass("theme-btn").removeClass("theme-btn-dark");
    $("#mode-icon").removeClass("fa-moon").addClass("fa-sun");
    $(".theme-input-dark")
      .addClass("theme-input")
      .removeClass("theme-input-dark");
    $(".text-white").addClass("text-dark").removeClass("text-white");
    $(".text-shadow-dark")
      .addClass("text-shadow")
      .removeClass("text-shadow-dark");
    $(".bg-dark").addClass("bg-white").removeClass("bg-dark");
    $(".card-body-dark")
      .addClass("card-body-white")
      .removeClass("card-body-dark");
    $(".section-7 .bg-black").addClass("bg-grey").removeClass("bg-black");
    $(".section-7 .fiverr").attr("src", "./assets/images/fiverr-dark.png");
    $(".social-card-dark")
      .addClass("social-card")
      .removeClass("social-card-dark");
    $(".vl-dark").addClass("vl").removeClass("vl-dark");
    $("#fp-nav ul li a span").css("background", "black");
  }
}

function changeMode() {
  if (whiteMode) {
    whiteMode = false;
    $(".theme-btn").addClass("theme-btn-dark").removeClass("theme-btn");
    $("#mode-icon").removeClass("fa-sun").addClass("fa-moon");
    $(".theme-input").addClass("theme-input-dark").removeClass("theme-input");
    $(".text-dark").addClass("text-white").removeClass("text-dark");
    $(".text-shadow").addClass("text-shadow-dark").removeClass("text-shadow");
    $(".bg-white").addClass("bg-dark").removeClass("bg-white");
    $(".card-body-white")
      .addClass("card-body-dark")
      .removeClass("card-body-white");
    $(".section-7 .bg-grey").addClass("bg-black").removeClass("bg-grey");
    $(".fiverr").attr("src", "./assets/images/fiverr-light.png");
    $(".social-card").addClass("social-card-dark").removeClass("social-card");
    $(".vl").addClass("vl-dark").removeClass("vl");
    $("#fp-nav ul li a span").css("background", "white");
    $(".section-8 .bg-grey").addClass("bg-black").removeClass("bg-grey");
  } else {
    whiteMode = true;
    $(".theme-btn-dark").addClass("theme-btn").removeClass("theme-btn-dark");
    $("#mode-icon").removeClass("fa-moon").addClass("fa-sun");
    $(".theme-input-dark")
      .addClass("theme-input")
      .removeClass("theme-input-dark");
    $(".text-white").addClass("text-dark").removeClass("text-white");
    $(".text-shadow-dark")
      .addClass("text-shadow")
      .removeClass("text-shadow-dark");
    $(".bg-dark").addClass("bg-white").removeClass("bg-dark");
    $(".card-body-dark")
      .addClass("card-body-white")
      .removeClass("card-body-dark");
    $(".section-7 .bg-black").addClass("bg-grey").removeClass("bg-black");
    $(".section-7 .fiverr").attr("src", "./assets/images/fiverr-dark.png");
    $(".fiverr").attr("src", "./assets/images/fiverr-dark.png");
    $(".social-card-dark")
      .addClass("social-card")
      .removeClass("social-card-dark");
    $(".vl-dark").addClass("vl").removeClass("vl-dark");
    $("#fp-nav ul li a span").css("background", "black");
    $(".section-8 .bg-black").addClass("bg-grey").removeClass("bg-black");
  }
}

$(".fiverr-div").hover(
  () => {
    $(".fiverr").attr(
      "src",
      `./assets/images/fiverr-${whiteMode ? "light" : "dark"}.png`
    );
  },
  () => {
    $(".fiverr").attr(
      "src",
      `./assets/images/fiverr-${whiteMode ? "dark" : "light"}.png`
    );
  }
);

function changeMediaTo(media) {
  if (media === "mob") {
    $("#social-cards-section").empty();
    $("#social-cards-section").append(`
<!-- Swiper -->
<div class="swiper-container" data-aos="fade-up" data-aos-delay="250">
<div class="swiper-wrapper">
<!-- Slides -->
<div class="col-md-4 d-flex align-items-center justify-content-center swiper-slide flex-column" data-aos="fade-up">
<a href="https://www.instagram.com/_.raifu.op_/">
<div class="m-3 bg-black p-5 text-center social-card text-white">
      <i class="fab fa-instagram"></i>
      <h5 class="h5">Instagram</h5>
      <p class="p">@raifu.op_</p>
  </div>
  </a>
</div>
<div class="col-md-4 d-flex align-items-center justify-content-center swiper-slide flex-column" data-aos="fade-up">
<a href="https://www.facebook.com/muhammed.rahif.583/">
  <div class="m-3 bg-black p-5 text-center social-card text-white">
      <i class="fab fa-facebook-f"></i>
      <h5 class="h5">Facebook</h5>
      <p class="p">Muhammed Rahif</p>
  </div>
  </a>
</div>
<div class="col-md-4 d-flex align-items-center justify-content-center swiper-slide flex-column" data-aos="fade-up">
<a href="https://github.com/Muhammed-Rahif">
  <div class="m-3 bg-black p-5 text-center social-card text-white">
      <i class="fab fa-github"></i>
      <h5 class="h5">Github</h5>
      <p class="p">@Muhammed-Rahif</p>
  </div>
  </a>
</div>
<div class="col-md-4 d-flex align-items-center justify-content-center flex-column swiper-slide" data-aos="fade-up">
<a href="https://www.fiverr.com/rahif_dev">
  <div class="m-3 bg-black p-5 text-center social-card text-white fiverr-div">
      <img class="fiverr" src="./assets/images/fiverr-light.png" width="16" height="16"
          alt="Fiverr">
      <h5 class="h5">Fiverr</h5>
      <p class="p">@rahif_dev</p>
  </div>
  </a>
</div>
<div class="col-md-4 d-flex align-items-center justify-content-center swiper-slide flex-column" data-aos="fade-up">
<a href="https://stackoverflow.com/users/14781260/muhammed-rahif">
  <div class="m-3 bg-black p-5 text-center social-card text-white">
      <i class="fab fa-stack-overflow"></i>
      <h5 class="h5">Stack overflow</h5>
      <p class="p">Muhammed-Rahif</p>
  </div>
  </a>
</div>
<div class="col-md-4 d-flex align-items-center justify-content-center swiper-slide flex-column" data-aos="fade-up">
<a href="mailto:rahifpalliyalil@gmail.com">
  <div class="m-3 bg-black p-5 text-center social-card text-white">
      <i class="fas fa-envelope"></i>
      <h5 class="h5">Gmail</h5>
      <p class="p">rahifpalliyalil<br>@gmail.com</p>
  </div>
  </a>
</div>
</div>
<!-- If we need pagination -->
  <div class="swiper-pagination"></div>
</div>

  `);
    var swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
    refreshMode();
  } else {
    $("#social-cards-section").empty();
    $("#social-cards-section").append(`
  
  <div class="col-md-4 d-flex align-items-center justify-content-center flex-column" data-aos="fade-up" data-aos-delay="250">
  <a href="https://www.instagram.com/_.raifu.op_/">
  <div class="m-3 bg-black p-5 text-center social-card text-white">
      <i class="fab fa-instagram"></i>
      <h5 class="h5">Instagram</h5>
      <p class="p">@raifu..op_</p>
  </div>
  </a>
</div>
<div class="col-md-4 d-flex align-items-center justify-content-center flex-column" data-aos="fade-up" data-aos-delay="500">
<a href="https://www.facebook.com/muhammed.rahif.583/">
  <div class="m-3 bg-black p-5 text-center social-card text-white">
      <i class="fab fa-facebook-f"></i>
      <h5 class="h5">Facebook</h5>
      <p class="p">Muhammed Rahif</p>
  </div>
  </a>
</div>
<div class="col-md-4 d-flex align-items-center justify-content-center flex-column" data-aos="fade-up" data-aos-delay="750">
<a href="https://github.com/Muhammed-Rahif">
  <div class="m-3 bg-black p-5 text-center social-card text-white">
      <i class="fab fa-github"></i>
      <h5 class="h5">Github</h5>
      <p class="p">@Muhammed-Rahif</p>
  </div>
  </a>
</div>
<div class="col-md-4 d-flex align-items-center justify-content-center flex-column" data-aos="fade-up" data-aos-delay="1000">
<a href="https://www.fiverr.com/rahif_dev">
  <div class="m-3 bg-black p-5 text-center social-card text-white fiverr-div">
      <img class="fiverr" src="./assets/images/fiverr-light.png" width="16" height="16"
          alt="Fiverr">
      <h5 class="h5">Fiverr</h5>
      <p class="p">@raifu_dev</p>
  </div>
  </a>
</div>
<div class="col-md-4 d-flex align-items-center justify-content-center flex-column" data-aos="fade-up" data-aos-delay="1250">
<a href="https://stackoverflow.com/users/14781260/muhammed-rahif">
  <div class="m-3 bg-black p-5 text-center social-card text-white">
      <i class="fab fa-stack-overflow"></i>
      <h5 class="h5">Stack overflow</h5>
      <p class="p">@Muhammed-Rahif</p>
  </div>
  </a>
</div>
<div class="col-md-4 d-flex align-items-center justify-content-center flex-column" data-aos="fade-up" data-aos-delay="1500">
                        <a href="mailto:rahifpalliyalil@gmail.com">
                            <div class="m-3 bg-black p-5 text-center social-card text-white">
                                <i class="fas fa-envelope"></i>
                                <h5 class="h5">Gmail</h5>
                                <p class="p">rahifpalliyalil<br>@gmail.com</p>
                            </div>
                        </a>
                    </div>

  `);
  }
  refreshMode();
}

// Onload functions
window.onload = () => {
  if ($(window).width() <= 767) {
    console.log($(window).width() <= 767);
    changeMediaTo("mob");
  } else {
    changeMediaTo("non-mob");
  }
  $(window).on("resize", function () {
    var win = $(this); //this = window
    if (win.width() <= 767) {
      changeMediaTo("mob");
      console.log($(window).width() <= 767);
    } else {
      changeMediaTo("non-mob");
    }
  });
  changeMode();
};

function animateWidthElement(elm, percentage) {
  $(elm).animate({ width: `0%` }, 0);
  $(elm).animate({ width: `${percentage}%` }, "slow");
}

var aboutSectionVisibilty = false;
function checkAboutSectionVisiblity() {
  console.log(checkVisibiltyOnViewPort(document.querySelector(".section-4")));
  if (checkVisibiltyOnViewPort(document.querySelector(".section-4"))) {
    setTimeout(() => {
      animateWidthElement($(".html-loader"), 94);
    }, 250);
    setTimeout(() => {
      animateWidthElement($(".css-loader"), 91);
    }, 500);
    setTimeout(() => {
      animateWidthElement($(".js-loader"), 95);
    }, 750);
    setTimeout(() => {
      animateWidthElement($(".react-loader"), 79);
    }, 1000);
    setTimeout(() => {
      animateWidthElement($(".native-loader"), 72);
    }, 1250);
    setTimeout(() => {
      animateWidthElement($(".node-loader"), 91);
    }, 1500);
    setTimeout(() => {
      animateWidthElement($(".mongodb-loader"), 76);
    }, 1750);
    aboutSectionVisibilty = true;
  }
}
