console.log("event.js is connected");
import { tasks } from "../data/state.js";
import duplicateChecker from "../ui/validation.js";
import filterArray from "../ui/filter.js";
import { renderChangeLog } from "../ui/render.js";
import {
  addTask,
  deleteTask,
  updateCompleteStatus,
  updateTrackerStatus,
  bulkDelete,
} from "../ui/tasks.js";
import * as sidebar from "../ui/sidebar.js";
import * as search from "../ui/search.js";
import * as dialogs from "../ui/dialogs.js";
import * as taskElem from "../ui/elements/taskModuleDOM.js";
import * as dialogElem from "../ui/elements/dialogModuleDOM.js";
import * as searchElem from "../ui/elements/searchModuleDOM.js";
import * as sidebarElem from "../ui/elements/sidebarModuleDOM.js";
import * as elements from "../ui/elements.js";
import * as clipboard from "../ui/clipboard.js";

let isSearch = true;

export default function initEvents() {
  // button
  taskElem.addButton.addEventListener("click", () => {
    const isDuplicate = duplicateChecker();

    if (isDuplicate) {
      showDialog(dialogElem.duplicateDialog);
      taskElem.inputField.value = "";
    } else {
      addTask();
    }
  });
  elements.floatButton.addEventListener("click", sidebar.collapseSidebar);
  searchElem.searchBtn.addEventListener("click", () => {
    if (isSearch) {
      search.closeSearch();
      searchElem.searchField.value = "";
      isSearch = false;
      return;
    }
    isSearch = true;
    search.itemSearch();
  });
  elements.changelogBtn.addEventListener("click", renderChangeLog);
  elements.doDeleteAll.addEventListener("click", dialogs.openBulkModal);
  elements.bulkAgreeBtn.addEventListener("click", bulkDelete);
  elements.bulkDisagreeBtn.addEventListener("click", dialogs.closeBulkModal);
  sidebarElem.filterViewBtn.addEventListener(
    "click",
    sidebar.showFilterOptions,
  );
  sidebarElem.filterInput.addEventListener("change", (e) => {
    const selectedOption = e.target.value;

    switch (selectedOption) {
      case "isCompletedTrue":
        filterArray(tasks, "isCompleted", true);
        break;
      case "isCompletedFalse":
        filterArray(tasks, "isCompleted", false);
        break;
      case "isTrackedTrue":
        filterArray(tasks, "isTracked", true);
        break;
      case "assigned":
        filterArray(tasks, "taskAssignment", "Assigned task");
        break;
      case "grabbed":
        filterArray(tasks, "taskAssignment", "Grabbed task");
        break;
      case "previously-worked":
        filterArray(tasks, "taskAssignment", "Previously worked on");
        break;
      case "endorsed":
        filterArray(tasks, "taskAssignment", "Endorsed to me");
        break;
      case "no-tag":
        filterArray(tasks, "taskAssignment", "-");
        break;
      default:
        console.log("None selected");
    }
  });

  // event delegation / other
  taskElem.inputField.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      duplicateChecker();
    }
  });
  taskElem.dateField.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      duplicateChecker();
    }
  });
  taskElem.assignmentMethod.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      duplicateChecker();
    }
  });
  taskElem.taskField.addEventListener("click", (e) => {
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
  searchElem.searchField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      isSearch = true;
      search.itemSearch();
    } else if (e.key === "Escape") {
      isSearch = false;
      search.closeSearch();
      searchField.value = "";
    } else if (!searchElem.searchField.value) {
      isSearch = false;
      search.closeSearch();
    }
  });
}
