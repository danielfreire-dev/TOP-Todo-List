/* import { storageAvailable } from "./app/webStorage"; */
import "/src/style/style.css";

let choreList = [];
let finishedList = [];

function Chore(title, date, priority, description) {
  this.title = title;
  this.date = date;
  this.priority = priority;
  this.description = description;
}

function render() {
  let unfinishedList = document.querySelector("#unfinished");

  unfinishedList.innerHTML = "";
  for (let i = 0; i < choreList.lenght; i++) {
    let chore = choreList[i];
    let choreCard = document.createElement("div");
    choreCard.setAttribute("class", "chore-card");
    choreCard.innerHTML = `
    <div class="chore-header">
    <span
      id="close"
      onclick="this.parentNode.parentNode.choreFinished(${i}); return false;"
      >x</span
    >
    <h3 class="title">${chore.title}</h3>

    <h4 class="date">${chore.date}</h4>
    <div class="priority">${chore.priority}</div>
    <p class="description">${chore.description}</p>
    <input type="submit" value="Completed" />
  </div>
    `;

    unfinishedList.appendChild(choreCard);
  }
}

function choreFinished(index) {
  finishedList.concat(choreList[index]);
  /* starting from 'index', removes 1 element */
  choreList.splice(index, 1);
  render();
}

function createCard() {
  let title = document.querySelector("#title").value;
  let date = document.querySelector("#date").value;
  let priority = document.querySelector("#priority").value;
  let description = document.querySelector("#description").value;
  let newChore = new Chore(title, date, priority, description);
  choreList.push(newChore);
  console.log("newChore: " + newChore);
  console.log("choreList: " + choreList);
  render();
}

let newChoreBtn = document.querySelector("#new-chore-form");
newChoreBtn.addEventListener("submit", function (event) {
  event.preventDefault();
  createCard();
  /* console.log(choreList); */
});
