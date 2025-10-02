import {getMealByCategory, getMealsByIngredients} from "../services/mealDbService";

export async function searchMealsHandler() {
    const categorySelect = document.getElementById('categorySelect') as HTMLSelectElement;
    const ingredientSelect = document.getElementById('ingredientSelect') as HTMLSelectElement;
    const areaSelect = document.getElementById('areaSelect') as HTMLSelectElement;

    const selectedIngredients = Array.from(ingredientSelect.selectedOptions)
        .map(option => option.value);

    const response = await getMealByCategory({param: 'c', value: categorySelect.value});
    const responseArea = await getMealByCategory({param: 'a', value: areaSelect.value});

    if (selectedIngredients.length > 1) {
        const responseIngredients = await getMealsByIngredients(selectedIngredients)
    }

}