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

const coords = { x: -10, y: -10 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){

  coords.x = e.clientX;
  coords.y = e.clientY;

});


function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


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
