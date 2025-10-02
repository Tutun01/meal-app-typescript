import type { ApiUrlInterface } from "../interfaces/ApiUrlInterface";
import type { MealInterface } from "../interfaces/MealInterface";
import type { CategoriesInterface } from "../interfaces/CategoriesInterface";
export declare function searchMeal(data: ApiUrlInterface): Promise<MealInterface[]>;
export declare function getMealByCategory(data: ApiUrlInterface): Promise<MealInterface[]>;
export declare function getMealById(data: ApiUrlInterface): Promise<MealInterface[]>;
export declare function getMealCategories(data: ApiUrlInterface): Promise<CategoriesInterface[]>;
export declare function getMealsByIngredients(ingredients: string[]): Promise<MealInterface[]>;
export declare function getRandomMeal(amount: number): Promise<MealInterface[]>;
//# sourceMappingURL=mealDbService.d.ts.map