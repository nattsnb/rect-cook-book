export interface Ingredient {
  id: number;
  amount: number | null;
  unit: string;
  name: string;
  isAllergen: boolean | null;
}
