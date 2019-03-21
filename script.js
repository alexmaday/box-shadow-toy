document.addEventListener("DOMContentLoaded", function() {
  // retrieve a value from a range control
  //   function getRangeControlValue(id) {
  //     return document.getElementById(id).value;
  //   }

  function changeBoxShadow() {
    let box = document.getElementById("box");
    box.style.boxShadow = xOffset.value;
  }
  let xOffset = document.getElementById("x");
  let yOffset = document.getElementById("y");
  let blur = document.getElementById("blur");
  let spread = document.getElementById("spread");
  // add event listeners for each range control

  xOffset.addEventListener("input", function() {
    console.log("Value for x: " + xOffset.value);
    // changeBoxShadow();
  });
  yOffset.addEventListener("input", function() {
    console.log("Value for y: " + yOffset.value);
  });
  blur.addEventListener("input", function() {
    console.log("Value for blur: " + blur.value);
  });
  spread.addEventListener("input", function() {
    console.log("Value for spread: " + spread.value);
  });
});
