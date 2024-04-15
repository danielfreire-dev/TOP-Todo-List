/* import { storageAvailable } from "./app/webStorage"; */
import "/src/style/style.css";

/* let projectList = localStorage.setItem("finishedList") || {
  home: [],
  Gym: [],
  Study: [],
  Work: [],
}; */

let choreList = [];

function Chore(title, date, priority, description, project /* completed */) {
  this.title = title;
  this.date = date;
  this.priority = priority;
  this.description = description;
  this.project = project;
  /* this.completed = completed; */
}

Chore.prototype.toggleComplete = function () {
  this.completed = !this.completed;
};

function toggleComplete(index) {
  choreList[i].toggleComplete();
  render();
}

function render() {
  let unfinishedList = document.querySelector("#unfinished");
  unfinishedList.innerHTML = "";

  for (let i = 0; i < choreList.length; i++) {
    let chore = choreList[i];
    /* console.log("choreList: "); */
    /* console.log(choreList[i]); */
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
    unfinishedList.appendChild(choreCard);
  }
}

function createCard() {
  let title = document.querySelector("#title").value;
  let date = document.querySelector("#date").value;
  let priority = document.querySelector("#priority").value;
  let project = document.querySelector("#project");
  let description = document.querySelector("#description").value;

  let newChore = new Chore(title, date, priority, description, project);
  choreList.push(newChore);
  /*  console.log("newChore: ");
  console.log(newChore);
  console.log("choreList: ");
  console.log(choreList); */
  render();
}

let newChoreBtn = document.querySelector("#new-chore-form");
newChoreBtn.addEventListener("submit", function (event) {
  event.preventDefault();
  createCard();
  /* console.log(choreList); */
});

let completedBtn = document.getElementById("completed");
if (completedBtn == true) {
  console.log("checkbox checked");
  /* choreFinished(index); */
} else {
}

function choreFinished(index) {
  finishedList.concat(choreList[index]);
  /* starting from 'index', removes 1 element */
  choreList.splice(index, 1);
  render();
}

let unfinishedDiv = document.getElementById("unfinished");

if (unfinishedDiv.innerHTML === "") {
  unfinishedDiv.innerHTML = `<h2>No chores yet 🤨</h2>`;
}

let modal = document.getElementById("modal");

let chorebtn = document.getElementById("modalBtn");

let span = document.querySelector(".close");

chorebtn.onclick = function () {
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
let rangeBar = document.getElementById("priority");
window.onload = function (event) {
  event.preventDefault();
  console.log(rangeBar.value);

  if (rangeBar.value == "2") {
    rangeBar.style.accentColor = "green";
  } else if (rangeBar.value == "3") {
    rangeBar.style.accentColor = "yellow";
  } else if (rangeBar.value == "4") {
    rangeBar.style.accentColor = "orange";
  } else if (rangeBar.value == "5") {
    rangeBar.style.accentColor = "red";
  }
};

let homeButton = document.getElementById("homeProject");
let gardenButton = document.getElementById("gardenProject");
let gymButton = document.getElementById("gymProject");

homeButton.addEventListener("click", function (event) {
  event.preventDefault();
  let listDiv = document.getElementById("unfinished");
  listDiv.innerHTML = "";
});
