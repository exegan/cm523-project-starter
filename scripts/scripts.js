const flashcardForm = document.querySelector("#flashcard-form");
const flashcardContainer = document.getElementById("flashcard-container");
const questionTextarea = document.getElementById("question");
const answerTextarea = document.getElementById("answer");
const addFlashcardBtn = document.getElementById("addCardBtn");
const submitBtn = document.getElementById("submitBtn");

addFlashcardBtn.addEventListener("click", function() {
  const questionValue = questionTextarea.value;
  const answerValue = answerTextarea.value;
  const flashcardElement = document.createElement("div");
  flashcardElement.classList.add("flashcard");

  
  addQuestion.addEventListener("click", () => {
  container.classList.add("hide");
  question.value = "";
  answer.value = "";
  addQuestionCard.classList.remove("hide");
    
    
     const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.textContent = questionValue;
  flashcardElement.appendChild(questionElement);
  
  const answerElement = document.createElement("div");
  answerElement.classList.add("answer");
  answerElement.textContent = answerValue;
  flashcardElement.appendChild(answerElement);
 
  flashcardContainer.appendChild(flashcardElement);
  
  questionTextarea.value = "";
  answerTextarea.value = "";
});

submitBtn.addEventListener("click", function() {

  const flashcardElements = flashcardContainer.querySelectorAll(".flashcard");
  
  flashcardElements.forEach(function(flashcardElement) {
    const questionValue = flashcardElement.querySelector(".question").textContent;
    const answerValue = flashcardElement.querySelector(".answer").textContent;
    
    console.log("Question:", questionValue);
    console.log("Answer:", answerValue);
  });
});

document.addEventListener("click", function(event) {
 
  if (event.target.classList.contains("flip-card-btn")) {
   
    const flashcardElement = event.target.closest(".flashcard");
   flashcardElement.classList.toggle("flipped");
  }
});