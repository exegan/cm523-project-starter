document.addEventListener("DOMContentLoaded", () => {
  const studyTools = document.querySelectorAll(".study-tools");
  const cardContainer = document.querySelectorAll(".card-container");
  const flashcardCarousel = document.querySelector(".flashcard-carousel");
  let flashcards = document.querySelectorAll(".flashcards .card");
  const front = document.querySelectorAll(".front");
  const back = document.querySelectorAll(".back");
  const teacupContainer = document.querySelectorAll(".teacup-container");
  const questionLabel = document.querySelectorAll(".question-label");
  const answerLabel = document.querySelectorAll(".answer-label");

  const question = document.getElementById("question");
  const answer = document.getElementById("answer");
  const nextBtn = document.getElementById("nextBtn");
  const addFlashcard = document.getElementById("add-flashcard");
  const backBtn = document.getElementById("backBtn");
  const saveBtn = document.getElementById("saveBtn");
  const flashcardsContainer = document.querySelector(".flashcards");

  let currentIndex = 0;
  let totalCards = flashcards.length;
  const cardWidth = flashcards[0].getBoundingClientRect().width;
  const CARDS_PER_ROW = 1;

  // flip cards
  function flipCard() {
    if (this.classList.contains("flipped")) {
      this.classList.remove("flipped");
    } else {
      this.classList.add("flipped");
    }
  }

  flashcards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });

  // add new card
  addFlashcard.addEventListener("click", () => {
    question.value = "";
    answer.value = "";
  });

  // create and view card
  function createCard(questionValue, answerValue) {
    const card = document.createElement("div");
    card.classList.add("card");
    const front = document.createElement("div");
    front.classList.add("front");
    front.textContent = questionValue;
    const back = document.createElement("div");
    back.classList.add("back");
    back.textContent = answerValue;
    card.appendChild(front);
    card.appendChild(back);
    flashcardsContainer.appendChild(card);

    // update flashcards array
    flashcards = document.querySelectorAll(".flashcards .card");

    card.addEventListener("click", flipCard);
  }

  saveBtn.addEventListener("click", () => {
    const questionValue = question.value;
    const answerValue = answer.value;
    createCard(questionValue, answerValue);
    question.value = "";
    answer.value = "";
    totalCards = flashcards.length;
  });

  // carousel navigation
  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalCards - 1) {
      currentIndex++;
      flashcardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });

  backBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      flashcardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });
});




 // Sources:
//https://codingartistweb.com/2022/08/flashcard-app-with-javascript/
//https://codingartistweb.com/2022/11/tea-cup-animation-css/
//https://codepen.io/CraddockJ/pen/qBbQzXe
//https://codepen.io/JPowell127/pen/BpOQWg