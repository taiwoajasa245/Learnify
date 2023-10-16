var dots = document.querySelectorAll("#dots");
var moreText = document.querySelectorAll("#more");
var btnText = document.querySelectorAll("#btn-more");

// console.log(dots);

// dots.forEach((item) => { 
//     console.log(items);
// })

// // Define the function you want to run when a button is clicked
// function buttonClickHandler(event) {
// //   // You can access the clicked button using "event.target"
// //   const clickedButton = event.target;
// //   // Add your code here to handle the button click
// //   console.log(`Button "${clickedButton.textContent}" was clicked.`);
//   myFunction(); 
// }

// // Loop through the selected buttons and attach the click event listener
// btnText.forEach((btnText) => {
//     btnText.addEventListener("click",  () => { 
//         buttonClickHandler(); 
//     });

// })

btnText.forEach((items) => { 
    // console.log(item);
    items.addEventListener('click', () =>  { myFunction()})
})

dots.forEach((item) => { 
    // console.log(item);
    item.addEventListener('click', () =>  { myFunction()})
})

moreText.forEach((itemm) => { 
    // console.log(item);
    itemm.addEventListener('click', () =>  { myFunction(itemm)})
})




function myFunction(itemm, item, items) {
  
    if (item.style.display === "none") {
      item.style.display = "inline";
      items.innerHTML = "Read more";
      itemm.style.display = "none";
    } else {
      item.style.display = "none";
      items.innerHTML = "Read less";
      itemm.style.display = "inline";
    }
}