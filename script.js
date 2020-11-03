var modalbtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');

modalbtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
})

console.log("Hello!")

const popup = document.getElementById("popup");

setTimeout(function() {
  popup.classList.remove("hidden");
}, 1500);

const myForm = document.getElementById("information");
const output = document.getElementById("output");

myForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let name = event.target.elements["userName"].value;
  let optionY = event.target.elements["yes"].checked;
  let optionN = event.target.elements["no"].checked;
  output.innerHTML = "Hi, " + name + "!<br>";
  if (optionY) {
    output.innerHTML += "I'm glad you are a good designer.<br>";
  }
  if (optionN) {
    output.innerHTML += optionN && "You shouldn't be so hard on yourself.<br>";
  }

  popup.classList.add("hidden");
});
