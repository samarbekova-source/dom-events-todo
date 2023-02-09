// ? Dom selectors
// document.getElementsByName("h1");

// let button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function () {
//   console.log("click!!!");
// });

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let list = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  addDelButton(li);
  ul.appendChild(li);
  input.value = "";
}

// creating delete button
function addDelButton(parent) {
  let buttonElem = parent.appendChild(document.createElement("button"));
  buttonElem.innerHTML = "Delete";
  buttonElem.onclick = function () {
    this.parentElement.remove();
  };
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

// toggle function
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", liClick);
  addDelButton(list[i]); //added delete button function
}
function liClick() {
  this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
