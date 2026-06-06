console.log("tasks.js is connected");

import Task from "../model/Task.js";
import { tasks } from "../data/state.js";
import { showDialog, closeBulkModal } from "./dialogs.js";
import { save } from "./storage.js";
import {
  createElement,
  taskRendering,
  renderChangeLog,
  updateTaskCount,
} from "../ui/render.js";
import * as taskElem from "./elements/taskModuleDOM.js";
import * as dialogElem from "./elements/dialogModuleDOM.js";

function addTask() {
  if (taskElem.inputField.value === "") {
    showDialog(dialogElem.errorDialog);
    return;
  }
  const newTask = new Task(
    taskElem.inputField.value.trim(),
    taskElem.assignmentMethod.value,
    taskElem.dateField.value,
  );

  tasks.unshift(newTask);

  const newElement = createElement(newTask);
  newElement.classList.add("new");
  newElement.addEventListener("click", (e) => {
    // So my delete function uses splice method for deleting the task from the array list. It uses the data-id of the task to identify the task that needs to be removed. That is why it is necessary to get the it. In this code, it is stored in the variable "taskDataSetId".

    const targetBtn = e.target;
    const copyBtn = targetBtn.closest(".copy-Btn");
    const deleteBtn = targetBtn.closest(".deleteBtn");
    const completeBtn = targetBtn.closest(".completeBtn");
    const targetCB = targetBtn.matches(".js-myCheckbox");

    if (!deleteBtn && !completeBtn && !targetCB && !copyBtn) return;

    const targetBtnDiv = e.target.closest(".task-container");
    const taskName = targetBtnDiv.querySelector(".task");
    const taskDataSetId = Number(targetBtnDiv.dataset.id);

    // the index of the object related to the button.
    const index = tasks.findIndex((item) => item.uniqueId === taskDataSetId);

    if (deleteBtn) {
      deleteTask(index, targetBtnDiv);
    } else if (completeBtn) {
      updateCompleteStatus(index, taskName, completeBtn);
    } else if (targetCB) {
      updateTrackerStatus(index, targetBtn);
    } else if (copyBtn) {
      const targetText =
        copyBtn.parentElement.querySelector(".task").textContent; // needs to be inside for proper deletion

      clipboard.showCopySuccess(copyBtn, targetText);
    }
  });

  taskElem.taskField.prepend(newElement);

  showDialog(dialogElem.addDialog);

  // saving to localStorage
  save();

  // clearning input field
  taskElem.inputField.value = "";
  taskElem.dateField.value = "";
  taskElem.assignmentMethod.selectedIndex = 0; // selectedIndex is the method to reset the option of the select element to the first index

  // update task count
  updateTaskCount();
} // Add button

function deleteTask(index, taskItem) {
  // remove the item from the task array
  // Note:for arrow functions, if it is inside a curly braces, put "return", if not, no need to put one.

  // this returns an array wih the removed content
  tasks.splice(index, 1);

  // saving to localStorage
  save();

  //show/remove dialog
  showDialog(dialogElem.deleteDialog);

  // update ui
  // taskRendering(tasks);
  taskItem.classList.add("remove");

  setTimeout(() => {
    taskItem.remove();
  }, 900);

  // taskItem.addEventListener("transitionend", () => {
  //   taskItem.remove();
  // });
  // taskItem.classList.add("remove");
  // Ai suggested this because this is a better approach but it keeps messing up so i am refraining from using it until i understand what this is

  // task count
  updateTaskCount();
} // delete button
function updateCompleteStatus(index, taskName, taskButton) {
  if (taskName.classList.contains("strike")) {
    //remove strike-through
    taskName.classList.remove("strike");

    // setting isCompleted to false
    tasks[index].isCompleted = false;

    // change icon
    taskButton.innerHTML = `<i class="fa fa-check"></i>`;

    //show/remove dialog
    showDialog(dialogElem.uncheckedDialog);

    // saving to localStorage
    save();
    // task count
    updateTaskCount();
  } else {
    // adding strike-through
    taskName.classList.add("strike");
    // setting isCompleted to true
    tasks[index].isCompleted = true;

    // change icon
    taskButton.innerHTML = `<i class="fa fa-close"></i>`;

    // show dialog
    showDialog(dialogElem.completeDialog);
    // saving to localStorage
    save();
    // task count
    updateTaskCount();
  }
} // mark as complet button

function updateTrackerStatus(index, targetBtn) {
  if (targetBtn.checked) {
    tasks[index].isTracked = true;
    showDialog(dialogElem.cbTracked);
    save();
  } else {
    tasks[index].isTracked = false;
    showDialog(dialogElem.cbUntracked);
    save();
  }
} // checkboxes check/uncheck

function bulkDelete() {
  if (tasks.length === 0) {
    closeBulkModal();
    showDialog(dialogElem.bulkDeleteFailDialog);
  } else {
    taskElem.taskField
      .querySelectorAll(".task-container")
      .forEach((el) => el.classList.add("remove"));
    tasks.splice(0, tasks.length);
    save();
    updateTaskCount();
    closeBulkModal();
    showDialog(dialogElem.bulkDeleteSuccessDialog);
    setTimeout(() => {
      taskRendering(tasks);
    }, 900);
  }
} // deleting all task in the list

export {
  addTask,
  deleteTask,
  updateCompleteStatus,
  updateTrackerStatus,
  bulkDelete,
};
