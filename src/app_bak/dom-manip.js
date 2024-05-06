import { blankProjectLoad } from "./blank-project-load";

/* DOM manipulation to display UI components */
export function initialDomManip() {
  /* DOM heading */
  const contentDiv = document.querySelector(".content");
  const heading = document.createElement("h1");
  heading.textContent = "ToDo Webapp";
  contentDiv.appendChild(heading);

  /* DOM for default projects */
  const projectsInfoDiv = document.createElement("div");
  projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
  contentDiv.appendChild(projectsInfoDiv);
}

let addItem = document.getElementById("add-to-checklist").value;

/* - check if input box empty and button clicked
   - if not add content to new li */

if (addItem !== "") {
  let ul = document.querySelector("todo-ul");
  let li = document.createElement("li");
  li.textContent = addItem;
  let span = document.createElement("span");
  span.className = "remove-checklist-item";
  let removeIcon = document.createTextNode("u00D7");
  li.appendChild(span);
  span.appendChild(removeIcon);
  ul.appendChild(li);
  document.getElementById("add-to-checklist").value = "";

  /* check for items already present */
  if (document.querySelectorAll("li").length > 0) {
    let nodeListChecklist = document.querySelectorAll("li");

    /* bind click event to each node in nodelist and remove node if [...] */
    nodeListChecklist.forEach((checklistItem) => {
      checklistItem.addEventListener(
        "click",
        function removeItemFromChecklist() {
          checklistItem.remove();
        },
      );
    });
  } else return;
}

export function clearForm() {
  let nodeListChecklist = document.querySelectorAll("li");
  for (let i = 0; i < nodeListChecklist.length; i++) {
    nodeListChecklist[i].remove();
  }
  document.getElementById("add-todo").reset();
}
