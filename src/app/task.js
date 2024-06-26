import { lists, getList } from "/src/app/list";
import { saveToLocalStorage } from "/src/app/localstorage";

const Task = (listId, name, description, date, priority) => {
  let id = Date.now().toString();
  let complete = false;
  return {
    id,
    listId,
    name,
    description,
    date,
    priority,
    complete,
  };
};

const createTask = (listId, name, description, date, priority) => {
  const list = getList(listId);
  const task = Task(listId, name, description, date, priority);
  list.tasks.push(task);
  saveToLocalStorage(lists, listId);
};

const editTask = (
  listId,
  taskId,
  newName,
  newDescription,
  newDate,
  newPriority,
) => {
  const task = getTask(listId, taskId);

  task.name = newName;
  task.description = newDescription;
  task.date = newDate;
  task.priority = newPriority;

  saveToLocalStorage(lists, listId);
};

const deleteTask = (listId, taskId) => {
  const list = getList(listId);
  const taskIndex = getTaskIndex(listId, taskId);
  list.tasks.splice(taskIndex, 1);
  saveToLocalStorage(lists, listId);
};

const markComplete = (listId, taskId) => {
  const list = getList(list);
  const task = getTask(listId, taskId);
  const taskIndex = getTaskIndex(listId, taskId);
  list.completed.unshift(task);
  list.tasks.splice(taskIndex, 1);
  saveToLocalStorage(lists, listId);
};

const getTask = (listId, taskId) => {
  const list = getList(listId);
  for (const key in list) {
    if (key === "tasks") {
      const task = list[key].find((task) => task.id === taskId);
      if (task) return task;
    }
  }
};

const getTaskIndex = (listId, taskId) => {
  const list = getList(listId);
  for (let key in list) {
    if (key === "tasks") {
      const taskIndex = list[key].findIndex((task) => task.id === taskId);
      if (taskIndex) return taskIndex;
    }
  }
};

export {
  createTask,
  editTask,
  deleteTask,
  markComplete,
  getTask,
  getTaskIndex,
};
