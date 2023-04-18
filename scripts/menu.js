fetch('./menu.json')
.then((response) => response.json())
.then((json) => console.log(json));
.then(data => {
    const menu= data.menu;
    const newFront = prompt('Enter the Term');
    const newBack = prompt('Enter the Definition');
    const itemToUpdate = menu.find(item => item.id === itemId);

    itemToUpdate.front = newFront;
    itemToUpdate.back = newBack;

    console.log(menu);
}
    )





