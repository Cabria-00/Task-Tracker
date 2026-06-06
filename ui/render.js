console.log("render.js is connected");

import { tasks, changelog } from "../data/state.js";
import countTask from "../ui/count.js";
import { toggleSidebar } from "./sidebar.js";
import * as taskElem from "./elements/taskModuleDOM.js";
import * as elem from "./elements.js";

export function createElement(object) {
  // creating elements
  const taskDiv = document.createElement("div");
  const taskInfoDiv = document.createElement("div");
  const taskP = document.createElement("p");
  const taskCheckBox = document.createElement("input");
  const taskAssignmentP = document.createElement("p");
  const taskAssignmentPCopyBtn = document.createElement("button");
  const taskAssignmentPCopyBtnIcon = document.createElement("i");
  const taskDateP = document.createElement("p");
  const taskCompleteBtn = document.createElement("button");
  const taskDeleteBtn = document.createElement("button");
  const vr1 = document.createElement("hr");
  const vr2 = document.createElement("hr");
  const vr3 = document.createElement("hr");

  // append
  taskDiv.appendChild(taskInfoDiv);
  taskInfoDiv.appendChild(taskP);
  taskInfoDiv.appendChild(taskAssignmentP);
  taskDiv.appendChild(taskAssignmentPCopyBtn);
  taskAssignmentPCopyBtn.appendChild(taskAssignmentPCopyBtnIcon);
  taskDiv.appendChild(vr1);
  taskDiv.appendChild(taskCheckBox);
  taskDiv.appendChild(vr2);
  taskDiv.appendChild(taskDateP);
  taskDiv.appendChild(vr3);
  taskDiv.appendChild(taskCompleteBtn);
  taskDiv.appendChild(taskDeleteBtn);

  // adding attributes
  taskDiv.classList.add("task-container");
  taskDiv.dataset.id = object.uniqueId;
  taskInfoDiv.classList.add("task-info");
  taskP.classList.add("task");
  taskDateP.classList.add("shiftDate");
  taskAssignmentP.classList.add("task-sub");
  taskCheckBox.classList.add("js-myCheckbox");
  taskCheckBox.setAttribute("type", "checkbox");
  taskAssignmentPCopyBtn.classList.add("copy-Btn");
  taskCompleteBtn.classList.add("completeBtn");
  taskCompleteBtn.setAttribute("id", "js-completed-btn");
  taskDeleteBtn.classList.add("deleteBtn");
  taskDeleteBtn.setAttribute("id", "js-delete-btn");
  vr1.classList.add("vr");
  vr2.classList.add("vr");
  vr3.classList.add("vr");

  // assiding values
  taskP.innerText = object.task;
  taskAssignmentP.innerText = object.taskAssignment || "Assigned task";
  taskAssignmentPCopyBtnIcon.innerHTML = `<i class="fa fa-copy"></i>`;
  taskDateP.innerText = object.shiftDate;
  taskCompleteBtn.innerHTML = `<i class="fa fa-check"></i>`;
  taskDeleteBtn.innerHTML = `<i class="fa fa-trash-o"></i>`;

  // isCompleted strike-through
  if (object.isCompleted === true) {
    taskP.classList.add("strike");
    taskCompleteBtn.innerHTML = `<i class="fa fa-close"></i>`;
  } else {
    taskCompleteBtn.innerHTML = `<i class="fa fa-check"></i>`;
  }
  // isChecked
  if (object.isTracked === true) {
    taskCheckBox.checked = true;
  } else {
    taskCheckBox.checked = false;
  }
  if (
    object.taskAssignment === "Assigned task" ||
    object.taskAssignment === "Grabbed task"
  ) {
    taskAssignmentP.classList.add("assigned");
  } else {
    taskAssignmentP.classList.add("endorsed");
  }

  return taskDiv; //because all the elements are in this div. It is like the final product fully assembled
}

