import { Recipe } from "../shared/types/Recipe.ts";
import { RecipeCard } from "./components/RecipeCard";
import theme from "../shared/utils/theme.ts";
import { ThemeProvider } from "@mui/material";

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
    photoURL: "https://picsum.photos/600/900",
  };

  recipe.allergens = recipe.ingredients
    .filter((ingredient) => ingredient.isAllergen)
    .map((ingredient) => ingredient.name);

  return (
    <ThemeProvider theme={theme}>
      <RecipeCard recipe={recipe} />
    </ThemeProvider>
  );
}

export default App;
