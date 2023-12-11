// Storing as const vars
const rowOne = document.querySelector(".rowOne");
const rowTwo = document.querySelector(".rowTwo");
const rowThree = document.querySelector(".rowThree");
const rowFour = document.querySelector(".rowFour");
const cyberSection = document.querySelector(".cyber");
const compSciSection = document.querySelector(".compSci");
const softEngSection = document.querySelector(".softEng");
const infoTechSection = document.querySelector(".infoTech");
const sess = document.querySelector(".sess");

// This is for the second column

const cyberOne = document.querySelector(".cyberOne");
const cyberTwo = document.querySelector(".cyberTwo");
const compSciOne = document.querySelector(".compSciOne");
const compSciTwo = document.querySelector(".compSciTwo");
const softEngOne = document.querySelector(".softEngOne");
const softEngTwo = document.querySelector(".softEngTwo");
const infoTechOne = document.querySelector(".infoTechOne");
const infoTechTwo = document.querySelector(".infoTechTwo");

// This is for the third column to be displayed

const one = document.querySelector(".one");
// const two = document.querySelector(".two");
// const three = document.querySelector(".three");
// const four = document.querySelector(".four");
// const five = document.querySelector(".five");
// const six = document.querySelector(".six");
// const sev = document.querySelector(".sev");
// const eig = document.querySelector(".eig");
const topics = document.querySelector(".topics");

//Back buttons
const back = document.getElementById("back");
const back2 = document.getElementById("back2");

//Class Names of each column
const columnOne = document.getElementById("columnOne");
const columnTwo = document.getElementById("columnTwo");
const columnThree = document.getElementById("columnThree");

// Add click event listeners to the row elements
rowOne.addEventListener("click", () => {
  cyberSection.style.display = "block";
  compSciSection.style.display = "none";
  softEngSection.style.display = "none";
  infoTechSection.style.display = "none";
  sess.style.display = "block";

  //Column one disppears
  columnOne.style.display = "none";
  // Back button
  back.style.display = "inline-block";
});

rowTwo.addEventListener("click", () => {
  cyberSection.style.display = "none";
  compSciSection.style.display = "block";
  softEngSection.style.display = "none";
  infoTechSection.style.display = "none";
  sess.style.display = "block";

  //Column one disppears
  columnOne.style.display = "none";
  // Back button
  back.style.display = "inline-block";
});

rowThree.addEventListener("click", () => {
  cyberSection.style.display = "none";
  compSciSection.style.display = "none";
  softEngSection.style.display = "block";
  infoTechSection.style.display = "none";
  sess.style.display = "block";

  //Column one disppears
  columnOne.style.display = "none";
  // Back button
  back.style.display = "inline-block";
});

rowFour.addEventListener("click", () => {
  cyberSection.style.display = "none";
  compSciSection.style.display = "none";
  softEngSection.style.display = "none";
  infoTechSection.style.display = "block";
  sess.style.display = "block";

  //Column one disppears
  columnOne.style.display = "none";
  // Back button
  back.style.display = "inline-block";
});

// Third column to display

cyberOne.addEventListener("click", () => {
  one.style.display = "block";
  topics.style.display = "block";

  //Column two disappears
  columnTwo.style.display = "none";
  back2.style.display = "inline-block";
  back.style.display = "none";
});

cyberTwo.addEventListener("click", () => {
  one.style.display = "block";
  topics.style.display = "block";
  //Column two disappears
  columnTwo.style.display = "none";
});

compSciOne.addEventListener("click", () => {
  one.style.display = "block";
  topics.style.display = "block";
  //Column two disappears
  columnTwo.style.display = "none";
});

compSciTwo.addEventListener("click", () => {
  one.style.display = "block";
  topics.style.display = "block";
  //Column two disappears
  columnTwo.style.display = "none";
});

softEngOne.addEventListener("click", () => {
  one.style.display = "block";
  topics.style.display = "block";
  //Column two disappears
  columnTwo.style.display = "none";
});

softEngTwo.addEventListener("click", () => {
  one.style.display = "block";
  topics.style.display = "block";
  //Column two disappears
  columnTwo.style.display = "none";
});

infoTechOne.addEventListener("click", () => {
  one.style.display = "block";
  topics.style.display = "block";
  //Column two disappears
  columnTwo.style.display = "none";
});

infoTechTwo.addEventListener("click", () => {
  one.style.display = "block";
  topics.style.display = "block";
  //Column two disappears
  columnTwo.style.display = "none";
});

//If the back button is clicked the function below work

function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}
