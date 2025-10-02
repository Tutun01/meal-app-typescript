
interface CategoryOption {
    strCategory: string;
}
interface IngredientOption {
    strIngredient: string;
}
interface AreaOption {
    strArea: string;
}

export type SelectOption = CategoryOption | IngredientOption | AreaOption;
