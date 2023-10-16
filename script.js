var dots = document.querySelectorAll("#dots");
var moreText = document.querySelectorAll("#more");
var btnText = document.querySelectorAll("#btn-more");



// Define the function you want to run when a button is clicked
function buttonClickHandler(event) {
//   // You can access the clicked button using "event.target"
//   const clickedButton = event.target;
//   // Add your code here to handle the button click
//   console.log(`Button "${clickedButton.textContent}" was clicked.`);
  myFunction(); 
}

// Loop through the selected buttons and attach the click event listener
btnText.forEach((btnText) => {
    btnText.addEventListener("click",  () => { 
        buttonClickHandler(); 
    });

})

// btnText.addEventListener('click', () =>  { myFunction(); })




function myFunction() {
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
}