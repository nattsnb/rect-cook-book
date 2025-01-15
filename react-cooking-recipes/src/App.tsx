import { Recipe } from "../shared/types/Recipe.ts";
import { RecipeCard } from "./components/RecipeCard";
import theme from "../shared/utils/theme.ts";
import { ThemeProvider, Typography, useMediaQuery } from "@mui/material";
import { RecipesBar } from "./components/RecipesBar";
import { StyledAppContainer, StyledTitle } from "./App.styled.tsx";
import "./poppins.css";
import { useState } from "react";
import { RecipeForm } from "./components/RecipeForm";

function App() {
  const [activeRecipe, setActiveRecipe] = useState(null);
  const recipe: Recipe = {
    title: "Food",
    ingredients: [
      {
        id: 1,
        amount: 4,
        unit: "each",
        name: "egg",
        isAllergen: true,
      },
      {
        id: 2,
        amount: 0.5,
        unit: "kg",
        name: "flour",
        isAllergen: false,
      },
    ],
    allergens: [],
    cookingSteps: [
      { id: 1, step: "preheat" },
      { id: 2, step: "stir" },
      { id: 3, step: "fry" },
    ],
    photoURL: "https://picsum.photos/600/900",
  };

  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <StyledTitle>
        <Typography variant="pageTittle">The Cook Book</Typography>
      </StyledTitle>
      {isViewportSmallerThanMd ? (
        <StyledAppContainer>
          {activeRecipe ? <RecipeCard recipe={recipe} /> : <RecipeForm />}
        </StyledAppContainer>
      ) : (
        <StyledAppContainer>
          {activeRecipe ? <RecipeCard recipe={recipe} /> : <RecipeForm />}
          <RecipesBar />
        </StyledAppContainer>
      )}
    </ThemeProvider>
  );
}

export default App;
