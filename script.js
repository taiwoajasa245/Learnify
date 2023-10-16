var buttons = document.querySelectorAll("#btn-more");

buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    myFunction(index);
  });
});

// Initialize the initial state to "none"
document.querySelectorAll("#dots").forEach(function (dots) {
  dots.style.display = "none";
});

document.querySelectorAll("#more").forEach(function (moreText) {
  moreText.style.display = "none";
});

function myFunction(index) {
  var dots = document.querySelectorAll("#dots")[index];
  var moreText = document.querySelectorAll("#more")[index];
  var btnText = document.querySelectorAll("#btn-more")[index];

  if (dots.style.display === "none" || dots.style.display === "") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
}
