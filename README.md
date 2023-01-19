# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Run commands](#run-commands)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./screenshot/skjermbilde.png)

### Links

- Live Site URL: [Live site URL](https://industry-knowledge-ca.vercel.app)

## My process

### Built with

- Tailwind-css
- HTML
- Javascript
- Prettier
- Vite
- Husky

### What I learned

Easier way to write in tailwind elements, without writing the same long code many times in the HTML.

```css
@layer components {
  .inner {
    /*Put me on every section except for .my-work*/
    @apply mx-auto max-w[1100px];
  }
}
```

### Run commands

- 1. installing node modules: [npm i]
- 2. create a build directory: [npm run build]
- 3. run the script inside package.json: [npm run dev]
- 4. preview the build locally: [npm run preview]

### Useful resources

- [www.frontendmentor.io](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo) -

## Authors

- Eskil Hagen (Project Manager)
- Mats Fjeldstad (Scrum Master)
- Carl Linus Hedlund & Christina Fugelsnes (qa Engineers)
- Snorre Kolnes Røgenes, Fariad Yousef, Hreinn Gylfason, Ilona Raugalaite, Uzochukwu Cecilia Oloh, Jonas Aarhaug (Developers)

## Acknowledgments

- Hesham El Masry, for great guidance.

- Jonas Aarhaug, for making css components for tailwind elements.
