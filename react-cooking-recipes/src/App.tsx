import { Recipe } from "../shared/types/Recipe.ts";
import { RecipeCard } from "./components/RecipeCard";
import theme from "../shared/utils/theme.ts";
import { ThemeProvider, Typography, useMediaQuery } from "@mui/material";
import { RecipesBar } from "./components/RecipesBar";
import { StyledAppContainer, StyledTitle } from "./App.styled.tsx";
import "./poppins.css";

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

  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <StyledTitle>
        <Typography variant="pageTittle">The Cook Book</Typography>
      </StyledTitle>
      {isViewportSmallerThanMd ? (
        <StyledAppContainer>
          <RecipeCard recipe={recipe} />
        </StyledAppContainer>
      ) : (
        <StyledAppContainer>
          <RecipeCard recipe={recipe} />
          <RecipesBar />
        </StyledAppContainer>
      )}
    </ThemeProvider>
  );
}

export default App;
