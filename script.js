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
    // update label values
    let rangeValue = document.getElementsByClassName("label-range-value")[0];
    rangeValue.textContent = this.value;
  });
  document.getElementById("y").addEventListener("input", function() {
    let rangeValue = document.getElementsByClassName("label-range-value")[1];
    rangeValue.textContent = this.value;
  });
  document.getElementById("blur").addEventListener("input", function() {
    let rangeValue = document.getElementsByClassName("label-range-value")[2];
    rangeValue.textContent = this.value;
  });
  document.getElementById("spread").addEventListener("input", function() {
    let rangeValue = document.getElementsByClassName("label-range-value")[3];
    rangeValue.textContent = this.value;
  });
});
