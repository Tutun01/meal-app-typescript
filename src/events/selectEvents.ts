import {searchMealsHandler} from "../handlers/searchMealsHandler";


export function hookSelectEvents() {

    const searchMeals = document.getElementById('searchMeals') as HTMLButtonElement;

    searchMeals.addEventListener('click', searchMealsHandler);
}