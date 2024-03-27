console.log("Script loaded");

let lastScrollTop = 0;
window.addEventListener(
  "scroll",
  function () {
    var currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      // Scrolling down
      document.getElementById("myHeader").style.top = "-10vh"; // Adjust this value based on header's height
    } else {
      // Scrolling up
      document.getElementById("myHeader").style.top = "0px";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
  },
  false
);

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutLink = document.getElementById("headerAbout");
  const projectsLink = document.getElementById("headerProjects");
  const aboutSection = document.getElementById("about");
  const projectsSection = document.getElementById("projects");

  aboutLink.addEventListener("click", () => {
    // Fade out Projects, then display About
    projectsSection.style.opacity = "0";
    setTimeout(() => {
      projectsSection.style.display = "none";
      aboutSection.style.display = "block";
      setTimeout(() => {
        aboutSection.style.opacity = "1";
      }, 10); // Small delay to ensure display is set before fading in
    }, 1000); // Match the timeout with CSS transition duration
  });

  projectsLink.addEventListener("click", () => {
    // Fade out About, then display Projects
    aboutSection.style.opacity = "0";
    setTimeout(() => {
      aboutSection.style.display = "none";
      projectsSection.style.display = "block";
      setTimeout(() => {
        projectsSection.style.opacity = "1";
      }, 10); // Small delay to ensure display is set before fading in
    }, 1000); // Match the timeout with CSS transition duration
  });
});
