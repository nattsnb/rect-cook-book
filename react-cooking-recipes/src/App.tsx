import { Recipe } from "./shared/types/Recipe.ts";
import { RecipeCard } from "./components/RecipeCard";
import theme from "./shared/utils/theme.ts";
import {
  Button,
  Drawer,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { RecipesBar } from "./components/RecipesBar";
import {
  StyledAppContainer,
  StyledMyRecipesButtonContainer,
  StyledTitle,
} from "./App.styled.tsx";
import "./poppins.css";
import { useState, useEffect } from "react";
import { RecipeForm } from "./components/RecipeForm";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);
  const [isEditModeOn, setIsEditModeOn] = useState<boolean>(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isViewportSmallerThanMd = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const storedRecipes = JSON.parse(
      localStorage.getItem("savedRecipes") || "[]",
    );
    setRecipes(storedRecipes);
  }, []);

  const turnOnNewRecipeForm = () => {
    setActiveRecipe(null);
    setIsEditModeOn(true);
  };

  const turnOnRecipeCard = (recipe: Recipe) => {
    setActiveRecipe(recipe);
    setIsEditModeOn(false);
  };

  const handleSaveRecipe = (newRecipe: Recipe) => {
    const isDuplicate = recipes.some(
      (recipe) =>
        recipe.title.trim().toLowerCase() ===
          newRecipe.title.trim().toLowerCase() &&
        (!activeRecipe ||
          activeRecipe.title.trim().toLowerCase() !==
            newRecipe.title.trim().toLowerCase()),
    );

    if (isDuplicate) {
      alert(
        "A recipe with this title already exists! Please choose a different title.",
      );
      return;
    }

    const updatedRecipes = activeRecipe
      ? recipes.map((recipe) =>
          recipe.title === activeRecipe.title ? newRecipe : recipe,
        )
      : [...recipes, newRecipe];

    setRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
    alert(activeRecipe ? "Recipe updated!" : "Recipe saved!");

    turnOnRecipeCard(newRecipe);
  };

  const deleteRecipe = (title: string) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.title !== title);
    setRecipes(updatedRecipes);
    localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));

    if (activeRecipe && activeRecipe.title === title) {
      turnOnNewRecipeForm();
    }
  };

  const deleteAllRecipes = () => {
    localStorage.removeItem("savedRecipes");
    setRecipes([]);
    turnOnNewRecipeForm();
  };

  const handleSetActiveRecipe = (recipe: Recipe | null) => {
    toggleFiltersDrawer(false)();
    if (recipe) {
      turnOnRecipeCard(recipe);
    } else {
      turnOnNewRecipeForm();
    }
  };

  const handleAddNewRecipe = () => {
    turnOnNewRecipeForm();
    toggleFiltersDrawer(false)();
  };

  const toggleFiltersDrawer = (isOpen: boolean) => () => {
    setIsDrawerOpen(isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledTitle>
        <Typography variant="pageTittle">The Cook Book</Typography>
      </StyledTitle>
      {isViewportSmallerThanMd ? (
        <div>
          <StyledMyRecipesButtonContainer>
            <Button variant="contained" onClick={toggleFiltersDrawer(true)}>
              My recipes
            </Button>
          </StyledMyRecipesButtonContainer>
          <Drawer
            open={isDrawerOpen}
            onClose={toggleFiltersDrawer(false)}
            anchor="right"
          >
            <RecipesBar
              recipes={recipes}
              handleSetActiveRecipe={handleSetActiveRecipe}
              deleteRecipe={deleteRecipe}
              deleteAllRecipes={deleteAllRecipes}
              handleAddNewRecipe={handleAddNewRecipe}
              toggleFiltersDrawer={toggleFiltersDrawer}
            />
          </Drawer>
          <StyledAppContainer>
            {isEditModeOn || !activeRecipe ? (
              <RecipeForm
                onSaveRecipe={handleSaveRecipe}
                recipes={recipes}
                isEditModeOn={isEditModeOn}
                activeRecipe={activeRecipe}
              />
            ) : (
              <RecipeCard
                recipe={activeRecipe}
                setIsEditModeOn={setIsEditModeOn}
              />
            )}
          </StyledAppContainer>
        </div>
      ) : (
        <StyledAppContainer>
          {isEditModeOn || !activeRecipe ? (
            <RecipeForm
              onSaveRecipe={handleSaveRecipe}
              recipes={recipes}
              isEditModeOn={isEditModeOn}
              activeRecipe={activeRecipe}
            />
          ) : (
            <RecipeCard
              recipe={activeRecipe}
              setIsEditModeOn={setIsEditModeOn}
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
