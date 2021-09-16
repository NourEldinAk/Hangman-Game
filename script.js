let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");
lettersArray.forEach((letter) => {
  /*create span */
  let span = document.createElement("span");
  /*create the letter*/
  let theLetter = document.createTextNode(letter);
  /*append the letter to the span */
  span.appendChild(theLetter);
  lettersContainer.appendChild(span);

  span.className = "letter-box";
});
let words = {
  programming: [
    "php",
    "java",
    "angular",
    "python",
    "css",
    "html",
    "javascript",
    "c++",
  ],
  movies: [
    "Lord of the rings",
    "parasite",
    "platform",
    "inception",
    "godfather",
    "forgotten",
  ],
  games: [
    "blade and soul",
    "tera",
    "call of duty",
    "god of war",
    "dark souls",
    "league of legends",
    "lineage",
  ],
  countries: [
    "libya",
    "egypt",
    "syria",
    "tunis",
    "morocco",
    "canada",
    "america",
    "sudan",
    "iraq",
  ],
  AnimeCharacters: [
    "Aizen",
    "sasuke",
    "ichigo",
    "killua",
    "hisoka",
    "lelouch",
    "kira",
    "sanji",
    "zaraki kenpachi",
  ],
};
/*get the keys of the object and put them in an array*/
let allKeys = Object.keys(words);
/*get a random number */
let randomNum = Math.floor(Math.random() * allKeys.length);
/*get a random category from the array */
let randomProp = allKeys[randomNum];
/*get the values of the chosen category */
let randomPropValue = words[randomProp];
/*get a random index from a specific category */
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
/*get a specific word from the category */
let randomWord = randomPropValue[randomValueNumber];
document.querySelector(".game-info .category span").innerHTML = randomProp;
let lettersGuessContainer = document.querySelector(".letters-guess");
let lettersAndSpace = Array.from(randomWord);
lettersAndSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    emptySpan.className = "has-space";
  }
  lettersGuessContainer.appendChild(emptySpan);
});
let guessLetters = document.querySelectorAll(".letters-guess span");
let wrongAttempts = 0;
let theDraw = document.querySelector(".hangman-draw");
addEventListener("click", (e) => {
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    let clickedLetter = e.target.innerHTML.toLowerCase();

    lettersAndSpace.forEach((wordLetter, index) => {
      if (clickedLetter == wordLetter) {
        theStatus = true;
        guessLetters.forEach((span, spanIndex) => {
          if (index === spanIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });
    if (theStatus !== true) {
      wrongAttempts++;
      theDraw.classList.add(`wrong-${wrongAttempts}`);
      document.getElementById("failed").play();
      if (wrongAttempts === 8) {
        endgame();
        lettersContainer.classList.add("finished");
      }
    } else {
      document.getElementById("success").play();
      // if () {
      //   Swal.fire({
      //     title: "You Win",
      //     showClass: {
      //       popup: "animate__animated animate__fadeInDown",
      //     },
      //     hideClass: {
      //       popup: "animate__animated animate__fadeOutUp",
      //     },
      //   });
      // }
    }
  }
});
function endgame() {
  Swal.fire({
    title: "Game Over",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
}
