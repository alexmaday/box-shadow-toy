document.addEventListener("DOMContentLoaded", function () {

  document.getElementById('ui').addEventListener("input", function (ev) {
    // loop through range controls
    let rangeValues = "";
    let rangeControls = document.querySelectorAll('[type="range"]');
    let rangeLabels = document.getElementsByClassName('label-range-value');
    for (let i = 0, countOfRangeControls = rangeControls.length; i < countOfRangeControls; i++) {
      // build list of attributes for boxShadow
      rangeValues += rangeControls[i].value + "px ";
      rangeLabels[i].textContent = rangeControls[i].value;
    }
    // modify the boxShadow
    document.getElementById('box').style.boxShadow = rangeValues;
  });
});
