import { Recipe } from "../shared/types/Recipe.ts";
import { RecipeCard } from "./components/RecipeCard";
import theme from "../shared/utils/theme.ts";
import { ThemeProvider, Typography, useMediaQuery } from "@mui/material";
import { RecipesBar } from "./components/RecipesBar";
import { StyledAppContainer, StyledTitle } from "./App.styled.tsx";
import "./poppins.css";
import { useState } from "react";
import { NewRecipeForm } from "./components/NewRecipeForm";

function App() {
  const [activeRecipe, setActiveRecipe] = useState(null);
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

  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <StyledTitle>
        <Typography variant="pageTittle">The Cook Book</Typography>
      </StyledTitle>
      {isViewportSmallerThanMd ? (
        <StyledAppContainer>
          {activeRecipe ? <RecipeCard recipe={recipe} /> : <NewRecipeForm />}
        </StyledAppContainer>
      ) : (
        <StyledAppContainer>
          {activeRecipe ? <RecipeCard recipe={recipe} /> : <NewRecipeForm />}
          <RecipesBar />
        </StyledAppContainer>
      )}
    </ThemeProvider>
  );
}

export default App;
