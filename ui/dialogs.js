console.log("dialog.js is connected");

import { backDrop } from "./elements.js";
import * as dialogElem from "./elements/dialogModuleDOM.js";

function showDialog(dialogType, timer = 3000) {
  document.querySelectorAll(".dialog").forEach((dialog) => {
    dialog.classList.remove("showDialog");
  });

  dialogType.classList.add("showDialog");

  window.setTimeout(() => {
    dialogType.classList.remove("showDialog");
  }, timer);
}

function openBulkModal() {
  dialogElem.bulkDeleteDialog.style.opacity = 1;
  dialogElem.bulkDeleteDialog.style.pointerEvents = "auto";
  backDrop.classList.add("active");
} // open the dialog for delete all

function closeBulkModal() {
  dialogElem.bulkDeleteDialog.style.opacity = 0;
  backDrop.classList.remove("active");
} // close the dialog for delete all

export { showDialog, openBulkModal, closeBulkModal };
