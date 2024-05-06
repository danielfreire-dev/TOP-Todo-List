import { compareAsc, format, parseISO, startOfToday } from "date-fns";
import { clearForm } from "./dom-manip";
import { node } from "webpack";

let toDoArray = [];

/* Factory functions */
export let createToDo = () => {
  let Title = document.getElementById("Title").value;
  let Description = document.getElementById("Description").value;
  let DueDate = document.getElementById("DueDate").value;
  let Priority = document.getElementById("Priority").value;

  /* Check if empty fields exist */
  if (Title == "" || Description == "" || DueDate == "") {
    alert(
      "Title, description and due date are required fields. Please try again!",
    );
    return;
  }

  /* Check if pre-date was entered */
  if (parseISO(DueDate) < startOfToday()) {
    alert("you have entered a date that has already passed");
    return;
  }

  /* Loop over the nodelist for checklist items from the DOM */
  let nodeListChecklist = document.querySelectorAll("li");
  let checklistArray = [];
  for (let i = 0; i < nodeListChecklist.length; i++) {
    /* strip off the 'x' from the each li */
    let strippedChecklist = nodeListChecklist[i].textContent.replace(
      "/u00D7",
      "",
    );
    checklistArray.push(strippedChecklist);
  }

  /* strip off checklist array and convert o string with commas */
  let checklist = checklistArray.join(", ");
  toDoArray.push({ Title, Description, DueDate, Priority, checklist });

  /* Reset the form */
  clearForm();
  return { Title, Description, DueDate, Priority, checklist };
};
