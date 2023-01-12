// buttons and counter texts
const counter = document.querySelector("#counter");
const btns = document.querySelectorAll("button");

// initialise the count variable
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else count = 0;
    counter.textContent = count;

    if ( count > 0) {
        counter.style.color = "green"
    } else if (count < 0){
        counter.style.color = "red"
    } else counter.style.color = 'grey'
  });

});

const increment = document.getElementById('increment');
increment.style.backgroundColor = 'green'
increment.style.fontSize = '20px'

const decrement = document.getElementById('decrement');
decrement.style.backgroundColor = 'red'

const reset = document.getElementById('reset');
reset.style.backgroundColor = 'grey'

  