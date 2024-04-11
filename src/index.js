/* import { storageAvailable } from "./app/webStorage"; */
import "/src/style/style.css";

let choreList = [];
let finishedList = [];

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
    
    <h3 class="title">${chore.title}</h3>

    <h4 class="date">${chore.date}</h4>
    <div class="priority">${chore.priority}</div>
    <p class="description">${chore.description}</p>
    <input type="checkbox" value="Completed" id='completed' />

  </div>
    `;
    {
      /* <span
  id="close"
  onclick="this.parentNode.parentNode.choreFinished(${i}); return false;"
>
  x
</span>; */
    }
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

let finishedDiv = document.getElementById("finished");

if (finishedDiv.innerHTML === "") {
  finishedDiv.innerHTML = `<h2>No chored chores yet 🤨</h2>`;
}
