import type {MealInterface} from "../interfaces/MealInterface";

export function showMeals(parent: string, data: MealInterface[]): void {
    const parentElement = document.getElementById(parent) as HTMLElement;


    data.forEach(meal => {
        const mealHolder = document.createElement("div") as HTMLDivElement;
        mealHolder.className = "meal-holder";

        const mealTitle = document.createElement("h2") as HTMLHeadingElement;
        mealTitle.className = "meal-title";
        mealTitle.innerText = meal.strMeal;

        const mealImage = document.createElement("img") as HTMLImageElement;
        mealImage.src = meal.strMealThumb;
        mealImage.alt = meal.strMeal;

        const mealCategory = document.createElement("p") as HTMLParagraphElement;
        mealCategory.className = "meal-category";
        mealCategory.innerText = meal.strCategory;

        const mealInstructions = document.createElement("p") as HTMLParagraphElement;
        mealInstructions.className = "meal-instructions";
        mealInstructions.innerText = meal.strInstructions;

        mealHolder.append(mealTitle, mealImage, mealCategory, mealInstructions);

        parentElement.append(mealHolder);
    });
}