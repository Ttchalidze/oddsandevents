let blankNumbers = [];
let oddNumbers = [];
let evenNumbers = [];

const app = document.getElementById("app");

const input = document.createElement("input");
input.type = "text";
input.id = "number";
app.appendChild(input);
//Add botton
const addB = document.createElement("button");
addB.innerText = "Add number";
addB.onclick = addNumber;
app.appendChild(addB);
//Random number botton
const genB = document.createElement("button");
genB.innerText = "Generate Random Number";
genB.onclick = generateRandomNumber;
app.appendChild(genB);
//Sorts one
const sort1B = document.createElement("button");
sort1B.innerText = "Sort 1";
sort1B.onclick = sortOne;
app.appendChild(sort1B);
//Sorts all
const sortAllB = document.createElement("button");
sortAllB.innerText = "Sort All";
sortAllB.onclick = sortAll;
app.appendChild(sortAllB);
//Number storage
const numberBank = document.createElement("div");
numberBank.id = "bank1";
app.appendChild(numberBank);

const odds = document.createElement("div");
odds.id = "odd1";
app.appendChild(odds);

const evens = document.createElement("div");
evens.id = "even1";
app.appendChild(evens);
//Add number function
function addNumber() {
  const number = parseInt(document.getElementById("number").value, 10);
  if (!isNaN(number)) {
    blankNumbers.push(number);
    render();
  }
}
//Random number function
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  blankNumbers.push(randomNumber);
  render();
}
//Sort1 function
function sortOne() {
  if (blankNumbers.length > 0) {
    const number = blankNumbers.shift();
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
    render();
  }
}
//Sort all function
function sortAll() {
  while (blankNumbers.length > 0) {
    sortOne();
  }
}
//render
function render() {
  document.getElementById("bank1").innerText = `Bank: ${blankNumbers.join(
    ", "
  )}`;
  document.getElementById("odd1").innerText = `Odds: ${oddNumbers.join(", ")}`;
  document.getElementById("even1").innerText = `Evens: ${evenNumbers.join(
    ", "
  )}`;
}
