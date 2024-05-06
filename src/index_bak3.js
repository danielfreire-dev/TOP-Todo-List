import { createToDo } from "./app/createToDo";
import { blankProjectLoad } from "./app/blank-project-load";
import {
  displayDefaultProject,
  displayTheForm,
  addItemToChecklist,
  clearForm,
} from "./app/dom-manip";
import "/src/style/style.css";

/* Call blankProjectLoad on first land */
blankProjectLoad();

/* Call DOM manipulation module to control UI */
/* initialDomManip(); */

/* Call createtodo.js file and apply properties */
let clickEventsModule = (function () {
  /* click event for displaying the form */
  let addNewTodo = document.querySelector(".add-todo-button");
  addNewTodo = addEventListener("click", displayTheForm);

  /* Click event for adding an item to the checklist on the form */
  let addToChecklist = document.querySelector(".add-to-checklist");
  addToChecklist.addEventListener("click", addItemToChecklist);

  /* click event to clear form */
  let clearButton = document.querySelector(".reset-button");
  clearButton.addEventListener("click", clearForm);

  /* click event to submit a new todo form to project  */
  let submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", createToDo);
})();
