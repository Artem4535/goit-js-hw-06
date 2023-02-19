const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientsContainer = document.querySelector('#ingredients')


const makeIngredientsItem = options => {
  return options.map(option => {
    const listItem = document.createElement('li');
    listItem.textContent = option;
    return listItem
  })
}

const elements = makeIngredientsItem(ingredients);
ingredientsContainer.append(...elements)



