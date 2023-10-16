//variables used in code
const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const firstContainer = document.getElementById("container-1");
const secondContainer = document.getElementById("container-2");
const secondInput = document.getElementById("search-box-2");
const secondBtn = document.getElementById("search-btn-2");
let text;
let userSearch;

// const btn = document.querySelector('.btn-search-2');



//Event listener to change the text of main button to search

searchBox.addEventListener("focus", function () {
  searchBtn.textContent = "Search";
  text = searchBtn.textContent;
  searchBtn.style.paddingRight = "3.5rem";
});

searchBtn.addEventListener("focus", function () {
  searchBtn.textContent = "Search";
  
  searchBtn.style.paddingRight = "3.5rem";
});

searchBtn.addEventListener("focusout", function () {
  searchBtn.textContent = "Tap";
  searchBtn.style.paddingRight = "";
});

searchBox.addEventListener("focusout", function () {
  searchBtn.textContent = "Tap";
});

//Event listener to get value of second input

secondBtn.addEventListener("click", () => {
  if (secondInput.value) {
    userSearch = secondInput.value;
    console.log(userSearch);
  } else {
  }

  secondInput.value = "";
});

// event listener to bring out search results and also get the value of the user search from first input

searchBtn.addEventListener("click", function () {
  if (text === "Search" && searchBox.value) {
    firstContainer.style.display = "none";
    secondContainer.style.display = "flex";
    userSearch = searchBox.value;
    console.log(userSearch);
  } else {
    firstContainer.style.display = "flex";
    secondContainer.style.display = "none";
  }
});


//// cards 


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

