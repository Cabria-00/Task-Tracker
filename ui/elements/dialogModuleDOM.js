// ======= Dialogs ==============
const errorDialog = document.querySelector(".no-task-input");
const completeDialog = document.querySelector(".task-completed");
const deleteDialog = document.querySelector(".task-deleted");
const addDialog = document.querySelector(".task-added");
const uncheckedDialog = document.querySelector(".task-unchecked");
const cbTracked = document.querySelector(".task-tracked");
const cbUntracked = document.querySelector(".task-untracked");
const duplicateDialog = document.querySelector(".duplicate");
const bulkDeleteDialog = document.querySelector(".bulkDeleteDialog");
const bulkDeleteSuccessDialog = document.querySelector(".bulkDeleteSuccess");
const bulkDeleteFailDialog = document.querySelector(".bulkDeleteFail");

export {
  errorDialog,
  completeDialog,
  deleteDialog,
  addDialog,
  uncheckedDialog,
  cbTracked,
  cbUntracked,
  duplicateDialog,
  bulkDeleteDialog,
  bulkDeleteSuccessDialog,
  bulkDeleteFailDialog,
};
