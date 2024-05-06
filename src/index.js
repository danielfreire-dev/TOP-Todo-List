import "/src/style/style.css";
/* import logo from "/src/assets/logo.svg"; */
import { screenController } from "/src/app/ui";
screenController();

/* let topBar = document.querySelector("#topbar");
topBar.setAttribute("id", "top-bar"); */
/* 
topBar.appendChild(logoHeader);

/* let topTitle = document.createElement("h1");
topTitle.textContent = "Odin's Chores";
topBar.appendChild(topTitle); */

/* let projectList = [];
let choreList = [];

function Chore(title, description, date, priority, completed) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
  this.completed = completed;
}

Chore.prototype.toggleCompleted = function () {
  this.completed = !this.completed;
};

function toggleCompleted(index) {
  choreList[index].toggleCompleted();
  render();
}
let unfinishedDiv = document.querySelector("#unfinished");
function render() { */
/* unfinishedDiv.innerHTML = ""; */
/*   for (let i = 0; i < choreList.length; i++) {
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
    unfinishedDiv.appendChild(choreCard);
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
  console.log("click");
  choreList.push(newChore);
  render();
}
let choreForm = document.querySelector("#new-chore-form");
let newChoreButton = document.querySelector("#modalBtn");
newChoreButton.addEventListener("click", function (event) {
  event.preventDefault();

  let newChoreForm = document.querySelector("#modal");
  newChoreForm.computedStyleMap.display = "block";
  projectForm.style.display = "none";
  choreForm.style.display = "block";
});

choreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addChoreToList();
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

let modalRightCard = document.getElementById("right-card");

let modalNewChore = document.querySelector("#newChore");

let projectForm = document.querySelector("#new-project-form");

modalNewChore.addEventListener("click", function () {
  projectForm.style.display = "none";
  choreForm.style.display = "block";
});

let modalNewProject = document.querySelector("#newProject");
modalNewProject.addEventListener("click", function () {
  choreForm.style.display = "none";
  projectForm.style.display = "block";
}); */

/* Create new Project */
/* let newProjectBtn = document.querySelector("#new-project-btn");
let ulProjects = document.querySelector("#project-list");
newProjectBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let projectName = document.querySelector("#project-title").value;
  console.log(projectName);
  let arrayName = projectName + "Array";
  console.log(arrayName);
  /* let [arrayName] = []; */
/* let newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(projectName));
  ulProjects.appendChild(newLi);
  newLi.setAttribute("id", projectName);
  projectList.push(projectName);
  let newDiv = document.createElement("div");
  newDiv.setAttribute("div", projectName + "Div");
  unfinishedDiv.appendChild(newDiv);
}); */
