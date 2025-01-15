import { Recipe } from "../shared/types/Recipe.ts";
import { RecipeCard } from "./components/RecipeCard";
import theme from "../shared/utils/theme.ts";
import { ThemeProvider, Typography, useMediaQuery } from "@mui/material";
import { RecipesBar } from "./components/RecipesBar";
import { StyledAppContainer, StyledTitle } from "./App.styled.tsx";
import "./poppins.css";
import { useState, useEffect } from "react";
import { RecipeForm } from "./components/RecipeForm";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const [isEditModeOn, setIsEditModeOn] = useState<boolean>(true);

  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const storedRecipes = JSON.parse(
      localStorage.getItem("savedRecipes") || "[]",
    );
    setRecipes(storedRecipes);
  }, []);

  const handleSaveRecipe = (newRecipe: Recipe) => {
    const isDuplicate = recipes.some(
      (recipe) =>
        recipe.title.trim().toLowerCase() ===
        newRecipe.title.trim().toLowerCase(),
    );
    if (isDuplicate) {
      alert(
        "A recipe with this title already exists! Please choose a different title.",
      );
      return;
    }
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
    alert("Recipe saved!");
    console.log(updatedRecipes);
  };

  const deleteRecipe = (title: string) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.title !== title);
    setRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
  };

  const deleteAllRecipes = () => {
    localStorage.removeItem("savedRecipes");
    setRecipes([]);
  };

  const handleSetActiveRecipe = (recipe: Recipe | null) => {
    setIsEditModeOn(false);
    setActiveRecipe(recipe);
  };

  const handleAddNewRecipe = () => {
    setActiveRecipe(null);
    setIsEditModeOn(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledTitle>
        <Typography variant="pageTittle">The Cook Book</Typography>
      </StyledTitle>
      {isViewportSmallerThanMd ? (
        <StyledAppContainer>
          {!isEditModeOn ? (
            <RecipeCard recipe={activeRecipe} />
          ) : (
            <RecipeForm
              onSaveRecipe={handleSaveRecipe}
              recipes={recipes}
              isEditModeOn={isEditModeOn}
              recipe={activeRecipe}
            />
          )}
        </StyledAppContainer>
      ) : (
        <StyledAppContainer>
          {!isEditModeOn ? (
            <RecipeCard recipe={activeRecipe} />
          ) : (
            <RecipeForm
              onSaveRecipe={handleSaveRecipe}
              recipes={recipes}
              isEditModeOn={isEditModeOn}
              activeRecipe={activeRecipe}
            />
          )}
          <RecipesBar
            recipes={recipes}
            handleSetActiveRecipe={handleSetActiveRecipe}
            deleteRecipe={deleteRecipe}
            deleteAllRecipes={deleteAllRecipes}
            handleAddNewRecipe={handleAddNewRecipe}
          />
        </StyledAppContainer>
      )}
    </ThemeProvider>
  );
}

export default App;
