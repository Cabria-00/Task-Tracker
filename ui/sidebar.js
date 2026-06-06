console.log("sidebar.js is connected");
import { tasks } from "../data/state.js";
import { taskRendering } from "./render.js";
import * as sibebarElem from "./elements/sidebarModuleDOM.js";

function collapseSidebar() {
  toggleSidebar(sibebarElem.sidebar);
} // open taskcount sidebar button

function resetSidebar() {
  document
    .querySelectorAll(".sidebar")
    .forEach((aside) => aside.classList.remove("showSideBar"));
}

function toggleSidebar(targetSidebar) {
  const isOpen = targetSidebar.classList.contains("showSideBar");

  resetSidebar();

  if (!isOpen) {
    targetSidebar.classList.add("showSideBar");
  }
}

function showFilterOptions() {
  const isOpen = sibebarElem.filterInputContainer.classList.contains("show");

  if (isOpen) {
    sibebarElem.filterInputContainer.classList.remove("show");
    taskRendering(tasks);
    sibebarElem.filterInput.selectedIndex = 0;
  } else {
    sibebarElem.filterInputContainer.classList.add("show");
  }
} // open the filter

export { collapseSidebar, resetSidebar, toggleSidebar, showFilterOptions };
