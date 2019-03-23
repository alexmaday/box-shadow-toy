document.addEventListener("DOMContentLoaded", function () {
  let boxShadowOptions = {
    x: "0",
    y: "0",
    blur: "0",
    spread: "0",
    getAttributes: function () {
      let rangeValues = `${this.x} ${this.y} ${this.blur} ${this.spread}`;
      console.log(rangeValues);

      return rangeValues;
    }
  };

  function changeBoxShadow() {
    let box = document.getElementById("box");
    box.style.boxShadow = boxShadowOptions.getAttributes();
  }

  document.getElementById("x").addEventListener("input", function () {
    // update label values
    let rangeValue = document.getElementsByClassName("label-range-value")[0];
    rangeValue.textContent = this.value;
    boxShadowOptions.x = this.value + "px";
    changeBoxShadow();
  });
  document.getElementById("y").addEventListener("input", function () {
    let rangeValue = document.getElementsByClassName("label-range-value")[1];
    rangeValue.textContent = this.value;
    boxShadowOptions.y = this.value + "px";
    changeBoxShadow();
  });
  document.getElementById("blur").addEventListener("input", function () {
    let rangeValue = document.getElementsByClassName("label-range-value")[2];
    rangeValue.textContent = this.value;
    boxShadowOptions.blur = this.value + "px";
    changeBoxShadow();
  });
  document.getElementById("spread").addEventListener("input", function () {
    let rangeValue = document.getElementsByClassName("label-range-value")[3];
    rangeValue.textContent = this.value;
    boxShadowOptions.spread = this.value + "px";
    changeBoxShadow();
  });
});
