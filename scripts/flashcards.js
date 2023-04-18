fetch('./menu.json')
.then((response) => response.json())
.then((json) => console.log(json));
const flashcards = json.menu.filter(obj => obj.category.includes("flashcards"));
const flashcardArray = flashcards.map(obj => [obj.front, obj.back]);