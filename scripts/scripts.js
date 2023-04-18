/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */
fetch('./menu.json')
.then((response) => response.json())
.then((json) => console.log(json));
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);

const flashcards = json.menu.filter(obj => obj.category.includes("flashcards"));
const flashcardArray = flashcards.map(obj => [obj.front, obj.back]);
