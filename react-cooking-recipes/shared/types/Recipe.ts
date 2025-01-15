import { Ingredient } from "./Ingredient";

export interface Recipe {
  title: string;
  ingredients: Ingredient[];
  allergens: string[];
  cookingSteps: { id: number; step: string }[];
  photoURL: string;
}
