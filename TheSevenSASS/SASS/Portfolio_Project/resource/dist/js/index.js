/*======================================================JS=======================================*/
const BUTTON = document.querySelector(".btn");
const MAIN  = document.querySelector(".home");
const MAIN2 = document.querySelector(".hidden_abt");

BUTTON.onclick = ()=> {
  MAIN.classList.toggle("hidden");
  MAIN.classList.toggle("home");
  MAIN2.classList.toggle("hidden_abt");
  MAIN2.classList.toggle("about");
}
