//Create a polka dot background using javascript
//Generate rando facts and pictures


//Global variables
const dogElement = document.querySelector(".dog");
const containerElement = document.querySelector(".container");
const catElement = document.querySelector(".cat");

//Globl class selections
const classDictionary = {
  fonts: ["Yomogi", "Press Start 2P","Merienda", "Indie Flower", "Amatic SC"],
  color: ["green", "purple", "red", "blue", "pink", "orange", "gray"],
  margin: ["margin-left", "margin-right"],
  marginValue: [10, 11, 11, 11, 12, 12, 13, 14, 15, 20, 20, 20],
  width: [30, 32, 38, 50, 52, 64, 65],

  randomClass: function() {
    const newClass = {};
    const keys = Object.keys(this)
    for (k of keys) {
      let key = this[k];
      let len = key.length;
      const ranNum = Math.floor(Math.random() * len);
      newClass[k] = this[k][ranNum];
    }

    const createdClass =
    `
    font-family: ${newClass.fonts};
    background-color: ${newClass.color};
    margin-top: ${newClass.marginValue - 13}%;
    ${newClass.margin}: ${newClass.marginValue}%;
    width: ${newClass.width}%;
    `
    return createdClass;
  }
};

//console.log(classDictionary.randomClass());

//Display facts function
const displayFact = async function(title, fact) {
  const style = classDictionary.randomClass();
  const article = document.createElement("article");
  article.innerHTML =
    `
    <div style="${style}">
    <h3> ${title}</h3>
    <p> ${fact} </p>
    </div>
    `;
  containerElement.append(article);
};

const displayImage = async function(title, image) {
  const style = classDictionary.randomClass();
  const article = document.createElement("article");
  article.innerHTML =
  `
  <div style="${style}">
  <h2>${title}</h2>
  <img src="${image}"/>
  </div>
  `;
  containerElement.append(article);
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
  displayFact(title, dateFact);
};

//Taks a random number ande generates a fact about it
//Grabs the math API
const numberFact = async function() {
  const title = "Random Math Fact:"
  const fetchData = await fetch("http://numbersapi.com/random/math");
  const mathFact = await fetchData.text();
  displayFact(title, mathFact);
};

const quoteFact = async function() {
  const title = "Random quote:"
  const fetchData = await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");
  const quoteData = await fetchData.json();
  const quote = " 	&quot; " + quoteData.data[0].quoteText + " 	&quot; &#126; " + quoteData.data[0].quoteAuthor;
  //displayFact(quoteElement, classE, quote);
  displayFact(title, quote);

};

const catFact = async function() {
  const title = "Random cat fact:"
  const fetchData = await fetch("https://meowfacts.herokuapp.com");
  const catFactData = await fetchData.json();
  const catFact = catFactData.data[0];
  displayFact(title, catFact);
};


const dogImage = async function(){
  const title = "Look at that face!";
  const fetchData = await fetch("https://random.dog/woof.json");
  const dogImgageData = await fetchData.json();
  const imageSrc = dogImgageData.url;
  displayImage(title, imageSrc);
};

dateFact();
numberFact();
quoteFact();
catFact();
dogImage();
