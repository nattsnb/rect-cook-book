import { StyledRecipeCardContainer } from "../RecipeCard/RecipeCard.styled.tsx";
import { Button, Divider, TextField, Typography } from "@mui/material";
import { CookingStepsForm } from "./CookingStepsForm.tsx";
import { IngredientsForm } from "./IngredientsForm.tsx";
import { Recipe } from "../../shared/types/Recipe.ts";
import { useRecipeForm } from "./useRecipeForm.tsx";
import {
  StyledButtonContainer,
  StyledFormSectionContainer,
} from "./RecipesForm.styled.tsx";

interface RecipeFormProps {
  onSaveRecipe: (recipe: Recipe) => void;
  activeRecipe: Recipe | null;
}

const emptyRecipe: Recipe = {
  title: "",
  ingredients: [
    {
      id: 1,
      amount: null,
      unit: "",
      name: "",
      isAllergen: null,
    },
  ],
  cookingSteps: [
    { id: 1, step: "" },
    { id: 2, step: "" },
  ],
  photoURL: "",
};

export function RecipeForm({ onSaveRecipe, activeRecipe }: RecipeFormProps) {
  const recipe = activeRecipe || emptyRecipe;

  const {
    recipeTitle,
    setRecipeTitle,
    ingredients,
    cookingSteps,
    photoURL,
    setPhotoURL,
    onClickAddIngredient,
    onClickDeleteIngredient,
    onClickAddStep,
    onClickDeleteStep,
    handleChangeIngredient,
    handleChangeStep,
  } = useRecipeForm(recipe);

  const createNewRecipe = (): Recipe => {
    return {
      title: recipeTitle,
      ingredients: ingredients,
      cookingSteps: cookingSteps,
      photoURL: photoURL,
    };
  };

  return (
    <StyledRecipeCardContainer>
      <StyledFormSectionContainer>
        <Typography variant="formSection">Recipe title</Typography>
        <Divider variant="custom" />
        <TextField
          id="title"
          value={recipeTitle}
          placeholder="Recipe title..."
          onChange={(event) => setRecipeTitle(event.target.value)}
        />
      </StyledFormSectionContainer>
      <StyledFormSectionContainer>
        <Typography variant="formSection">Ingredients</Typography>
        <Divider variant="custom" />
        <IngredientsForm
          ingredients={ingredients}
          onClickAddIngredient={onClickAddIngredient}
          onClickDeleteIngredient={onClickDeleteIngredient}
          onChangeIngredient={handleChangeIngredient}
        />
      </StyledFormSectionContainer>
      <StyledFormSectionContainer>
        <Typography variant="formSection">Cooking steps</Typography>
        <Divider variant="custom" />
        <CookingStepsForm
          cookingSteps={cookingSteps}
          onClickAddStep={onClickAddStep}
          onClickDeleteStep={onClickDeleteStep}
          onChangeStep={handleChangeStep}
        />
      </StyledFormSectionContainer>
      <StyledFormSectionContainer>
        <Typography variant="formSection">Photo URL</Typography>
        <Divider variant="custom" />
        <TextField
          id="photoURL"
          value={photoURL}
          placeholder="http://www...."
          onChange={(event) => setPhotoURL(event.target.value)}
        />
      </StyledFormSectionContainer>
      <StyledButtonContainer>
        <Button
          onClick={() => {
            const newRecipe = createNewRecipe();
            onSaveRecipe(newRecipe);
          }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </StyledButtonContainer>
    </StyledRecipeCardContainer>
  );
}
