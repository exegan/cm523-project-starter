let flashcardCount = 1;

function addFlashcard() {
  if (flashcardCount >= 20) {
    return; // don't add more than 20 flashcards
  }
  
  flashcardCount++;
  
  const newFieldset = document.createElement('fieldset');
  newFieldset.innerHTML = `
    <legend>Flashcard ${flashcardCount}</legend>
    <div class="form-element">
      <div class="question-label">
        <label for="term-${flashcardCount}">Question or Term</label>
      </div>
      <textarea id="term-${flashcardCount}" rows="5" cols="30" placeholder="Enter your question or term"></textarea>
    </div>
    <div class="form-element">
      <div class="answer-label">
        <label for="definition-${flashcardCount}">Answer or Definition</label>
      </div>
      <textarea id="definition-${flashcardCount}" rows="5" cols="30" placeholder="Enter your answer or definition"></textarea>
    </div>
  `;
  
  const flashcardContainer = document.getElementById('flashcard-container');
  flashcardContainer.appendChild(newFieldset);
}

const flashcardData = [];
const flashcardElements = document.querySelectorAll('#flashcard-container fieldset');
for (let i = 0; i < flashcardElements.length; i++) {
  const questionTextarea = flashcardElements[i].querySelector(`#term-${i + 1}`);
  const answerTextarea = flashcardElements[i].querySelector(`#definition-${i + 1}`);
  flashcardData.push({
    question: questionTextarea.value,
    answer: answerTextarea.value
  });
}

fetch('menu.json', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(flashcardData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Error sending flashcard data');
    }
    console.log('Flashcard data sent successfully');
  })
  .catch(error => {
    console.error(error);
  });






