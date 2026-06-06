console.log("storage.js is connected");

import { tasks, changelog } from "../data/state.js";

export function save() {
  localStorage.setItem("listOfTasks", JSON.stringify(tasks));
}

export function saveChangelog() {
  localStorage.setItem("changelog", JSON.stringify(changelog));
}
