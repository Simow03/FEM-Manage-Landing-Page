const header = document.getElementById('header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.getElementById("primary-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  header.toggleAttribute('data-overlay');
  navToggle.toggleAttribute('data-fixed');
});

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: true,
  dots: true,
  arrows: false,
  responsive: {
    800: {
      dots: false, //dots enabled 800px and down
    }
  } 
});