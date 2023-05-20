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
    640: {
      dots: false, //dots enabled 640px and down
    }
  } 
});

const formEmailInput = document.getElementById('form-email-input');
const formSubmit = document.getElementById('form-submit');
const errorMessage = document.querySelector('.error-message');
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

formSubmit.onclick = () => {
  if (formEmailInput.value == "") {
    errorMessage.innerHTML = "this field is required";
  }
  else if (formEmailInput.value !== validateEmail) {
    errorMessage.innerHTML = "please insert a valid email";
    formEmailInput.style.color = "rgb(207, 61, 61)";
    formEmailInput.style.border = "1px solid rgb(207, 61, 61)";
  }
  else {
    errorMessage.innerHTML = '';
  }
}