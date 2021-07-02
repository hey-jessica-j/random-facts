//Create a polka dot background using javascript
//Generate rando facts and pictures


//Global variables
const dogElement = document.querySelector(".dog");
const containerElement = document.querySelector(".container");
const catElement = document.querySelector(".cat");


//Display facts function
const displayFact = async function(title, classE, fact) {
  const div = document.createElement("div");
  div.classList.add(classE);
  div.innerHTML =
  `
  <h3> ${title}</h3>
  <p> ${fact} </p>
  `;
  containerElement.append(div);
};

//Takes Todays date and generates a fact about it
//Possible improvements - add a timer so it creates a new fact after a cetain time passes
//Grabs the Date API
const dateFact = async function() {
  const today = new Date();
  const dd = today.getDate();
  const mm = today.getMonth() + 1;
  const yy = today.getYear();

  let title = `On today's date: ${mm}/${dd}...`;
  const classE = "todays-date";

  const fetchData = await fetch(`http://numbersapi.com/${mm}/${dd}/date`);
  const dateFact = await fetchData.text();
  displayFact(title, classE, dateFact);
};

//Taks a random number ande generates a fact about it
//Grabs the math API
const numberFact = async function() {
  const title = "Random Math Fact:"
  const classE = "math-class";
  const fetchData = await fetch("http://numbersapi.com/random/math");
  const mathFact = await fetchData.text();
  displayFact(title, classE, mathFact);
};

const quoteFact = async function() {
  const title = "Random quote:"
  const classE = "quote";
  const fetchData = await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");
  const quoteData = await fetchData.json();
  const quote = " 	&quot; " + quoteData.data[0].quoteText + " 	&quot; &#126; " + quoteData.data[0].quoteAuthor;
  //displayFact(quoteElement, classE, quote);
  displayFact(title, classE, quote);

};

dateFact();
numberFact();
quoteFact();
