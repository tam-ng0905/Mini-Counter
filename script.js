/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset")

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


increaseAction();
decreaseAction();