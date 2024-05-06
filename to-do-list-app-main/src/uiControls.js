//Import modules:

import * as listModule from "./list";
import * as taskModule from "./task";
import { saveToLocalStorage, getIdFromLocalStorage } from "./localStorage";

//Import icons:

import editBtn from "./imgs/editBtn.svg";
import deleteBtn from "./imgs/deleteBtn.svg";
import plusBtn from "./imgs/plusBtn.svg";

let selectedList = "none";
let selectedListId = "none";
let selectedTaskId = "none";

function screenController() {
  let lists = listModule.lists;
  saveToLocalStorage(lists, selectedListId);
  selectedListId = getIdFromLocalStorage();

  let sidebarTitle = document.querySelector(".sidebar-title");
  let listContainer = document.querySelector(".list-container");
  let addListForm = document.querySelector(".list-form");
  let addListBtn = document.querySelector(".plus-btn-container");
  let listInput = document.querySelector(".list-input");
  let listSpan = document.querySelector(".list-span");
  let listForm = document.querySelector("#list-form");
  let overlay = document.querySelector("#overlay");
  let cancelBtns = document.querySelectorAll(".cancel");
  let taskContainer = document.querySelector(".main-content");
  let addItemForm = document.querySelector(".task-form");
  let taskName = document.querySelector(".task-title");
  let taskDescr = document.querySelector(".task-description");
  let taskDate = document.querySelector(".task-date");
  let taskPriority = document.querySelector(".task-priority");

  sidebarTitle.addEventListener("click", renderHomepage);

  listInput.addEventListener("mouseout", toggleFormDisplay);

  function addItem(e) {
    e.preventDefault();
    if (selectedTaskId == "none") {
      if (taskName.value !== "") {
        taskModule.createTask(
          selectedListId,
          taskName.value,
          taskDescr.value,
          taskDate.value,
          taskPriority.value,
        );
      }
    } else {
      console.log(`The selected task id is ${selectedTaskId}`);
      taskModule.editTask(
        selectedListId,
        selectedTaskId,
        taskName.value,
        taskDescr.value,
        taskDate.value,
        taskPriority.value,
      );
    }
    saveToLocalStorage(lists, selectedListId);
    let taskModal = document.querySelector("#task-modal");
    closeModal(taskModal);
    renderTasks(selectedList);
    taskName.value = "";
    taskDescr.value = "";
    taskDate.value = "";
    taskPriority.value = "";
  }

  addItemForm.addEventListener("submit", (e) => {
    addItem(e);
  });

  let renderLists = () => {
    clearLists();

    lists.forEach((list) => {
      let listName = document.createElement("p");
      listName.innerHTML = list.name;
      listName.classList.add("list-name");
      listName.setAttribute("readonly", true);
      listName.dataset.listId = list.id;
      if (list.id === selectedListId) {
        listName.classList.add("selected-list");
      }

      let editListBtn = document.createElement("img");
      editListBtn.src = editBtn;
      editListBtn.dataset.btn = "edit";
      editListBtn.classList.add("list-edit");

      editListBtn.dataset.listId = list.id;

      let deleteListBtn = document.createElement("img");
      deleteListBtn.src = deleteBtn;
      deleteListBtn.dataset.btn = "delete";
      deleteListBtn.dataset.listId = list.id;
      deleteListBtn.classList.add("list-delete");

      let btnContainer = document.createElement("div");
      btnContainer.classList.add("list-btn-container");
      btnContainer.appendChild(editListBtn);
      btnContainer.appendChild(deleteListBtn);

      let listElement = document.createElement("li");
      listElement.classList.add("list-element");
      listElement.appendChild(listName);
      listElement.appendChild(btnContainer);

      listContainer.appendChild(listElement);
    });
  };

  let clearLists = () => {
    listContainer.innerHTML = "";
  };

  let clearTasks = () => {
    taskContainer.innerHTML = "";
  };

  addListForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let listName = listInput.value;
    if (listName == null || listName === "") return;
    listModule.createList(listName, "defaultImg");
    toggleFormDisplay();
    listInput.value = "";
    renderLists();
  });

  function toggleFormDisplay() {
    console.log("toggled activated");
    if (listInput.style.visibility == "hidden") {
      listInput.style.visibility = "visible";
      listSpan.style.visibility = "visible";
    } else {
      listInput.style.visibility = "hidden";
      listSpan.style.visibility = "hidden";
    }
  }

  //Add event listener to add list button.

  addListBtn.addEventListener("click", toggleFormDisplay);

  listContainer.addEventListener("click", selectElement);

  function selectElement(e) {
    selectedListId = e.target.dataset.listId;
    saveToLocalStorage(lists, selectedListId);
    if (e.target.tagName.toLowerCase() === "p") {
      renderLists();
      selectedList = listModule.getList(selectedListId);
      renderTasks(selectedList);
    }

    if (e.target.dataset.btn == "edit") {
      openListModal(selectedListId);
    }

    if (e.target.dataset.btn == "delete") {
      listModule.deleteList(selectedListId);
      renderLists();
    }
  }

  cancelBtns.forEach((button) => {
    button.addEventListener("click", () => {
      let modal = document.querySelector(".modal.active");
      closeModal(modal);
    });
  });

  listForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let listModal = document.querySelector(".modal.active");
    let listName = document.querySelector(".list-name-input");
    if (listName == null || listName == "") return;
    listModule.editListName(selectedListId, listName.value, "default");
    renderLists();
    closeModal(listModal);
    toggleFormDisplay();
  });

  function openListModal(selectedListId) {
    let listModal = document.querySelector("#list-modal");
    console.log(listModal);
    let listName = document.querySelector(".list-name-input");
    let listTitle = document.querySelector(".list-title");
    let list = listModule.getList(selectedListId);
    listName.value = list.name;
    listTitle.innerHTML = list.name;
    listModal.classList.add("active");
    overlay.classList.add("active");
    renderLists();
  }

  function openModal(modal) {
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  function closeModal(modal) {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }

  overlay.addEventListener("click", () => {
    let modal = document.querySelector(".modal.active");
    closeModal(modal);
  });

  function renderHomepage() {
    clearTasks();

    let homepageTitle = document.createElement("h1");
    homepageTitle.innerHTML = "To-Do App";
    homepageTitle.classList.add("homepage-title");
    let homepageDescr = document.createElement("p");
    homepageDescr.innerHTML =
      "Create a new list by clicking the + button or select an existing one to start adding your tasks.";
    homepageDescr.classList.add("homepage-descr");

    let homepageContainer = document.createElement("div");
    homepageContainer.classList.add("homepage-container");
    homepageContainer.appendChild(homepageTitle);
    homepageContainer.appendChild(homepageDescr);

    taskContainer.appendChild(homepageContainer);
  }

  function renderHeader(selectedList) {
    let header = document.createElement("div");
    header.classList.add("main-heading");

    let listTitle = document.createElement("h1");
    listTitle.innerHTML = selectedList.name;
    listTitle.classList.add("list-heading");

    let addItemContainer = document.createElement("div");
    addItemContainer.classList.add("add-item-container");

    addItemContainer.addEventListener("click", () => {
      selectedTaskId = "none";
      let taskModal = document.querySelector("#task-modal");
      openModal(taskModal);
    });

    let addItemh3 = document.createElement("h3");
    addItemh3.innerHTML = "Add item";

    let addItemImg = document.createElement("img");
    addItemImg.src = plusBtn;

    addItemContainer.appendChild(addItemh3);
    addItemContainer.appendChild(addItemImg);

    header.appendChild(listTitle);
    header.appendChild(addItemContainer);

    taskContainer.appendChild(header);
  }

  taskContainer.addEventListener("click", selectTaskElement);

  function selectTaskElement(e) {
    console.log("select task fcn called");
    if (e.target.tagName.toLowerCase() === "input") {
      let selectedListId = e.target.dataset.listId;
      let selectedList = listModule.getList(selectedListId);
      let selectedTask = selectedList.tasks.find(
        (task) => task.id === e.target.dataset.id,
      );
      selectedTask.complete = e.target.checked;
      saveToLocalStorage(lists, selectedListId);
      renderTasks(selectedList);
    }
  }

  function renderTasks(selectedList) {
    clearTasks();
    renderHeader(selectedList);

    selectedList.tasks.forEach((task) => {
      let itemCard = document.createElement("div");
      itemCard.classList.add("item-card");

      let priorityIndicator = document.createElement("div");
      priorityIndicator.classList.add("priority-indicator");

      if (task.priority == "Low") {
        priorityIndicator.classList.add("priority-low");
      } else if (task.priority == "Medium") {
        priorityIndicator.classList.add("priority-medium");
      } else if (task.priority == "High") {
        priorityIndicator.classList.add("priority-high");
      } else {
        priorityIndicator.classList.add("priority-default");
      }

      let checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.dataset.taskId = task.id;
      checkbox.classList.add("checkbox");
      checkbox.dataset.id = task.id;
      checkbox.dataset.listId = selectedList.id;
      checkbox.checked = task.complete;

      if (task.complete) {
        itemCard.classList.add("completed-task");
      }

      let checkboxContainer = document.createElement("div");
      checkboxContainer.classList.add("checkbox-container");
      checkboxContainer.appendChild(checkbox);

      let itemName = document.createElement("h3");
      itemName.classList.add("item-name");
      itemName.textContent = task.name;

      let dueDate = document.createElement("h3");
      dueDate.textContent = task.date;
      dueDate.classList.add("date");

      let trashIcon = new Image();
      trashIcon.dataset.taskId = task.id;
      trashIcon.src = deleteBtn;

      let deleteItemBtn = document.createElement("div");
      deleteItemBtn.classList.add("delete-item-btn");
      deleteItemBtn.appendChild(trashIcon);
      deleteItemBtn.dataset.taskId = task.id;
      deleteItemBtn.dataset.btn = "delete";

      deleteItemBtn.addEventListener("click", (e) => {
        selectedTaskId = task.id;
        console.log(selectedTaskId);
        taskModule.deleteTask(selectedListId, selectedTaskId);

        renderTasks(selectedList);
      });

      let pencilIcon = new Image();
      pencilIcon.dataset.taskId = task.id;
      pencilIcon.src = editBtn;

      let editItemBtn = document.createElement("div");
      editItemBtn.classList.add("edit-item-btn");
      editItemBtn.appendChild(pencilIcon);
      editItemBtn.dataset.taskId = task.id;
      editItemBtn.dataset.btn = "edit";

      editItemBtn.addEventListener("click", () => {
        selectedTaskId = task.id;
        taskName.value = task.name;
        taskDescr.value = task.description;
        taskPriority.value = task.priority;
        taskDate.value = task.date;
        let taskModal = document.querySelector("#task-modal");
        openModal(taskModal);
      });

      itemCard.appendChild(priorityIndicator);
      itemCard.appendChild(checkboxContainer);
      itemCard.appendChild(itemName);
      itemCard.appendChild(dueDate);
      itemCard.appendChild(editItemBtn);
      itemCard.appendChild(deleteItemBtn);

      taskContainer.appendChild(itemCard);
    });
  }

  //Initial render.
  renderLists();
  renderHomepage();
}

export { screenController };
