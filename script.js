document.addEventListener("DOMContentLoaded", function () {

  let re;
  let update = function () {
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
  };
  document.getElementById('ui').addEventListener('input', update);
  /*   document.getElementById('ui').addEventListener('reset', function (ev) {
      update();
    }); */
});
