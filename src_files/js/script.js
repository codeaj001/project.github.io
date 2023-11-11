// Storing as const vars
const rowOne = document.querySelector('.rowOne');
const rowTwo = document.querySelector('.rowTwo');
const rowThree = document.querySelector('.rowThree');
const rowFour = document.querySelector('.rowFour');
const cyberSection = document.querySelector('.cyber');
const compSciSection = document.querySelector('.compSci');
const softEngSection = document.querySelector('.softEng');
const infoTechSection = document.querySelector('.infoTech');
const sess = document.querySelector('.sess');

// This is for the second column

const cyberOne = document.querySelector('.cyberOne');
const cyberTwo = document.querySelector('.cyberTwo');
const compSciOne = document.querySelector('.compSciOne');
const compSciTwo = document.querySelector('.compSciTwo');
const softEngOne = document.querySelector('.softEngOne');
const softEngTwo = document.querySelector('.softEngTwo');
const infoTechOne = document.querySelector('.infoTechOne');
const infoTechTwo = document.querySelector('.infoTechTwo');

// This is for the third column to be displayed

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const sev = document.querySelector('.sev');
const eig = document.querySelector('.eig');
const topics = document.querySelector('.topics');



// Add click event listeners to the row elements
rowOne.addEventListener('click', () => {
    cyberSection.style.display = 'block';
    compSciSection.style.display = 'none';
    softEngSection.style.display = 'none';
    infoTechSection.style.display = 'none';
    sess.style.display = 'block';
});

rowTwo.addEventListener('click', () => {
    cyberSection.style.display = 'none';
    compSciSection.style.display = 'block';
    softEngSection.style.display = 'none';
    infoTechSection.style.display = 'none';
    sess.style.display = 'block';
});

rowThree.addEventListener('click', () => {
    cyberSection.style.display = 'none';
    compSciSection.style.display = 'none';
    softEngSection.style.display = 'block';
    infoTechSection.style.display = 'none';
    sess.style.display = 'block';
});

rowFour.addEventListener('click', () => {
    cyberSection.style.display = 'none';
    compSciSection.style.display = 'none';
    softEngSection.style.display = 'none';
    infoTechSection.style.display = 'block';
    sess.style.display = 'block';
});

// Third column to display

cyberOne.addEventListener('click', () => {
    one.style.display = 'block';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';
    six.style.display = 'none';
    sev.style.display = 'none';
    eig.style.display = 'none';
    topics.style.display = 'block';
});

cyberTwo.addEventListener('click', () => {
    one.style.display = 'none';
    two.style.display = 'block';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';
    six.style.display = 'none';
    sev.style.display = 'none';
    eig.style.display = 'none';
    topics.style.display = 'block';
});

compSciOne.addEventListener('click', () => {
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'block';
    four.style.display = 'none';
    five.style.display = 'none';
    six.style.display = 'none';
    sev.style.display = 'none';
    eig.style.display = 'none';
    topics.style.display = 'block';
});

compSciTwo.addEventListener('click', () => {
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'block';
    five.style.display = 'none';
    six.style.display = 'none';
    sev.style.display = 'none';
    eig.style.display = 'none';
    topics.style.display = 'block';
});

softEngOne.addEventListener('click', () => {
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'block';
    six.style.display = 'none';
    sev.style.display = 'none';
    eig.style.display = 'none';
    topics.style.display = 'block';
});

softEngTwo.addEventListener('click', () => {
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';
    six.style.display = 'block';
    sev.style.display = 'none';
    eig.style.display = 'none';
    topics.style.display = 'block';
});

infoTechOne.addEventListener('click', () => {
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';
    six.style.display = 'none';
    sev.style.display = 'block';
    eig.style.display = 'none';
    topics.style.display = 'block';
});

infoTechTwo.addEventListener('click', () => {
    one.style.display = 'none';
    two.style.display = 'none';
    three.style.display = 'none';
    four.style.display = 'none';
    five.style.display = 'none';
    six.style.display = 'none';
    sev.style.display = 'none';
    eig.style.display = 'block';
    topics.style.display = 'block';
});

function myFunction() {
var x = document.getElementById("myTopNav");
if (x.className === "topNav") {
    x.className += " responsive";
} else {
    x.className = "topNav";
}
}