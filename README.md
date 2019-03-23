## An Interactive Demo for CSS `box-shadow`

Just a small experiment to visualize how `box-shadow` works. My current model is a single box controlled through a single set of attributes. Changing the attributes using a slider seemed like a cool way to visualize how the properties work.

The demo will (at first) controls for `x-offset`, `y-offset`, `blur-radius` and `spread-radius`. Once I have these, adding controls for adjusting color and inset

### NOTE: There already exists quite a nice box-shadow _generator_ [here.](https://cssgenerator.org/box-shadow-css-generator.html)

TODO:

- JavaScript: Use delegation. Instead of event listeners on each range control, maybe use delegation and a single event listener that can correctly target using `this`. Refer to my [Vanilla JS Todo's app.js](https://github.com/alexmaday/todoMVC-MyVanillaJS/blob/master/public/js/app.js)
- maybe add a reset button?
- maybe make box's color choice interactive
