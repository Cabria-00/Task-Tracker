console.log("search.js is connected");

import { tasks } from "../data/state.js";
import { taskRendering } from "./render.js";
import * as sidebarElem from "./elements/sidebarModuleDOM.js";
import * as searchElem from "./elements/searchModuleDOM.js";
import * as taskElem from "./elements/taskModuleDOM.js";

function itemSearch() {
  const searchItem = searchElem.searchField.value.trim();
  if (!searchItem) return;
  searchElem.searchBtn.innerHTML = `<i class="fa fa-close"></i>`;
  const result = tasks.filter(
    (item) => item.task.toLowerCase() === searchItem.toLowerCase(),
  );

  if (result.length > 0) {
    taskRendering(result);
  } else {
    taskElem.taskField.innerHTML = "";
    // create element
    const errorDiv = document.createElement("div");
    const errorP = document.createElement("p");

    // append
    taskElem.taskField.append(errorDiv);
    errorDiv.append(errorP);

    // adding attributes
    errorDiv.classList.add("errorFormat");

    // append
    errorP.textContent = `"${searchItem}" not found`;
  }
} // search button

function closeSearch() {
  searchElem.searchBtn.innerHTML = `<i class="fa fa-search"></i>`;
  taskRendering(tasks);
}

export { itemSearch, closeSearch };
