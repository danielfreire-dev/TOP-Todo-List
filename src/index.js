/* import { storageAvailable } from "./app/webStorage"; */
import "/src/style/style.css";

let projectList = [];
let choreList = [];

function Chore(title, description, date, priority, completed) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
  this.completed = completed;
}

Chore.prototype.toggleCompleted = function () {
  this.read = !this.read;
};

function toggleCompleted(index) {
  choreList[index].toggleCompleted();
  render();
}
let unfinishedDiv = document.querySelector("#unfinished");
function render() {
  unfinishedDiv.innerHTML = "";
  for (let i = 0; i < choreList.length; i++) {
    let chore = choreList[i];
    let choreCard = document.createElement("div");
    choreCard.setAttribute("class", "chore-card");
    choreCard.innerHTML = `

  <div class="chore-header">
    <div class="title">${chore.title}</div>
    <div class="date">${chore.date}</div>
    <div class="priority">${chore.priority}</div>
    <p class="description">${chore.description}</p>
    <input type="checkbox" value="Completed" id="completed" />
  </div>

    `;
    choreList.appendChild(choreCard);
  }
}

function removeChore(index) {
  choreList.splice(index, 1);
  render();
}

function addChoreToList() {
  let title = document.querySelector("#title").value;
  let date = document.querySelector("#date").value;
  let priority = document.querySelector("#priority").value;
  let description = document.querySelector("#description").value;
  let completed = false;

  let newChore = new Chore(title, description, date, priority, completed);

  choreList.push(newChore);
  render();
}

let newChoreButton = document.querySelector("#modalBtn");
newChoreButton.addEventListener("click", function (event) {
  event.preventDefault();
  let newChoreForm = document.querySelector("#modal");
  newChoreForm.computedStyleMap.display = "block";
});

document
  .querySelector("#new-chore-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addChoreToList;
  });

if (unfinishedDiv.innerHTML === "") {
  unfinishedDiv.innerHTML = `<h2>No chores yet 🤨</h2>`;
}

let modal = document.getElementById("modal");

let span = document.querySelector(".close");

newChoreButton.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
