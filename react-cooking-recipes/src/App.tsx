import { Recipe } from "../shared/types/Recipe.ts";
import { RecipeCard } from "./components/RecipeCard";

function App() {
  const recipe: Recipe = {
    title: "Food",
    ingredients: [
      {
        amount: 4,
        unit: "each",
        name: "egg",
        isAllergen: true,
      },
      {
        amount: 0.5,
        unit: "kg",
        name: "flour",
        isAllergen: false,
      },
    ],
    allergens: [],
    cookingSteps: ["preheat", "stir", "fry"],
    photoURL:
      "https://fastly.picsum.photos/id/1011/282/186.jpg?hmac=dgCZ5K249wOE2qT0zwwFUoaw6CA_th-Un98hFQdhWwg",
  };

  recipe.allergens = recipe.ingredients
    .filter((ingredient) => ingredient.isAllergen)
    .map((ingredient) => ingredient.name);

  return <RecipeCard recipe={recipe} />;
}

export default App;
