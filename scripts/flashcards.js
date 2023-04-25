    fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    const flashcards = data.flashcards;
    createFlashcards(flashcards);
  })
  .catch(error => console.error(error));



function createFlashcards(flashcards){

    const container = document.getElementById('flashcard-container');
    for (let i = 0; i < flashcards.length; i++) {
        const card = document.createElement('div');
        card.classList.add('flashcard');

        card.innerHTML = `
  <div class="front">${flashcards[i]['#term']}</div>
  <div class="back">${flashcards[i]['#definition']}</div>
`;

container.appendChild(card);
    }

}