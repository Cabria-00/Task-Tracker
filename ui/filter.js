console.log("filter.js is connected");

import { taskRendering } from "./render.js";
import { taskField } from "./elements/taskModuleDOM.js";

function filterArray(paramArray, filterBy, filterValue) {
  const filteredArray = paramArray.filter(
    (item) => item[filterBy] === filterValue,
  );

  if (filteredArray.length === 0) {
    taskField.innerHTML = `<p class='errorFormat'>No results found<p>`;
    return;
  }

  taskRendering(filteredArray);
}

export default filterArray;
