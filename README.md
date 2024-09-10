# Make It Real - product-preview-card

This is a solution to the product-preview-card project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- The goal is to develop this product preview card component.
- The design must be responsive for mobile phones.

### Screenshot


#### Desktop


#### Mobile



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- React and Vite
- Mobile-first workflow
- Hover

### What I learned

Working on this project helped me solidify my understanding of mobile-first design and how to properly use media queries to create responsive layouts. I also deepened my knowledge of how to optimize images for different screen sizes using CSS media queries to change the background images based on screen width.

One of the key takeaways was structuring the card component to adapt from a vertical (mobile) layout to a horizontal (desktop) one. This was achieved by defining the layout in the base styles for mobile, and then modifying it within media queries for larger screen sizes.

For example, the base mobile structure looks like this:

```css
.product-card {
  background-color: hsl(0, 0%, 100%);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-width: 375px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 0px 10px;
}
```

```css
@media (min-width: 1440px) {
  .product-card {
      flex-direction: row;
      max-width: 550px;
      height: 420px;
  }
}


```


### Continued development

In future projects, I want to focus more on:

- Optimizing images not just for screen size but also for different resolutions (e.g., using srcset for retina displays).
- CSS Grid and Flexbox layouts: Although I used Flexbox for this project, I want to explore more complex layouts using CSS Grid and compare the two approaches.
- Performance optimization by lazy loading images or using image compression techniques to further reduce load times.

### Useful resources

- [How to Create Responsive Images in CSS](https://cloudinary.com/guides/responsive-images/5-techniques-and-examples-for-creating-responsive-images-in-css) - This guide helped me understand how to serve the right image based on screen size.

## Author

- Website - [Add your name here](https://www.your-site.com)


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
