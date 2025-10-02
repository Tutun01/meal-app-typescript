import {hookSelectEvents} from "./events/selectEvents";
import {getMealCategories, getRandomMeal} from "./services/mealDbService";
import {fillSelectWithOption} from "./helpers/htmlSelectHelper";
import {showMeals} from "./helpers/showMealHelper";
import {MealInterface} from "./interfaces/MealInterface";

async function main(){
 hookSelectEvents();

 getMealCategories({ param: 'c', value: 'list' })
     .then(categories => {
      fillSelectWithOption("categorySelect", categories);
     });

 const categories = await getMealCategories({ param: 'c', value: 'list' });
 const ingredients = await getMealCategories({ param: 'i', value: 'list' });
 const areas = await getMealCategories({ param: 'a', value: 'list' });

 fillSelectWithOption("categorySelect", categories);
 fillSelectWithOption("ingredientSelect", ingredients);
 fillSelectWithOption("areaSelect", areas);

 const randomMeals: MealInterface[] = await getRandomMeal(3);
 showMeals("mealHolder", randomMeals);
}

main();