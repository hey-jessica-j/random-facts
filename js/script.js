//Create a polka dot background using javascript
//Generate rando facts and pictures


//Global variables
const dogElement = document.querySelector(".dog");
const todaysDateElement = document.querySelector(".todays-date");
const mathElement = document.querySelector(".math-class");
const passwordElement = document.querySelector(".password");
const quoteElement = document.querySelector(".quote");
const catElement = document.querySelector(".cat");


//Takes Todays date and generates a fact about it
//Possible improvements - add a timer so it creates a new fact after a cetain time passes
//Grabs the Date API
const dateFact = async function() {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yy = today.getYear();
  const fetchData = await fetch(`http://numbersapi.com/${mm}/${dd}/date`);
  const dateFact = await fetchData.text();
  displayDateFact(dateFact);
};
//Creates a place for fact in document and shows the element
const displayDateFact = async function(dateFact) {
  todaysDateElement.classList.remove("hide");
  todaysDateElement.innerHTML =
  `<p> ${dateFact}</p>`;
};

dateFact();
