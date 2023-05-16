# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](/images/mlp-screenshot.png)

### Links

- Solution URL: [Repository link](https://github.com/Simow03/FEM-Manage-Landing-Page)
- Live Site URL: [Live site link](https://femmanagelandingpage.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Data attributes
- Accessibility
- A11Y slider

### What I learned
On this project, my learning was mainly focused on the accessibility properties. One of them is "arias" which gives a lot of control over the html markup

for example :

```html
<button
          class="mobile-nav-toggle"
          aria-controls="nav-list"
          aria-expanded="false"
        >
          <span class="visually-hidden">Menu</span>
        </button>
```

Basically the `aria-controls` attribute shows what elements are currently controlled by the element that has the attribute .
Although `aria-expanded` tells whether or not the controlled elements are displayed or hidden (boolean).

Styling wise, it is always a good idea to use the data attributes to style the same element with different styles or that has a different properties in different sections 

Like so :

```css
.button[data-type="inverted"] {
  background-color: var(--clr-neutral-900);
  color: var(--clr-primary-400);
  box-shadow: 0 1.25em 1em -1em var(--clr-primary-400);
}
```
You can also transform svgs into their properties so you can have more possibilities to style them differently (e.g.):

```css
.social-icon {
  width: var(--size-700);
  fill: var(--clr-neutral-900);
  aspect-ratio: 1;
}
```
### Useful resources

- [Andy bell CSS reset](https://andy-bell.co.uk/a-modern-css-reset/) - A useful and straightforward way to reset a CSS .
- [visually hidden about article](https://a11y-guidelines.orange.com/en/articles/accessible-hiding/) - This is an amazing article which helped me achieve some accessibility properties and hide some of the text to be accessible to screen readers only. I'd recommend it for this specific ability.
- [sprites.svg](https://svgsprit.es/) - This helps with transforming svg images into html and css properties so that you have more control over them.
- [A11Y slider](https://a11yslider.js.org/) - Library for simple and accessible sliders.

## Author

- Frontend Mentor - [@Simow03](https://www.frontendmentor.io/profile/Simow03)
- Twitter - [@mx7staali](https://twitter.com/mx7staali)

## Acknowledgments

I would like to express my special thanks to [Kevin Powell](https://github.com/kevin-powell) for his useful advice and suggestions, really inspiring and helpful to me during the project’s completion.