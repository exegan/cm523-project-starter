const urlParams = new URLSearchParams(window.location.search);
const flashcards = JSON.parse(decodeURIComponent(urlParams.get('flashcards')));

const flashcardContainer = document.getElementById('flashcard-container');
for (let i = 0; i < flashcards.length; i++) {
  const flashcard = flashcards[i];
  const newFieldset = document.createElement('fieldset');
  newFieldset.innerHTML = `
    <legend>Flashcard ${i + 1}</legend>
    <div class="form-element">