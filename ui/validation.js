console.log("validation.js is connected");
import { tasks } from "../data/state.js";
import { inputField } from "./elements/taskModuleDOM.js";
import { showDialog } from "./dialogs.js";
import { addTask } from "./tasks.js";

function duplicateChecker() {
  const isDuplicate = tasks.some(
    (item) => item.task.toLowerCase() === inputField.value.trim().toLowerCase(),
    // Ai suggested to add .toLowerCase() for case-sensitive searches
    // I added toLowerCase at the end to complete the comparison.
  );

  if (isDuplicate) {
    showDialog(duplicateDialog);
    inputField.value = "";
  } else {
    return isDuplicate;
  }
}

export default duplicateChecker;
