document.addEventListener("DOMContentLoaded", function() {
  // retrieve a value from a range control
  //   function getRangeControlValue(id) {
  //     return document.getElementById(id).value;
  //   }

  function changeBoxShadow() {
    let box = document.getElementById("box");
    box.style.boxShadow = xOffset.value;
  }

  document.getElementById("x").addEventListener("input", function() {
    console.log("Value for x: " + this.value);
  });
  document.getElementById("y").addEventListener("input", function() {
    console.log("Value for y: " + this.value);
  });
  document.getElementById("blur").addEventListener("input", function() {
    console.log("Value for blur: " + this.value);
  });
  document.getElementById("spread").addEventListener("input", function() {
    console.log("Value for spread: " + this.value);
  });
});
