# Interview Project

## Screenshot

![screenshot](img/screenshot.png)

## Reflection

### What went well?

I was able to replicate the brief well, including all components without any libraries so it's fast and not hindered by any compromises.

The styling came together faster than I anticipated and was the smoothest part, I didn't run into any major CSS challenges.

### What did you enjoy?

I really enjoyed the challenge of building the bar charts & donut elements & logic using vanilla JS & CSS. The challenge taught me more than I thought it would.

### Where was the challenge in the task?

- Building the bar chart logic both to adjust `flex-basis` but also adding a dynamic data attribute `data-tooltip` to make each bar's data dynamic.
- Making sure the sidebar behaved smoothly across devices - I ran into problems that would cause users to lose the menu when the window resizes.

### What learnings will you carry forward?

- Inline `stroke-dasharray` attributes on SVGs can be hacked to make an animated donut (Still a bit magic to me).
- When building elements with JavaScript, be more mindful of assigning `.style` attributes over `classList.add` to prevent tripping over CSS specificity and having more control.

### What might you do differently next time as well as any other reflections you would like to share.

- Given more time i'd like to explore a charts library such as [Charts.js](https://www.chartjs.org/) or [Echarts](https://echarts.apache.org/en/index.html) to see if I could improve the readability of my code for other developers.
- I am certain I could code more efficiently here.
- Use of a charts framework may have made my life much easier and been better for reuse by other developers.
- Equally I could have also used a CSS framework to speed up the build process. Bootstrap for example, has components and behaviour already tested for collapsible sidebars - I spent a lot of time testing this which could have been avoided.
