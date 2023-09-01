// variables
const words = ["a web developer", "a javascript programmer", "always learning"];

// functions
function writeWords(arr) {
  const span = document.querySelector("span");
  let timer;
  let counter = 0;
  // get a string with all chars in words and split it
  const totalString = [...new String(arr)];
  const length = totalString.length;
  timer = setInterval(() => {
    // as long as there are chars to be written
    if (counter < length) {
      if (totalString[counter] !== ",") {
        span.textContent += totalString[counter];
        counter++;
      } else {
        // if current char is a comma we reset all chars in the span
        span.textContent = "";
        counter++;
      }
    } else if (counter === length) {
      // if last char is reached counter and span textContent are reset
      // clearInterval(timer);
      counter = 0;
      span.textContent = "";
    }
  }, 350);
}
writeWords(words);

// eventListeners