export function taskRendering(paramArray) {
  // reseting the task
  taskElem.taskField.innerHTML = "";
  paramArray.forEach((task) => {
    const el = createElement(task);
    taskElem.taskField.appendChild(el);
    // // creating elements
    // const taskDiv = document.createElement("div");
    // const taskInfoDiv = document.createElement("div");
    // const taskP = document.createElement("p");
    // const taskCheckBox = document.createElement("input");
    // const taskAssignmentP = document.createElement("p");
    // const taskDateP = document.createElement("p");
    // const taskCompleteBtn = document.createElement("button");
    // const taskDeleteBtn = document.createElement("button");
    // const vr1 = document.createElement("hr");
    // const vr2 = document.createElement("hr");
    // const vr3 = document.createElement("hr");

    // // append
    // taskField.appendChild(taskDiv);
    // taskDiv.appendChild(taskInfoDiv);
    // taskInfoDiv.appendChild(taskP);
    // taskInfoDiv.appendChild(taskAssignmentP);
    // taskDiv.appendChild(vr1);
    // taskDiv.appendChild(taskCheckBox);
    // taskDiv.appendChild(vr2);
    // taskDiv.appendChild(taskDateP);
    // taskDiv.appendChild(vr3);
    // taskDiv.appendChild(taskCompleteBtn);
    // taskDiv.appendChild(taskDeleteBtn);

    // // adding attributes
    // taskDiv.classList.add("task-container");
    // taskDiv.dataset.id = task.uniqueId;
    // taskInfoDiv.classList.add("task-info");
    // taskP.classList.add("task");
    // taskDateP.classList.add("shiftDate");
    // taskAssignmentP.classList.add("task-sub");
    // taskCheckBox.classList.add("js-myCheckbox");
    // taskCheckBox.setAttribute("type", "checkbox");
    // taskCompleteBtn.classList.add("completeBtn");
    // taskCompleteBtn.setAttribute("id", "js-completed-btn");
    // taskDeleteBtn.classList.add("deleteBtn");
    // taskDeleteBtn.setAttribute("id", "js-delete-btn");
    // vr1.classList.add("vr");
    // vr2.classList.add("vr");
    // vr3.classList.add("vr");

    // // assiding values
    // taskP.innerText = task.task;
    // taskAssignmentP.innerText = task.taskAssignment;
    // taskDateP.innerText = task.shiftDate;
    // taskCompleteBtn.innerHTML = `<i class="fa fa-check"></i>`;
    // taskDeleteBtn.innerHTML = `<i class="fa fa-trash-o"></i>`;

    // // isCompleted strike-through
    // if (task.isCompleted === true) {
    //   taskP.classList.add("strike");
    //   taskCompleteBtn.innerHTML = `<i class="fa fa-close"></i>`;
    // } else {
    //   taskCompleteBtn.innerHTML = `<i class="fa fa-check"></i>`;
    // }
    // // isChecked
    // if (task.isTracked === true) {
    //   taskCheckBox.checked = true;
    // } else {
    //   taskCheckBox.checked = false;
    // }
  });
}

export function renderChangeLog() {
  toggleSidebar(elem.changelogSidebar);

  elem.changeSection.innerHTML = "";

  const reversedChangelog = [...changelog].sort(
    (a, b) => new Date(b.Date) - new Date(a.Date),
  );

  reversedChangelog.forEach((change) => {
    // creating elements
    const changeContainer = document.createElement("div");
    const dateContainer = document.createElement("p");
    const summaryContainer = document.createElement("p");
    const hr = document.createElement("hr");

    // appending elements
    elem.changeSection.appendChild(changeContainer);
    changeContainer.appendChild(dateContainer);
    changeContainer.appendChild(hr);
    changeContainer.appendChild(summaryContainer);

    // assigning attributes
    changeContainer.classList.add("div-section");
    dateContainer.classList.add("changeDate");
    summaryContainer.classList.add("changeSummary");

    // assigning text content
    dateContainer.innerText = `${change.Date}`;
    summaryContainer.innerText = `${change.Summary}`;
  });
} // open change log button

export function updateTaskCount() {
  elem.tables[0].querySelector(".js-total-task").innerText = countTask(tasks);
  elem.tables[0].querySelector(".js-touched").innerText = countTask(
    tasks,
    "isCompleted",
    true,
  );
  elem.tables[0].querySelector(".js-not-touched").innerText = countTask(
    tasks,
    "isCompleted",
    false,
  );
  elem.tables[1].querySelector(".js-assigned").innerText = countTask(
    tasks,
    "taskAssignment",
    "Assigned task",
  );
  elem.tables[1].querySelector(".js-grabbed").innerText = countTask(
    tasks,
    "taskAssignment",
    "Grabbed task",
  );
  elem.tables[1].querySelector(".js-previously").innerText = countTask(
    tasks,
    "taskAssignment",
    "Previously worked on",
  );
  elem.tables[1].querySelector(".js-endorsed").innerText = countTask(
    tasks,
    "taskAssignment",
    "Endorsed to me",
  );
  elem.tables[1].querySelector(".js-none").innerText = countTask(
    tasks,
    "taskAssignment",
    "-",
    ``,
  );
}
