import {SelectOption} from "../interfaces/SelectOptionInterface";



export function fillSelectWithOption(elementId: string, data: SelectOption[] | undefined): void {
    if (!data || !Array.isArray(data)) {
        console.error("fillSelectWithOption expected array but got:", data);
        return;
    }

    const select = document.getElementById(elementId) as HTMLSelectElement | null;
    if (!select) return;

    data.forEach(option => {
        const selectOption = document.createElement("option");
        const optionData = buildValueAndText(option);

        selectOption.value = optionData.value;
        selectOption.innerText = optionData.text;

        select.append(selectOption);
    });
}



function buildValueAndText(option: SelectOption): { value: string; text: string } {
    if ("strCategory" in option) {
        return { value: option.strCategory, text: option.strCategory };
    } else if ("strIngredient" in option) {
        return { value: option.strIngredient, text: option.strIngredient };
    } else if ("strArea" in option) {
        return { value: option.strArea, text: option.strArea };
    }
    return { value: "", text: "" };
}
