console.log("state.js is connected");
let tasks = JSON.parse(localStorage.getItem("listOfTasks")) || []; // task storage

const changelog = [
  {
    Date: "April 5, 2026",
    Summary: "Created the initial tracker layout with task-adding support.",
    Changes: [
      "Added add, mark-as-complete, and delete buttons.",
      "Added the addTask function.",
      "Added the taskRendering function.",
    ],
  },
  {
    Date: "April 6, 2026",
    Summary:
      "Added a Task factory, localStorage support, dialog feedback, and Enter-key task submission.",
    Changes: [
      "Added the Task class.",
      "Added JSON saving.",
      "Added dialog popups.",
      "Enabled task creation with the Enter key.",
      "Added the date field.",
    ],
  },
  {
    Date: "April 7, 2026",
    Summary:
      "Added event-based dialogs and reusable handlers, along with delete and update functionality.",
    Changes: [
      "Added the showDialog function.",
      "Added the save function.",
      "Added the deleteTask function.",
      "Added the updateCompleteStatus function.",
    ],
  },
  {
    Date: "April 8, 2026",
    Summary:
      "Added a sidebar that displays task totals by completion status and task assignment.",
    Changes: [
      "Added the task-assignment input.",
      "Added the taskCount function.",
      "Added the updateTaskCount function.",
      "Added the sidebar.",
    ],
  },
  {
    Date: "April 9, 2026",
    Summary:
      "Added tracking checkboxes, refactored the codebase, and moved new tasks to the top of the list.",
    Changes: [
      "Added checkboxes.",
      "Added checkbox dialogs.",
      "Replaced pop() with unshift().",
    ],
  },
  {
    Date: "April 10, 2026",
    Summary:
      "Added duplicate detection, search with not-found feedback, and a changelog for tracking progress. Bug: both sidebars can stay open at the same time.",
    Changes: [
      "Added the duplicate dialog.",
      "Added the duplicateChecker function.",
      "Added the search button.",
      "Added the search field.",
      "Added the createElement function.",
      "Added the itemSearch function.",
      "Added the closeSearch function.",
      "Added the changelog.",
      "Saved the changelog to localStorage.",
    ],
  },
  {
    Date: "April 11, 2026",
    Summary:
      "Fixed the sidebar issue, added bulk delete, refreshed the task cards, introduced slide-in animations for new task, shrink animation for deleted tasks  and added filters for status and task assignment.",
    Changes: [
      "Fixed the sidebar bug.",
      "Added bulkDelete.",
      "Added bulk delete dialogs.",
      "Improved the task list styling.",
      "Refactored parts of the codebase.",
      "Added the filter function.",
      "Refactored the addTask function.",
      "Refactored the taskRendering function.",
      "Refactored the createElement function.",
    ],
  },
  {
    Date: "April 12, 2026",
    Summary:
      "Change the animation for new task to bounce and deleted task to elastic.",
    Changes: [
      "Added bounce animation for new task.",
      "Added elastic animation for deleted task.",
    ],
  },
  {
    Date: "May 8, 2026",
    Summary:
      "Implemented a copy button, improve UI for search button, set default task assigment to 'Assigned Task' and refined the sidebar layout.",
    Changes: [
      "Added copy functionality.",
      "Modified the width of the sidebar from 25vw to 400px.",
      "Set the default task assignment to 'Assigned Task",
      "Improve UI for search button. Can now close the search function by clicking the x button.",
    ],
  },
  {
    Date: "June 6, 2026",
    Summary:
      "Modularize the whole app so that it is not a one big file of javascript.",
    Changes: ["Modularize the whole app"],
  },
]; // changelog storage

export { tasks, changelog };
