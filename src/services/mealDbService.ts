import type {ApiUrlInterface} from "../interfaces/ApiUrlInterface";
import type {MealInterface} from "../interfaces/MealInterface";
import axios from "axios";
import type {CategoriesInterface} from "../interfaces/CategoriesInterface";



const API_URL = "https://www.themealdb.com/api/json/v1/1/";


function buildApiUrl(endpoint: string, data: ApiUrlInterface | null): string {
    if (data !== null) {
        return `${API_URL}${endpoint}?${data.param}=${data.value}`;
    }
    return `${API_URL}${endpoint}`;
}

async function callApi<T>(endpoint: string, data: ApiUrlInterface | null): Promise<T> {
    const url = buildApiUrl(endpoint, data);
    const response = await axios.get<T>(url);
    return response.data;
}



export async function searchMeal(data: ApiUrlInterface): Promise<MealInterface[]> {
    const { meals } = await callApi<{ meals: MealInterface[] }>("search.php", data);
    return meals;
}

export async function getMealByCategory(data: ApiUrlInterface): Promise<MealInterface[]> {
    const { meals } = await callApi<{ meals: MealInterface[] }>("filter.php", data);
    return meals ?? [];
}


export async function getMealById(data: ApiUrlInterface): Promise<MealInterface[]> {
    const { meals } = await callApi<{ meals: MealInterface[] }>("lookup.php", data);
    return meals;
}

export async function getMealCategories(data: ApiUrlInterface): Promise<CategoriesInterface[]> {
    const { meals } = await callApi<{ meals: CategoriesInterface[] }>("list.php", data);
    return meals;
}


export async function getMealsByIngredients(ingredients:string[]): Promise<MealInterface[]> {

    const mealPromises = [];

    for (let ingredient of ingredients) {
        mealPromises.push(callApi<{ meals: MealInterface[] }>("random.php", {param: 'i', value: ingredient}));
    }
    const mealsArray = await Promise.all(mealPromises);
    return mealsArray.flatMap(response => response.meals);
}

export async function getRandomMeal(amount: number) : Promise<MealInterface[]> {
    const mealPromises: Promise<{ meals: MealInterface[] }>[] = [];
    for (let i = 0; i < amount; i++) {
        mealPromises.push(callApi<{ meals: MealInterface[] }>("random.php", null));
    }

    const mealsArray = await Promise.all(mealPromises);
    return mealsArray.flatMap(response => response.meals);
}
