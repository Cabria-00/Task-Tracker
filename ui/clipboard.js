console.log("clipboard.js is connected");

function copyText(text) {
  navigator.clipboard.writeText(text);
} // copy the text

function showCopySuccess(element, text) {
  navigator.clipboard.writeText(text);
  element.innerHTML = `<i class="fa fa-check"></i>`;
  setTimeout(() => {
    element.innerHTML = `<i class="fa fa-copy"></i>`;
  }, 1500);
}

export { copyText, showCopySuccess };
