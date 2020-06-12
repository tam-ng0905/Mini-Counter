/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
const increase = document.getElementById("btn increase");
const decrease = document.getElementById("btn decrease");
const reset = document.getElementById("btn reset");

const count = document.querySelector("#count");
let value = parseInt(count.innerHTML);

function increaseAction() {
 increase.addEventListener('click', () => {
   value =  value + 1;
   count.innerText = value;
   console.log(value);
 }) 
}

function decreaseAction(){
  decrease.addEventListener('click', () => {
    value = value - 1;
    count.innerText = value;
    console.log(value);
  })
}

function resetAction(){
  reset.addEventListener('click', () => {
    value = 0;
    count.innerText = value;
  })
}


resetAction();
increaseAction();
decreaseAction();