console.log("elements.js is connected");

// =========================================
// html elements
// =========================================

// ======= Buttons ==============

const floatButton = document.querySelector(".float-container");
const changelogBtn = document.querySelector(".changelog");
const doDeleteAll = document.querySelector(".bulkDeleteBtn");
const bulkAgreeBtn = document.querySelector(".bulkDeleteAgree");
const bulkDisagreeBtn = document.querySelector(".bulkDeleteDisagree");

// ======= Inputs ==============

const checkBoxes = document.querySelectorAll(".js-myCheckbox");

// ======= Layout ==============

const changelogSidebar = document.querySelector(".changelog-sidebar");
const tables = document.querySelectorAll("table");
const changeSection = document.querySelector(".change-section");
const backDrop = document.querySelector(".backdropD");

const main = document.querySelectorAll("main");

export {
  floatButton,
  changelogBtn,
  doDeleteAll,
  bulkAgreeBtn,
  bulkDisagreeBtn,
  checkBoxes,
  changelogSidebar,
  tables,
  changeSection,
  backDrop,
  main,
};
