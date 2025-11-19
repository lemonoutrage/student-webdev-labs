// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

/*
let userInput1 = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output1 = document.querySelector("#output1");

copy.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("click event", event);
  output1.textContent = userInput1.value;
}
*/
$("document").ready(() => {
  $("#copy").on("click", (event) => {
    console.log("Click event", event);

    $("#output1").textContent = $("#userInput1").val();
  });
});
// Exercise #2:
// When the user enters input text, copy the user input to the output area

$("document").ready(() => {
  $("#userInput2").on("input", () => {
    $("#output2").text($("#userInput1").val());
  });
});
